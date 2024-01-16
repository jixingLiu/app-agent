type updateParamProps = {
  responseText: XMLHttpRequest['responseText'],
  // option: UploadOptions,
  fileList: any[],
  [key: string]: any,
  percentage: string | number
}


export const multipleUploadResult = (param: updateParamProps) => {
  let { files = [], fileList = [], responseText } = param
  let list = fileList?.length ? fileList : files
  if (!list.length) {
    return [
      {
        status: 'success',
        type: 'image',
        url: JSON.parse(responseText || `{}`)?.urls,
        uid: Math.random().toString(),
        name: JSON.parse(responseText || `{}`)?.fileNames
      }
    ]
  }
  return list?.map(item => {
    if (!item.responseText) return item
    return {
      status: item.status,
      type: item.type,
      url: JSON.parse(item.responseText || `{}`)?.urls,
      uid: item.uid,
      name: item.name,
    }
  }) || []
}


export const uploadResult = (param: updateParamProps) => {
  let { files = [], fileList = [] } = param
  let list = fileList?.length ? fileList : files

  return list?.map(item => {
    return {
      status: item.status,
      type: item.type,
      url: JSON.parse(item.responseText || `{}`)?.url,
      uid: item.uid,
      name: item.name,
    }
  }) ||[]
}


const fileToDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target!.result as string);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
};

const dataURLToImage = (dataURL: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to convert DataURL to Image'));
    img.src = dataURL;
  });
};

const canvasToFile = (canvas: HTMLCanvasElement, mimeType: string, quality: number): Promise<Blob> => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      }
    }, mimeType, quality);
  });
};

export const beforeUpload = async (files: File[]): Promise<File[]> => {
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const base64 = await fileToDataURL(files[0]);
    const img = await dataURLToImage(base64);
    canvas.width = img.width;
    canvas.height = img.height;
    context.clearRect(0, 0, img.width, img.height);
    context.drawImage(img, 0, 0, img.width, img.height);
    const blob = await canvasToFile(canvas, 'image/jpeg', 0.5);
    const f = new File([blob], files[0].name, { type: files[0].type });
    return [f];
  } catch (error) {
    console.error('Error during image processing:', error);
    return [];
  }
}

interface sourceType {
  /** 从相册选图 */
  album: string;
  /** 使用相机 */
  camera: string;
}

export const sourceType:(keyof sourceType)[] = ['album','camera']