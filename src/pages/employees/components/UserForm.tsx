import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { Popup, Form, Input, Radio, Button } from '@nutui/nutui-react-taro';
import { EnumEmployeesMap } from '@/constants'
import Taro from '@tarojs/taro';

type IProps = {
  onConfirm: (values: any) => void
}
const UserForm = (props: IProps, ref) => {

  let { onConfirm } = props;

  const [showBasic, setShowBasic] = useState(false);

  const [item, setItem] = useState<null|Object>(null)
  const [form] = Form.useForm();

  // 使用 useImperativeHandle 定义要暴露给父组件的函数
  useImperativeHandle(ref, () => ({
    // 这里可以定义要暴露给父组件的函数
    openPopup: (item) => {
      if (item) {
        setItem(item)
      } else {
        setItem({
          type: 'normalEmployee',
          pssword: 'admin123'
        })
      }

      setShowBasic(true);
    },
    closePopup: () => {
      form.resetFields();
      setItem(null)
      setShowBasic(false);
    },
  }));

  return (
    <Popup
      style={{width: '80%'}}
      lockScroll visible={showBasic} onClose={() => setShowBasic(false)}>
      <div className='bg-white rounded-md shadow-md min-w-2/3 w-full py-4 py-2'>
        <div className=' rounded-b-md text-center text-sm leading-8 text-gray-800'>编辑信息</div>
        <Form
          initialValues={item}
          divider
          form={form}
          onFinish={(values) => {
            if (!values) {
              Taro.showToast({title: '请先填写表单', icon: 'error'})
              return
            }
            let { name, phone, pssword, type } = values
            let errorText = ''
            if (!name) {
              errorText += '姓名 '
            }
            if (!phone) {
              errorText += '电话 '
            }
            if (!pssword) {
              errorText += '密码 '
            }
            if (!type) {
              errorText += '管理员 '
            }
            if (!errorText) {
              onConfirm(Object.assign((item|| {}), values))
              return
            }
            Taro.showToast({title: `${errorText}不能为空`, icon: 'error'})
          }}
          // onFinishFailed={(values, errors) => submitFailed(errors)}
          footer={
            <div className="w-full">
              <Button formType="submit" block type="primary">
                提交
              </Button>
            </div>
          }
        >
          <Form.Item name='name' label='员工姓名'>
            <Input placeholder='请输入姓名' type='text' maxLength={6} />
          </Form.Item>
          <Form.Item name='phone' label='电话号码'>
            <Input placeholder='请输入电话号码' type='mobile' maxLength={11} />
          </Form.Item>
          <Form.Item name='pssword' label='密码'>
            <Input placeholder='请输入密码' type='password' maxLength={18} />
          </Form.Item>
          <Form.Item name='type' label='是否管理员'>
            <Radio.Group direction="horizontal">
              <Radio value="subAdmin">是</Radio>
              <Radio value="normalEmployee">否</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    </Popup>
  );
}

export default forwardRef(UserForm);
