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