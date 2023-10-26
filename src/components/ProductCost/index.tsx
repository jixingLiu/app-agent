import React, { useState } from 'react'

import { Form, Input, Picker,  Uploader } from '@nutui/nutui-react-taro'

const ProductCost = () => {

  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')
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

  return (
    <div className='mb-1'>
      <div className=' pt-2 bg-white mb-1'>
        <div className='text-xs text-slate-300'>组件信息</div>
          <Form.Item
            label="组件型号"
            name="username"
          >
            <div className='text-[#808080]' onClick={() => setVisible(!visible)}>选择城市</div>
          
          </Form.Item>
          <Form.Item
            label="组件功率"
            name="username"
          >
            <div className='flex items-center'>
              <Input placeholder="请输入组件功率" type="text" />
              <span className='text-xs text-[12px] text-slate-600'>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="组件数量"
            name="username"
          >
            <Input placeholder="请输入贷款银行" type="number" />
          </Form.Item>
          <Form.Item
            label="逆变器功率"
            name="username"
          >
            <div className='flex items-center'>
              <Input placeholder="请输入逆变器功率" type="text" />
              <span className='text-xs text-[12px] text-slate-600'>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="逆变器数量"
            name="username"
          >
            <Input placeholder="请输入贷款银行" type="text" />
          </Form.Item>
      </div>
      <div className='pt-2 bg-white mb-1'>
        <Form.Item
          label="装机容量"
          name="username"
        >
          <div className='flex items-center'>
            <Input placeholder="请输入组件功率" type="text" />
            <span className='text-xs text-[12px] text-slate-600'>W</span>
          </div>
        </Form.Item>
        <Form.Item
          label="电站总造价"
          name="username"
        >
          <div className='flex items-center'>
            <Input placeholder="请输入组件功率" type="text" />
            <span className='text-xs text-[12px] text-slate-600'>元</span>
          </div>
        </Form.Item>
        <Form.Item
          label="贷款额度"
          name="username"
        >
          <div className='flex items-center'>
            <Input placeholder="请输入组件功率" type="text" />
            <span className='text-xs text-[12px] text-slate-600'>元</span>
          </div>
        </Form.Item>
        <div className='flex gap-2 pr-2 pb-2'>
          <Uploader
            url={uploadUrl}
            uploadLabel="首付款凭证"
            className='flex-1'
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

export default ProductCost