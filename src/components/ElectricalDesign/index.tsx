import { title } from 'process'
import React, { useState } from 'react'
import Taro from '@tarojs/taro';

import { Form, Input, Picker, TextArea, Uploader } from '@nutui/nutui-react-taro'
import { Location2, Ask2 } from '@nutui/icons-react-taro';
import { useToast } from '@/hooks/useToast';

type IProps = {
  title: string
}
const ElectricalDesign = (props: IProps) => {
  let { title } = props
  const toast = useToast()

  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')

  const [longitude, setLongitude] = useState<string>('')
  const [latitude, setLatitude] = useState<string>('')
  const listData1 = [
    [
      { value: 1, text: '南京市',},
      { value: 2, text: '无锡市',},
      { value: 3, text: '海北藏族自治区',},
      { value: 4, text: '北京市',},
      { value: 5, text: '连云港市',},
      { value: 8, text: '大庆市',},
      { value: 9, text: '绥化市',},
      { value: 10,text: '潍坊市',},
      { value: 12,text: '乌鲁木齐市'},
    ],
  ]

  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

  const src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xu6pwopYBUXYMtzqX-wK9xvK1Tp3TPYcxXsOvxWptQ&s'

  const changePicker = (list: any[], option: any, columnIndex: number) => {
    console.log(columnIndex, option)
  }
  const confirmPicker = (options: [], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setBaseDesc(description)
  }

  const getLocation = () => {
    Taro.getLocation({
      type: 'wgs84', // 使用 GPS 坐标
      success: (res) => {
        const { latitude, longitude } = res;
        setLatitude(latitude.toString())
        setLongitude(longitude.toString())
        console.log(latitude, longitude);
        // this.setState({ latitude, longitude });
      },
      fail: (error) => {
        console.error('获取经纬度失败', error);
        toast.showToast({
          msg: '获取经纬度失败',
        })
        // Toast.show()
      },
    });
  }
  return (
    <div className=''>
      <div className=' pt-4 bg-white mb-1'>
          <div className='flex justify-between items-center text-xs text-slate-400 mb-2 pr-2'>
            <div>电器设计图</div>
            <div className='gap-1 items-center flex'>
              <Ask2 className=' text-red-600'></Ask2>
              <span>查看示例</span>
            </div>
          </div>
          <Form.Item
            label="逆变器位置"
            name="username"
          >
            <div className='text-[#808080]' onClick={() => setVisible(!visible)}>选择逆变器位置</div>
          </Form.Item>
          <Form.Item
            label="并网箱位置"
            name="username"
          >
            <div className='text-[#808080]' onClick={() => setVisible(!visible)}>选择并网箱位置</div>
          </Form.Item>
        <div className='grid grid-cols-3 gap-2 pr-2 pt-4 pb-2 flex-wrap'>
          <Uploader
            url={uploadUrl}
            uploadLabel="电站布置图"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="电器设计图"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="并网箱系统图"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="防雷接地系统图"
          />
           <Uploader
            url={uploadUrl}
            uploadLabel="防雷接地做法图"
          />
        </div>
      </div>
      
      <Picker
        visible={visible}
        options={listData1}
        onConfirm={(options, value) => confirmPicker(options, value)}
        onClose={() => setVisible(false)}
        onChange={changePicker}
      />
    </div>
  )
}

export default ElectricalDesign