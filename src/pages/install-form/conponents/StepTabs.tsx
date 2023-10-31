import React, { useState } from 'react'
import { Collapse } from '@nutui/nutui-react-taro';
// import { DownArrow } from '@nutui/icons-react-taro';
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
// 定义每个项的类型
type ColumnItem = {
  label: string;
  value: string;
  parent?: string;
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
  onConfim: (values: any, apiName: string) => void
}

function StepTabs(props: IProps) {
  let { columns, projectStates, id, onConfim } = props


  const [activeName, setactiveName] = useState([columns[6].value])

  const generateComponts = (item) => {
    let componentName = item.value
    const DynamicComponent = componentsMap[componentName];
    if (DynamicComponent) {
      return (
        <DynamicComponent item={projectStates[item.value]} id={id} onConfim={onConfim} />
      );
    }
    return null; // Handle unknown component names
  }
  
  return (
    <div>
      <Collapse defaultActiveName={activeName} >
        {
          columns.map((item) => (
            <Collapse.Item key={item.value} title={item.label} name={item.value}>
              { generateComponts(item)}
            </Collapse.Item>
          ))
        }
      </Collapse>
    </div>
  )
}

export default StepTabs