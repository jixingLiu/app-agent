
import React, { useEffect, useState } from 'react'

import './index.scss'
import { Divider, Table, Toast } from '@nutui/nutui-react-taro'
import { TableColumnProps } from '@nutui/nutui-react-taro/dist/types/packages/table/types'
import { useRouter } from '@tarojs/taro';

interface ProjectDetails {
  capacityKW: number;
  hours: number;
  pricePerKWh: number;
  degradationRate: number;
  loanDetails: LoanDetails;
  totalYears: number;
}

interface LoanDetails {
  loanAmount: number;
  annualInterestRate: number;
  loanYears: number;
}

interface AnnualDetail {
  year: number;
  grossAnnualRevenue: number | string;
  monthlyLoanPayment: number;
  annualLoanPayment: number;
  revenueAfterLoanPayment: number;
  cumulativeRevenueAfterLoanPayment: number;
}

interface ReturnsResult {
  totalRevenue: number;
  totalAmount: number;
  totalPowerGeneration: number;
  totalRepaymentAmount: number;
  repaymentRevenue: number;

  annualDetails: AnnualDetail[];
}

const RoiCalculatorDetail = () => {

  const router = useRouter();
  const routerParams = router.params || {};
  let { back,repaymentPeriod,  componentCount, componentCapacity } = routerParams

  console.log(back,repaymentPeriod,  componentCount, componentCapacity, 'back,repaymentPeriod,  componentCount, componentCapacity')


  const [totalRevenue, setTotalRevenue] = useState<number>(0)
  const [totalAmount, setTotalAmout] = useState<number>(0)
  const [totalPowerGeneration, setTotalPowerGeneration] = useState<number>(0)
  const [totalRepaymentAmount, setTotalRepaymentAmount] = useState<number>(0)
  const [repaymentRevenue, setRepaymentRevenue]= useState<number>(0)

  const [componentCounts, setComponentCount] = useState<number>(Number(componentCount))
  const [repaymentYear, setRepaymentYear] = useState<number>(Number(repaymentPeriod))


  const [annualList, setAnnualList] = useState<AnnualDetail[]>([])

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
      key: 'grossAnnualRevenue',
    },
    {
      title: '还款金额',
      key: 'repaymentAmount',
      render(rowData, rowIndex) {
        return Math.round(rowData.monthlyLoanPayment * 12)
      },
    },
    {
      title: '累计还款后收入',
      key: 'cumulativeRevenueAfterLoanPayment',
    },
  ]);

  const [isReverse, setIsReverse] = useState<boolean>(false)


  const handleSorter = (item: TableColumnProps, data: Array<any>) => {
    // Toast.show(`${JSON.stringify(item)}`)
    // let data1 = data.reverse()
    const reversedArray = data.reverse();
    setIsReverse(!isReverse)

    // setData5( (data5) => [...data5].reverse())
  }

  const calculateAnnualRepayment = (principal: number, interestRate: number, years: number): number  => {
    // 将年利率转换为小数形式
    const rate = interestRate / 100;

    // 计算每年的利率
    const annualRate = Math.pow(1 + rate, 1 / 12) - 1;

    // 计算总的还款期数（年数*12个月）
    const totalPayments = years * 12;

    // 计算等额本息还款公式
    const repayment = principal * annualRate * Math.pow(1 + annualRate, totalPayments) / (Math.pow(1 + annualRate, totalPayments) - 1);

    return repayment;
  }
  
  const calculateSolarProjectReturns = ({
    capacityKW,
    hours,
    pricePerKWh,
    degradationRate,
    loanDetails,
    totalYears
  }: ProjectDetails): ReturnsResult => {
    // 总收入
    let totalRevenue = 0;
    let totalAmount = 0;
    let totalPowerGeneration = 0;
    let totalRepaymentAmount = 0;
    let repaymentRevenue = 0;

    let annualDetails: AnnualDetail[] = [];
    

    const annualRepayment = calculateAnnualRepayment(loanDetails.loanAmount, loanDetails.annualInterestRate, loanDetails.loanYears);
    totalRepaymentAmount = annualRepayment * 12 * loanDetails.loanYears


    let monthlyLoanPayment = annualRepayment

    let currentCapacity = capacityKW;
    
    let cumulativeRevenueAfterLoanPayment = 0
  
    for (let year = 1; year <= totalYears; year++) {


      let annualProduction = currentCapacity * hours * pricePerKWh;
      
      let grossAnnualRevenue = Math.round(annualProduction);

      let monthlyPayment = year <= loanDetails.loanYears ? monthlyLoanPayment : 0

      cumulativeRevenueAfterLoanPayment = Math.round(grossAnnualRevenue - monthlyPayment * 12)

      totalAmount += annualProduction
      totalRevenue += cumulativeRevenueAfterLoanPayment
      totalPowerGeneration += currentCapacity * hours

      if (year <= loanDetails.loanYears) {
        repaymentRevenue += cumulativeRevenueAfterLoanPayment
      }
      // totalRepaymentAmount += monthlyPayment

      annualDetails.push({
        year: year,
        grossAnnualRevenue: grossAnnualRevenue,
        monthlyLoanPayment:  monthlyPayment,
        annualLoanPayment: 0,
        revenueAfterLoanPayment: 0,
        cumulativeRevenueAfterLoanPayment: cumulativeRevenueAfterLoanPayment,
      })
      currentCapacity *= (1 - degradationRate);
    }
    
    setAnnualList(annualDetails)
    console.log(totalRepaymentAmount, 'totalRepaymentAmount')
    
    return {
      totalRevenue,
      totalAmount,
      totalPowerGeneration,
      totalRepaymentAmount,
      repaymentRevenue,

      annualDetails,
    };
  };
  
  
  
    
  
  useEffect(() => {
    if (!repaymentPeriod) return

    console.log(routerParams, 'routerParams')
    // 示例参数

    const projectDetails: ProjectDetails = {
      capacityKW: Number(componentCapacity || 27.28), // 装机容量，单位Kw
      hours: 1350, // 每年有效发电小时数
      pricePerKWh: 0.336, // 电价，单位元/Wh
      degradationRate: 0.004, // 发电量衰减率
      loanDetails: {
        loanAmount: Number(componentCapacity || 27.28) * 4 * 1000, // 假设的贷款总额
        annualInterestRate: 5, // 假设的年利率
        loanYears: Number(repaymentPeriod || 15), // 假设的贷款年限
      },
      totalYears: 30 // 总计算年限
    };
  
    const results = calculateSolarProjectReturns(projectDetails);

    setTotalRevenue(results.totalRevenue)
    setTotalPowerGeneration(results.totalPowerGeneration)
    setTotalRepaymentAmount(results.totalRepaymentAmount)
    setRepaymentRevenue(results.repaymentRevenue)
    setTotalAmout(results.totalAmount)

  }, [repaymentPeriod, componentCapacity])

  
  return (
    <div className='px-4 py-4'>
      <div className='px-4 py-4 bg-red-600 rounded-md text-white mb-6'>
        <div className=' text-center text-sm '>30年收益计算</div>

        <div className='py-4 grid grid-cols-3 gap-2 border-b border-b-dotted  border-b-white'>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>发电总收入</div>
            <div className='text-[14px]'>约<b className='text-xs font-medium'>{Math.round(totalAmount)}</b>元</div>
          </div>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>发电总量</div>
            <div className='text-[14px]'>约<b className='text-xs font-medium'>{Math.round(totalPowerGeneration)}</b>KW</div>
          </div>
          <div className='text-xs text-center'>
            <div className='text-[14px]'>累计还款金额</div>
            <div className='text-[14px]'>约<b className='text-xs font-medium'>{Math.round(totalRepaymentAmount)}</b>元</div>
          </div>
        </div>

        <div className='py-8 border-b border-b-dotted  border-b-white'>
          <div className='text-center'>
            <div className='text-sm'>还款后总收入</div>
            <div className='text-[14px]'>约<b className='text-lg font-medium'>{Math.round(totalRevenue)}</b>元</div>
          </div>
          <div className='pt-4 flex justify-between gap-2'>
            <div className='text-xs text-center flex-1'>
              <div className='text-[14px] leading-4'>折合每块光伏板年收入</div>
              <div className='text-[14px] leading-4'>度<b className='text-sm font-medium'>{Math.round((totalRevenue) / 30 / componentCounts)}</b>元/年</div>
            </div>
            <Divider direction="vertical" style={{ borderStyle: 'dashed', borderColor: '#fff', height: 'auto',}} />
            <div className='text-xs text-center flex-1'>
              <div className='text-[14px] leading-4'>平均每年收入</div>
              <div className='text-[14px] left-4'>约<b className='text-sm font-medium'>{Math.round((totalRevenue) / 30)}</b>元/年</div>
            </div>
          </div>

        </div>
        
        <div className='pt-4'>
          <div className='mb-2 text-center text-sm'>还款期和还款后收入对比</div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='text-[14px]'>
              <div>还款期（第1-{repaymentYear}年）</div>
              <div>年收入约<b>{Math.round(repaymentRevenue/repaymentYear)}</b>元/年</div>
              <div>单板收入约<b className=' font-medium text-sm'>{Math.round(repaymentRevenue / repaymentYear/componentCounts)}</b>元/年</div>
            </div>
            <div className='text-[14px]'>
              <div>还款期（第{repaymentYear}-30年）</div>
              <div>年收入约<b>{Math.round(( totalAmount - totalRepaymentAmount) / repaymentYear)}</b>元/年</div>
              <div>单板收入约<b className=' font-medium text-sm'>{Math.round((totalAmount - totalRepaymentAmount) / repaymentYear / componentCounts)}</b>元/年</div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-4 rounded-md bg-white'>
        <Table
          className={`${isReverse ? 'reverse': 'no-reverse'}`}
          key={'year'}
          columns={columns5}
          data={annualList}
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

