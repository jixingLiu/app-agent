import React from 'react'

import { Form, Input, Image, Uploader } from '@nutui/nutui-react-taro'

const InstallationContract = () => {

  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

  return (
    <div className=''>
      <div className='mb-1 bg-white'>
        <div className='flex gap-2 pr-2 pb-2'>
          <Uploader
            url={uploadUrl}
            uploadLabel="安装合同"
            className='flex-1'
          />
        </div>
      </div>
    </div>
  )
}

export default InstallationContract