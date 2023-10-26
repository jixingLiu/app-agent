
import React, { useState } from 'react'

import './index.scss'
import { Divider, Table, Toast } from '@nutui/nutui-react-taro'
import { TableColumnProps } from '@nutui/nutui-react-taro/dist/types/packages/table/types'
const RoiCalculatorDetail = () => {

  const listData = Array(30).fill(0).map((_, index) => ({
    year: index + 1,
    powerIncome: (Math.random() * 1000).toFixed(0),
    repaymentAmount:  (Math.random() * 1000).toFixed(0),
    cumulativeIncomeAfterRepayment: (Math.random() * 1000).toFixed(0),
  }))
  const [data5, setData5] = useState(listData)

  const [columns5, setColumns5] = useState<Array<TableColumnProps>>([
    {
      title: '年度',
      key: 'year',
      align: 'center',
      sorter: true,
      // sorter: (row1: any, row2: any) => {
      //   console.log(row1.year - row2.year)
      //   return row1.year - row2.year;
      // },
    },
    {
      title: '发电收入',
      key: 'powerIncome',
    },
    {
      title: '还款金额',
      key: 'repaymentAmount',
    },
    {
      title: '累计还款后收入',
      key: 'cumulativeIncomeAfterRepayment',
    },
  ]);

  const [isReverse, setIsReverse] = useState<boolean>(false)
  

  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    // Toast.show(`${JSON.stringify(item)}`)
    // let data1 = data.reverse()
    const reversedArray = data.reverse();
    console.log(data == reversedArray)
    setIsReverse(!isReverse)

    setData5( (data5) => [...data5].reverse())
  }
  
  
  return (
    <div className='px-4 py-4'>
      <div className='px-4 py-4 bg-red-600 rounded-md text-white mb-6'>
        <div className=' text-center text-sm '>30年收益计算</div>

        <div className='py-4 grid grid-cols-3 gap-2 border-b border-b-dotted  border-b-white'>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>发电总收入</div>
            <div className='text-[14px]'>约<b className='text-sm font-medium'>345600</b>元</div>
          </div>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>发电总量</div>
            <div className='text-[14px]'>度<b className='text-sm font-medium'>345600</b>度</div>
          </div>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>累计还款金额</div>
            <div className='text-[14px]'>约<b className='text-sm font-medium'>345600</b>元</div>
          </div>
        </div>

        <div className='py-8 border-b border-b-dotted  border-b-white'>
          <div className='text-center'>
            <div className='text-sm'>还款后总收入</div>
            <div className='text-[14px]'>约<b className='text-lg font-medium'>345600</b>元</div>
          </div>
          <div className='pt-4 flex justify-between gap-2'>
            <div className='text-xs text-center flex-1'>
              <div className='text-[14px] leading-4'>折合每块光伏板年收入</div>
              <div className='text-[14px] leading-4'>度<b className='text-sm font-medium'>600</b>元/年</div>
            </div>
            <Divider direction="vertical" style={{ borderStyle: 'dashed', borderColor: '#fff', height: 'auto',}} />
            <div className='text-xs text-center flex-1'>
              <div className='text-[14px] leading-4'>平均每年收入</div>
              <div className='text-[14px] left-4'>约<b className='text-sm font-medium'>5600</b>元/年</div>
            </div>
          </div>

        </div>
        
        <div className='pt-4'>
          <div className='mb-2 text-center text-sm'>还款期和还款后收入对比</div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-[14px]'>
              <div>还款期（第1-15年）</div>
              <div>年收入约<b>1848</b>元/年</div>
              <div>单板收入约<b className=' font-medium text-sm'>48</b>元/年</div>
            </div>
            <div className='text-[14px]'>
              <div>还款期（第16-30年）</div>
              <div>年收入约<b>11848</b>元/年</div>
              <div>单板收入约<b className=' font-medium text-sm'>248</b>元/年</div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-4 rounded-md bg-white'>
        <Table
          className={`${isReverse ? 'reverse': 'no-reverse'}`}
          key={'year'}
          columns={columns5}
          data={data5}
          onSort={handleSorter}
          style={{ background: '#fff' }}
        />
      </div>

      <div className='pt4 text-red-600 text-xs'>
        根据电站容量，区域等因素，业主*支出中不包含运维费用，每年需支出2-4分/W的运维费用，确保电站正常运行*本电站收益测算结果仅供参者，实际数据因每个电站安装条件不同，所在地区不同，上网电价不同，所处气候条件不同实际数据与测算数据有一定差异.*如需获取相对准确的发电收入，请通过点击下方“申请建站”，由本地专业光伏系统技术人员为您进行详细测算。
      </div>
    </div>
  )
}

export default RoiCalculatorDetail