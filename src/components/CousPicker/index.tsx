import { Cell, Picker } from '@nutui/nutui-react-taro'
import React, { useEffect, useState } from 'react'
import { DownArrow } from '@nutui/icons-react-taro'
import { PickerOption } from '@nutui/nutui-react-taro/dist/types/packages/picker'

interface OptionData {
  value: string | number,
  text: string
}
type IProps = {
  defaultValue: string,
  listOptions: OptionData[],
  handleConfirm: (val) => void
}

const CousPicker = (props: IProps) => {
  const { defaultValue, listOptions,  handleConfirm } = props

  console.log(defaultValue, listOptions, 'defaultValue, listOptions')

  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false)
  const [baseDefault, setBaseDefault] = useState('')


  const confirmPicker = (options: PickerOption[]) => {
    setBaseDefault(options[0]?.text || '请选择');
    handleConfirm(options[0]?.value || '')
    setIsPickerVisible(false);
  };

  useEffect(() => {
    const defaultItem = listOptions.find((item) => item.value === defaultValue);
    setBaseDefault(defaultItem?.text || '请选择');
    handleConfirm(defaultValue)
  }, [defaultValue]);

  return (
    <>
      <div className='flex justify-between items-center' onClick={() => {
        setIsPickerVisible(!isPickerVisible)
      }}>
        <span>{baseDefault}</span>
        <DownArrow />
      </div>
      <Picker
        visible={isPickerVisible}
        options={listOptions}
        onConfirm={(list, values) => confirmPicker(list, values)}
        onClose={() => setIsPickerVisible(false)}
       />
    </>
  )
}

export default CousPicker

function handleConfirm(arg0: string | number) {
  throw new Error('Function not implemented.')
}
