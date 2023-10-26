import { Divider} from '@nutui/nutui-react-taro';
import "./index.scss";
import { useEffect, useRef, useState } from 'react';
import Taro from '@tarojs/taro';

import Anchor from '@/components/Anchor';

// 定义每个项的类型
type ColumnItem = {
  label: string;
  value: string;
  parent?: string;
};

// 定义数据的类型
type ColumnsData = ColumnItem[];

const InstallForm = () => {

  const containerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)

  const [containerHeight, setContainerHeight] = useState<number>(0);

  const [tab4value, setTab4value] = useState<string>('0');
  const list4 = Array.from(new Array(10).keys());

  const coulumns:ColumnsData = [
    {
      label: '签约资料',
      value: 'ContractData',
      parent: '1',
    },
    {
      label: '贷款资料',
      value: 'LoanData',
    },
   
    {
      label: '产品&造价',
      value: 'ProductCost',
    },
    {
      label: '安装合同',
      value: 'InstallationContract',
    },
    {
      label: '踏勘资料',
      value: 'SurveyData',
    },
    {
      label: '房屋信息',
      value: 'HouseInformation',
    },
    {
      label: '设计资料',
      value: 'DesignData',
    },
    {
      label: '电气设计',
      value: 'ElectricalDesign',
    },
    {
      label: '结构设计',
      value: 'StructuralDesign',
    },
    {
      label: '验收资料',
      value: 'AcceptanceData',
    },
    {
      label: '设备信息',
      value: 'EquipmentInformation',
    },
    {
      label: '电气验收',
      value: 'ElectricalAcceptance',
    },
  ];
  

  useEffect(() => {
 
    const query = Taro.createSelectorQuery()
    query.select('#contentId').boundingClientRect()
    query.exec((res) => {
      setContainerHeight((1334 - res[0].height)/2)
    })
  }, [])


  return (
    <div className='flex flex-col min-h-screen' id="wrapId" ref={containerRef}>
      <div className="bg-[#f5f6f7] px-4 py-4" ref={headerRef} id="headerId">
        <div className="bg-white rounded-md shadow-white px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <div className="text-md">LG0000111111</div>
                <div className="flex gap-1 text-xs text-white">
                  <div className="rounded-full leading-5 h-5 px-2 bg-red-500">已签收</div>
                  <div className="rounded-full leading-5 h-5 px-2 bg-blue-500">征信受理</div>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <div>张三</div>
              </div>
            </div>
          </div>
          
          <Divider className="border-slate-50" style={{
            borderColor: '#e5e5e5'
          }} />

          <div className='text-slate-600 text-xs'>
            <div>地址：云南省丽江市宁蒗县</div>
            <div>电话：15198912242</div>
          </div>        
        </div>
      </div>
      
      <div id='contentId' className='bg-white  flex-1'
        style={{height: `${containerHeight}px`}}
      >
        <Anchor items={coulumns} />
      </div>
      
    </div>
  )
};

export default InstallForm;
