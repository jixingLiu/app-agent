import { title } from 'process'
import React from 'react'

import { Form, Input, Image, Uploader } from '@nutui/nutui-react-taro'
import { Link } from '@nutui/icons-react-taro';

type IProps = {
  title: string
}
const LoanData = (props: IProps) => {
  let { title } = props

  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

  const src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xu6pwopYBUXYMtzqX-wK9xvK1Tp3TPYcxXsOvxWptQ&s'
  return (
       <div className=''>
        <div className='mb-1 bg-white'>
       `   <Form.Item
            label="贷款银行"
            name="username"
          >
            <Input placeholder="请输入贷款银行" type="text" />
          </Form.Item>
          <Form.Item
            label="贷款年限"
            name="username"
          >
            <Input placeholder="请输入贷款银行" type="text" />
          </Form.Item>
          <Form.Item
            label="业主姓名"
            name="username"
          >
            <Input placeholder="请输入姓名" type="text" />
          </Form.Item>
          <Form.Item
            label="业主电话"
            name="username"
          >
            <Input placeholder="请输入姓名" type="text" />
          </Form.Item>
          <Form.Item
            label="安装地址"
            name="username"
          >
            <Input placeholder="请输入姓名" type="text" />
          </Form.Item>`
        </div>
        <div className='mb-1 bg-white'>
         <Form.Item
            label="身份证号"
            name="username"
          >
            <Input placeholder="请输入姓名" type="text" />
          </Form.Item>`
          <div className='flex gap-2 pr-2 pb-2'>
              <Uploader
                url={uploadUrl}
                uploadLabel="身份证正面"
                className='flex-1'
              />
              <Uploader
                url={uploadUrl}
                uploadLabel="身份证反面"
                className='flex-1'
              />
            </div>
        </div>
        <div className='mb-1 bg-white'>
         <Form.Item
            label="银行卡号"
            name="username"
          >
            <Input placeholder="请输入银行卡号" type="text" />
          </Form.Item>`
          <div className='flex gap-2 pr-2 pb-2'>
            <Uploader
              url={uploadUrl}
              uploadLabel="银行照片"
              className='flex-1'
            />
          </div>
          <div className='flex gap-2 pr-2 pb-2'>
            <Uploader
              url={uploadUrl}
              uploadLabel="房屋所属表"
              className='flex-1'
              uploadIcon={<Link />}
            />
            <Uploader
              url={uploadUrl}
              uploadLabel="并网申请表"
              className='flex-1'
              uploadIcon={<Link />}
            />
          </div>
        </div>
    </div>
  )
}

export default LoanData