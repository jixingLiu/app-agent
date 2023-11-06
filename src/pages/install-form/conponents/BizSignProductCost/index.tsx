import React, { useEffect, useState } from "react";
import { Button, Form, Input, Picker, Uploader } from "@nutui/nutui-react-taro";
import { formatImageUrl } from "@/utils/index";
import { uploadResult } from '../../utils/index'

interface IProps {
  item: any;
  id: string | number;
  detailData: any,
  onConfim: (values: any, apiName: string) => void
}

type itemComponentType = {
  type: string,
  count: number,
  power: string,
  [key:string]: any,
}

const BizSignProductCost = (props: IProps) => {
  let { item, id, detailData, onConfim } = props;

  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [componentType, setComponentType] = useState<itemComponentType>()
  const [visible, setVisible] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateFormData = (key:string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };

  useEffect(() => {
    setFormData(Object.assign(item || {}, {id:id}));
    form.setFieldsValue({
      ...(item || {}),
      id: id
    });
    setComponentType(item?.component[0]||null)
  }, [item]);

  const confirmPicker = (options: itemComponentType[], values: (string | number)[]) => {
    setComponentType( () => options[0])
    // todo setValue
  }
  useEffect(() => {
    setIsEdit(['acceptance'].includes(detailData?.state))
  }, [detailData?.state])

  return (
    <div>
      <Form 
        labelPosition="top" 
        divider 
        initialValues={formData} 
        form={form}
        footer={ isEdit && (
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                console.log(formData, 'formData')
                onConfim(formData, "updateBizSignProductCost");
              }}
              formType="submit"
              block
            >
              保存
            </Button>
          </>
        )}
      >
        <div className="mb-1 bg-white">
          <Form.Item label="组件型号" name="component">
            {/* <div className='text-[#808080]' onClick={() => {
              if (!isEdit) return
              setVisible(!visible)
            }}>
              {componentType?.type || '请选择组件型号'}
            </div> */}
            <Input
              onChange={(value) => {
                updateFormData('component', value)
              }}
             disabled={!isEdit} placeholder="请输入组件型号" type="text" />
          </Form.Item>
          <Form.Item
            label="组件功率"
            name="username"
          >
            <div className='flex items-center'>
              <Input  onChange={(value) => {
                updateFormData('component', value)
              }} disabled={!isEdit} placeholder="请输入组件功率" type="text" />
              <span className='text-xs text-[12px] text-slate-600'>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="组件数量"
            name="username"
          >
            <Input  onChange={(value) => {
                updateFormData('component', value)
              }} disabled={!isEdit} placeholder="请输入数量" type="number" />
          </Form.Item>
          <Form.Item
            label="逆变器功率"
            name="username"
          >
            <div className='flex items-center'>
              <Input  onChange={(value) => {
                updateFormData('component', value)
              }} disabled={!isEdit} placeholder="请输入逆变器功率" type="text" />
              <span className='text-xs text-[12px] text-slate-600'>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="逆变器数量"
            name="username"
          >
            <Input  onChange={(value) => {
                updateFormData('component', value)
              }} disabled={!isEdit} placeholder="请输入逆变器数量" type="number" />
          </Form.Item>
          <Form.Item
            label="装机容量"
            name="installedCapacity"
          >
            <div className='flex items-center'>
              <Input placeholder="请输入装机容量" type="number"
                disabled={!isEdit}
                
                value={formData.installedCapacity} 
                onChange={(value) => {
                  updateFormData('installedCapacity', value)
                }}
              />
              <span className='text-xs text-[12px] text-slate-600'>W</span>
            </div>
          </Form.Item>
          <Form.Item
            label="电站总造价"
            name="totalCost"
          >
            <div className='flex items-center'>
              <Input 
                value={formData.totalCost} 
                disabled={!isEdit}
                onChange={(value) => { 
                  updateFormData('totalCost', value)
                }}
                placeholder="请输入站总造价" type="number" />
              <span className='text-xs text-[12px] text-slate-600'>元</span>
            </div>
          </Form.Item>
          <Form.Item
            label="贷款额度"
            name="loanAmount"
          >
            <div className='flex items-center'>
              <Input placeholder="请输入贷款额度" type="number" 
                value={formData.loanAmount}
                disabled={!isEdit}
                onChange={(value) => {
                  updateFormData('loanAmount', value)
                }}
              />
              <span className='text-xs text-[12px] text-slate-600'>元</span>
            </div>
          </Form.Item>
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.paymentVoucher}
              value={formatImageUrl(formData.paymentVoucher, "首付款凭证") as []}
              maxCount={1}
              disabled={!isEdit}
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any)
                updateFormData('paymentVoucher', fileLists[0].url)
              }}
              uploadLabel="首付款凭证"
              className="flex-1"
            />
          </div>
        </div>
       
      </Form>
      <Picker
        visible={visible}
        options={(item?.component || [])?.map(item => (
          {
            ...item,
            text: item.type,
            value: item.type,
          }
        ))}
        onConfirm={(options, value) => confirmPicker(options as any, value)}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

export default BizSignProductCost;
