import React, { useEffect, useState } from 'react'
import { Collapse , Switch } from '@nutui/nutui-react-taro';
import BizSignLoan from "./BizSignLoan/index";
import BizSignProductCost from './BizSignProductCost';
import BizSignContract from './BizSignContract';
import BizSurveyHouse from './BizSurveyHouse';
import BizDesignStructural from './BizDesignStructural';
import BizElectricalDesign from './BizElectricalDesign';
import BizCheckDevice from './BizCheckDevice';
import BizCheckElectrical from './BizCheckElectrical';
import BizCheckGridConnection from './BizCheckGridConnection';

import '../index.scss'
import { DownArrow } from '@nutui/icons-react-taro';
// 定义每个项的类型
type ColumnItem = {
  label: string;
  value: string;
  disabled?: boolean;
};

const componentsMap = {
  BizSignLoan,
  BizSignProductCost,
  BizSignContract,
  BizSurveyHouse,
  BizDesignStructural,
  BizElectricalDesign,
  BizCheckDevice,
  BizCheckElectrical,
  BizCheckGridConnection
}

type ProjectStateItem = {
  [key:string]: any
}
interface IProps {
  id: string | number,
  columns: ColumnItem[],
  projectStates: ProjectStateItem,
  detailData: any,
  onUpdateizApplication?: (values: any) => void,
  onConfirm: (values: any, apiName: string) => void
}

function StepTabs(props: IProps) {
  let { columns, projectStates, id, detailData, onConfirm, onUpdateizApplication } = props


  const [activeName, setactiveName] = useState<any>([])
  const [defaultChecked, setDefaultChecked] = useState<boolean>(false)

  const generateComponts = (item) => {
    let componentName = item.value
    const DynamicComponent = componentsMap[componentName];
    // console.log(projectStates, item.value, 'item.value')
    if (DynamicComponent) {
      return (
        <DynamicComponent detailData={detailData} item={projectStates[item.value]} id={id} onUpdateizApplication={onUpdateizApplication} onConfirm={onConfirm} />
      );
    }
    return null; // Handle unknown component names
  }
  const handeleDisabled = (item) => {
    const state = detailData.state;
  
    if (['check', 'complete', 'abandon'].includes(state)) {
      return false;
    }

    if (state === 'measure') {
      return ['BizDesignStructural', 'BizElectricalDesign', 'BizCheckGridConnection', 'BizCheckElectrical', 'BizCheckDevice'].includes(item.value);
    }

    if (state === 'design') {
      return ['BizCheckGridConnection', 'BizCheckElectrical', 'BizCheckDevice'].includes(item.value);
    }

   
  
    if (['acceptance'].includes(state)) {
      return [ 'BizSurveyHouse','BizDesignStructural', 'BizElectricalDesign', 'BizCheckGridConnection', 'BizCheckElectrical', 'BizCheckDevice'].includes(item.value);
    }
  
    return false;
  };

  useEffect(()=> {
    if (detailData.state === 'acceptance') {
      setactiveName(['BizSignLoan', 'BizSignProductCost', 'BizSignContract'])
    }
    if (detailData.state === 'measure') {
      setactiveName(['BizSurveyHouse'])
    }
    if (detailData.state === 'design') {
      setactiveName(['BizDesignStructural', 'BizElectricalDesign'])
    }
    if (detailData.state === 'check') {
      setactiveName(['BizCheckDevice', 'BizCheckElectrical', 'BizCheckGridConnection'])
    }
    if( ['complete', 'abandon'].includes(detailData.state)) {
      setactiveName(columns.map(item => item.value))
      setDefaultChecked(true)
    }

  }, [detailData.state])
  
  return (
    <div>
      <div className='flex justify-end py-2 px-4'>
        {
          
          (['complete', 'abandon'].includes(detailData?.state)) && <Switch onChange={(value) => {
              if (value) {
                setactiveName(columns.map(item => item.value))
                setDefaultChecked(value)
                return
              }
              setactiveName([])
              setDefaultChecked(value)
            }} activeText='展' checked={defaultChecked} defaultChecked={false} inactiveText='收'
          />
        }
       
      </div>
      <Collapse onChange={(valuse:any) => {
        setactiveName(() => (valuse || []))
      }} activeName={activeName} defaultActiveName={activeName} expandIcon={<DownArrow />}
      >
        {
          columns.map((item) => (
            <Collapse.Item key={item.value} disabled={handeleDisabled(item)} title={
              <div className='text-xs font-semibold'>{item.label}</div>
            } name={item.value}>
              { generateComponts(item)}
            </Collapse.Item>
          ))
        }
      </Collapse>
    </div>
  )
}

export default StepTabs