type updateParamProps = {
  responseText: XMLHttpRequest['responseText'],
  // option: UploadOptions,
  fileList: any[],
  [key:string]: any,
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
   })
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
   })
}