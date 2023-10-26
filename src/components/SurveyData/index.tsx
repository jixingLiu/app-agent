import { title } from 'process'
import React from 'react'

import { Divider } from '@nutui/nutui-react-taro';

type IProps = {
  title: string
}
const SurveyData = (props: IProps) => {
  let { title } = props
  return (
    <div className='bg-white mb-1'>
      <div className="text-sm text-blue-600 leading-8">{title}</div>
      <div className=' leading-6'>
        &nbsp;
      </div>
      {/* <Divider style={{
        borderColor: '#e5e5e5'
      }} /> */}
    </div>
  )
}

export default SurveyData