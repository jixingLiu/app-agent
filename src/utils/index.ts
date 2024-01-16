export const formatChinesePhoneNumber = (phoneNumber: string): string => {
  // 去除字符串中的非数字字符
  const cleaned: string = phoneNumber.replace(/\D/g, '');

  // 判断电话号码长度并进行格式化
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else {
    return phoneNumber; // 无法格式化的情况，返回原始输入
  }
}

// 示例用法
const phoneNumber: string = '13812345678';
const formattedPhoneNumber: string = formatChinesePhoneNumber(phoneNumber);
console.log(formattedPhoneNumber); // 输出 "138-1234-5678"


export const formatImageUrl = (url: string = '', name?: string) => {
  if (!url) {
    return []
  }
  return [
    {
      url: url,
      name: name,
      status: 'success',
      type: 'image',
      uid: new Date().getTime().toString(),
    }
  ]
}

export const formatDate = (date: Date, format: string): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  format = format.replace('YYYY', year.toString());
  format = format.replace('MM', month);
  format = format.replace('DD', day);
  format = format.replace('HH', hours);
  format = format.replace('mm', minutes);
  format = format.replace('ss', seconds);

  return format;
};


type updateParamProps = {
  responseText: XMLHttpRequest['responseText'],
  // option: UploadOptions,
  fileList: any[],
  [key: string]: any,
  percentage: string | number
}


export const multipleUploadResult = (param: updateParamProps) => {
  let { fileList = [] } = param
  return fileList?.map(item => {
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
  let { fileList } = param

  return fileList?.map(item => {
    return {
      status: item.status,
      type: item.type,
      url: JSON.parse(item.responseText || `{}`)?.url,
      uid: item.uid,
      name: item.name,
    }
  }) ||[]
}
