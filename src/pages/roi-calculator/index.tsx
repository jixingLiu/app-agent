import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Input,
  Divider,
  Radio,
} from '@nutui/nutui-react-taro';
import { Retweet } from '@nutui/icons-react-taro'

import CousPicker from "@/components/CousPicker";

import { BankList, RepaymentPeriodList, DownPaymentRatios, RepaymentList } from './const'
const listData1 = [
  { value: '0.58', text: 'HI-MO6',},
  { value: '0.58', text: 'HI-MO5',},
]

const DividerStyles = {
  borderColor: '#f5f6f7'
}

import './index.scss'
import Taro from "@tarojs/taro";

const RoiCalculator = () => {

  const [form] = Form.useForm()

  const [powerStationArea, setPowerStationArea] = useState<string>('0')
  const [componentCapacity, setComponentCapacity] = useState<string>('0')

  useEffect(() => {
    form.setFieldsValue({
      componentPower: 580,
      back: 'ICBC',
      repaymentPeriod: '15',
      repayment: 'interest',
      powerGeneration: '1527',
      electricityPrice: '0.3360',
      componentArea: 2.583
    })
  }, [])

  return (
    <div className="h-full">
      <Form
        divider
        form={form}
        labelPosition="right"
      
        onFinish={(valuse) => {
        
           let {back,repaymentPeriod,  componentCount, componentCapacity, componentPower} = valuse
           if (!componentCount || !componentPower) {
            Taro.showToast({
              title:'请输入组件块数或组件功率',
              icon:'none'
            })
            return
           }
          console.log(valuse, 'valuse')
          let params = `back=${back}&repaymentPeriod=${repaymentPeriod}&componentCapacity=${componentCapacity}&componentCount=${componentCount}`
          Taro.navigateTo({
            url: `/pages/roi-calculator-detail/index?${params}`,
          })
        }}
        footer={
          <>
            <Button formType="submit" fill="outline" block type="primary">
              开始测算
            </Button>
          </>
        }
      >
        <div className="px-4">
          {/* <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
            <div>测算区域</div>
            <div className="gap-4 flex items-center">
              <span>云省-昆明市</span>
              <Retweet />
            </div>
          </div> */}
          <Form.Item
            label="年发电等效小时数"
            name="powerGeneration"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入小时数"
                type="number"
                defaultValue="1527"
              />
              <span>小时</span>
            </div>
          </Form.Item>
          <Form.Item
            label="当地上网电价"
            name="electricityPrice"
          >
            <div className="flex items-center justify-between">
              <Input
                placeholder="请输入当地上网电价"
                type="number"
                defaultValue="0.3360"
                disabled
              />
              <span>元/小时</span>
            </div>
            
          </Form.Item>
        </div>
        <Divider style={DividerStyles} />
        <div className="px-4">
          <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
            <div>电站基本信息</div>
          </div>
          {/* <Form.Item
            label="组件型号"
            name="componentModel"
          >
            <CousPicker  listOptions={listData1} defaultValue="600" handleConfirm={ (val: any) => {
              form.setFieldsValue({
                name: val
              })
            } }></CousPicker>
          </Form.Item> */}
          <Form.Item
            label="组件面积"
            name="componentArea"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入组件面积"
                type="number"
                defaultValue="2.583"
                disabled
              />
              <span>m²</span>
            </div>
          </Form.Item>
          <Form.Item
            label="组件块数"
            name="componentCount"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入组件块数"
                type="number"
                onChange={(value) => {
                  let componentArea = form.getFieldValue('componentArea')
                  let componentPower = form.getFieldValue('componentPower')
                  console.log(value,componentArea, componentPower, 'value')

                  let powerStationArea = (componentArea * (Number(value) || 0)).toFixed(2)
                  let componentCapacity = (componentPower / 1000 * (Number(value) || 0)).toFixed(2)
                  form.setFieldsValue({
                    componentCount: value,
                    powerStationArea: powerStationArea,
                    componentCapacity: componentCapacity,
                  })
                  setComponentCapacity(componentCapacity)
                  setPowerStationArea(powerStationArea)

                  console.log(componentArea,componentPower, value, 'componentArea')
                  console.log(form.getFieldValue('powerStationArea'))
                }}
              />
              <span>块</span>
            </div>
          </Form.Item>
          <Form.Item
            label="组件功率"
            name="componentPower"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入组件功率"
                type="number"
                defaultValue="580"
                onChange={(value) => {
                  let componentCounts = form.getFieldValue('componentCount')
                  let componentCapacity = (Number(value) / 1000 * (Number(componentCounts) || 0)).toFixed(2)

                  setComponentCapacity(componentCapacity)
                  form.setFieldsValue({
                    componentPower: value,
                    componentCapacity: componentCapacity
                  })
                }}
                // value={componentPower}
              />
              <span>W</span>
            </div>
            {/* <CousPicker  listOptions={listData1} defaultValue="0.58" handleConfirm={ (val: any) => {
              form.setFieldsValue({
                componentPower: val
              })
            } }></CousPicker> */}
          </Form.Item>
          <Form.Item
            label="组件容量"
            name="componentCapacity"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入组件容量"
                type="number"
                value={componentCapacity}
                disabled
              />
              <span>KW</span>
            </div>
          </Form.Item>
          <Form.Item
            label="电站面积"
            name="powerStationArea"
          >
            <div className="flex items-center justify-between border">
              <Input
                placeholder="请输入电站面积"
                disabled
                value={powerStationArea}
                type="number"
              />
              <span>m²</span>
            </div>
          </Form.Item>
          <div className=" bg-slate-200 rounded-md px-4 py-4  leading-6 text-xs">
            <div className="text-xs text-slate-800">说明</div>
            <div className=" text-slate-400">装机容量：装机容量=组件块数 * 组件功率</div>
            <div className=" text-slate-400">电站面积：电站面积=组件块数 * 组件面积</div>
          </div>
        </div>
        <Divider style={DividerStyles} />

        <div className="px-4">
          <div className="flex justify-between items-center text-xs text-slate-600 mb-2">
            <div>合作银行</div>
          </div>
          <Radio.Group 
            onChange={(value) => {
              form.setFieldsValue({
                back: value
              })
            }}
            defaultValue="ICBC" direction="horizontal">
            {
              BankList.map(item => (
                <Radio shape="button" key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              ))
            }
          </Radio.Group>
          <div className="flex justify-between items-center text-xs text-slate-600 mb-2 pt-4">
            <div>还款年限</div>
          </div>
          <Radio.Group onChange={(value) => {
            form.setFieldsValue({
              repaymentPeriod: value
            })
          }} 
          defaultValue="15" direction="horizontal">
            {
              RepaymentPeriodList.map(item => (
                <Radio shape="button" key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              ))
            }
          </Radio.Group>
         
          <div className="flex justify-between items-center text-xs text-slate-600 mb-2 pt-4">
            <div>还款方式</div>
          </div>
          <Radio.Group defaultValue="interest" direction="horizontal">
            {
              RepaymentList.map(item => (
                <Radio shape="button" disabled={item.disabled} key={item.value} value={item.value}>
                  {item.label}
                </Radio>
              ))
            }
          </Radio.Group>
        </div>
      </Form>
    </div>
  )
}

export default RoiCalculator;
