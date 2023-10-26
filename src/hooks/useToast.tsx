import Taro from '@tarojs/taro';
import { Toast } from '@nutui/nutui-react-taro';
import { useState } from 'react';

interface ToastOptions {
  visible?: boolean,
  msg: string;
  type?: string,
  cover?: boolean;
  duration?: number;
  icon?: string;
}

const defaultOptions = {
  visible: true,
  msg: 'toast',
  type: 'text',
  cover: false,
  duration: 2,
  closeOnOverlayClick: false,
  icon: '',
  center: true,
}

export const useToast = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [toastOptions, setToastOptions] = useState<ToastOptions>(defaultOptions)

  
  const showToast = (props: ToastOptions) => {
    setToastOptions((toastOptions) => ({
      ...toastOptions,
      ...props
    }))
    return ToastComponent
  };

  const hideToast = () => {
    setIsOpen(false);
  };

  const ToastComponent = <Toast {...toastOptions} onClose={hideToast} />

  return {
    showToast,
    hideToast,
    ToastComponent,
  };
};
