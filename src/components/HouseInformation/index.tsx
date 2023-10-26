import { title } from 'process'
import React, { useState } from 'react'
import Taro from '@tarojs/taro';

import { Form, Input, Picker, TextArea, Uploader } from '@nutui/nutui-react-taro'
import { Location2, Ask2 } from '@nutui/icons-react-taro';
import { useToast } from '@/hooks/useToast';

type IProps = {
  title: string
}
const HouseInformation = (props: IProps) => {
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
    <div className='mb-1'>
      <div className=' pt-4 bg-white mb-1'>
        <div className='text-xs text-slate-300'>房屋信息</div>
          <Form.Item
            label="场景类型"
            name="username"
          >
            <div className='text-[#808080]' onClick={() => setVisible(!visible)}>选择场景类型</div>
          </Form.Item>
          <Form.Item
            label="经纬度"
            name="username"
          >
            <div className='flex items-center'>
              <Input value={latitude} placeholder="经度" type="text" />
              <Input value={longitude} placeholder="纬度" type="text" />
              <Location2 onClick={getLocation} />
            </div>
          </Form.Item>
          <Form.Item
            label="场地数量"
            name="username"
          >
            <div className='flex items-center'>
              <Input placeholder="请输入组件功率" type="text" />
              <span className='text-xs text-[12px] text-slate-600'>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="场地个数"
            name="username"
          >
            <Input placeholder="请输入场地个数" type="number" />
          </Form.Item>
          <Form.Item
            label="业主要求"
            name="username"
          >
            <TextArea showCount rows={6} placeholder='请输入业主要求' maxLength={300} />
          </Form.Item>
      </div>
      <div className='pt-2 bg-white'>
        <div className='flex justify-between items-center text-xs text-slate-400 mb-2 pr-2'>
          <div>房屋全景</div>
          <div className='gap-1 items-center flex'>
            <Ask2 className=' text-red-600'></Ask2>
            <span>查看示例</span>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-2 pr-2 pb-2 flex-wrap'>
          <Uploader
            url={uploadUrl}
            uploadLabel="东面"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="西面"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="正面"
          />
          <Uploader
            url={uploadUrl}
            uploadLabel="平面草图"
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

export default HouseInformation