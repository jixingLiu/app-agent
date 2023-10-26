import Taro from '@tarojs/taro';
import  { useState, useEffect, useRef } from 'react';
import { throttle, } from 'lodash';
import { Sticky } from '@nutui/nutui-react-taro'
import ContractData from '../ContractData';
import LoanData from '../LoanData'
import ProductCost from '../ProductCost'
import InstallationContract from '../InstallationContract'
import SurveyData from '../SurveyData'
import HouseInformation from '../HouseInformation';
import ElectricalDesign from '../ElectricalDesign'
import { Form } from '@nutui/nutui-react-taro'
import './index.scss'

const componentMap = {
  ContractData: ContractData,
  LoanData,
  ProductCost,
  InstallationContract,
  SurveyData,
  HouseInformation,
  ElectricalDesign
};
const Anchor = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const scrollContainerRef = useRef(null);


  const onPageScroll = (e) => {
    console.log(e, 989)
    const elements = items; // 你的元素列表
    const elementPositions = elements.map((element) => {
      const query = Taro.createSelectorQuery();
      query.select(`#item-${element}`).boundingClientRect();
      return new Promise((resolve) => {
        query.exec(([res]) => {
          resolve({
            element,
            top: res.top,
          });
        });
      });
    });
  
    Promise.all(elementPositions).then((positions) => {
      // positions 包含了每个元素的位置信息
      const currentPosition = e.scrollTop;
  
      // 在这里判断当前滚动位置和元素位置的关系，决定哪个元素在视图中
      positions.forEach(({ element, top }) => {
        if (top <= currentPosition) {
          console.log(`${element} is in view`);
          // 在这里可以触发相关操作，比如更新当前选中元素
        }
      });
    });
  }
  

  // 使用lodash的debounce来创建一个点击事件处理函数
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    console.log(item, 'item--')
    // 滚动到锚点
    console.log(Taro.createSelectorQuery()
    .select(`#item-${item}`), "#item-")
    // 修复代码，让#content-id 滚动到#item-${item} 所在的位置
    // 修复代码，让#content-id 滚动到#item-${item} 所在的位置
   // 修复代码，让父元素滚动到子元素的位置
    Taro.createSelectorQuery()
    .select(`#item-${item}`)
    .boundingClientRect()
    .exec((res) => {
      if (res[0]) {
        const targetTop = res[0].top;
        console.log(res, 'targetTop')
        // 获取父元素的滚动位置
        // Taro.pageScrollTo({
        //   scrollTop:targetTop,
        //   duration: 300, // 滚动动画持续时间
        // });
        Taro.createSelectorQuery()
          // .in("#contentId")
          .select('#contentId')
          .boundingClientRect()
          .selectViewport() // 选择父元素
          .scrollOffset() // 获取滚动位置
          .exec((containerRes) => {
            console.log(containerRes, 'containerRes')
            if (containerRes[1]) {
              const scrollTop = containerRes[1].scrollTop + targetTop;
              // 使用 Taro.pageScrollTo 滚动到目标位置
              Taro.pageScrollTo({
                scrollTop,
                duration: 300, // 滚动动画持续时间
              });
            }
          });
      }
    });


  }; // 设置合适的延迟时间

  useEffect(() => {
  
  }, []);

  const generateComponts = (item) => {
    let componentName = item.value
    const DynamicComponent = componentMap[componentName];
    if (DynamicComponent) {
      return (
        <DynamicComponent title={item.label} />
      );
    }
    return null; // Handle unknown component names
  }


  return (
    <div className="flex h-full py-4 box-border">
      <div className="w-1/4">
        <Sticky threshold={0}>
          <div className='text-xs text-slate-800  leading-8'>
            {items.map((item, index) => (
              <div
                key={item.value}
                className={` px-2 text-center ${item.value === selectedItem ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => handleItemClick(item.value)}
              >
                {item.label}
              </div>
            ))}
          </div>
        </Sticky>
       
      </div>
      <div className="w-3/4 bg-[#f5f6f7] box-border  h-full" id='content-id' ref={scrollContainerRef}>
        <Form
          divider
          labelPosition="left"
          style={{
            margin: 0,
          }}
        >
          {items.map((item, index) => (
            <div key={`content-${index}`} id={`item-${item.value}`} className="content-item">
              { generateComponts(item) }
            </div>
          ))}
        </Form>
      </div>
    </div>
  );
};

export default Anchor;
