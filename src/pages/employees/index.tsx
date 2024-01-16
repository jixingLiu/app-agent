import React, { useEffect, useRef, useState } from 'react'

import { getAgentEmployees, addAgentEmployees, updateAgentEmployees, deleteAgentEmployees } from '@/api/me'
import { Skeleton, Checkbox, Divider, Sticky, Button, Dialog } from '@nutui/nutui-react-taro';
import { Del, Edit, Link } from '@nutui/icons-react-taro'
import UserForm from './components/UserForm';

import { EnumEmployeesMap } from '@/constants/index'
import Taro from '@tarojs/taro';

const Employees = () => {

  const formRef = useRef<any>(null)

  const [userInfo, setUserInfo] = useState<any>({})

  const [employees, setEmployees] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState<any[]>([])

  const handleDelete = (ids: any) => {
    let deleteIds = ids || checked
    if (!deleteIds.length) {
      Taro.showToast({ title: '请先选择员工', icon: 'error' })
      return
    }
    // Dialog.open('dialog')
    Dialog.open('dialog', {
      title:  `删除 ${deleteIds.length} 个员工`,
      content: '删除之后不可恢复，请谨慎操作！',
      onConfirm: () => {
        deleteAgentEmployees(deleteIds.join(',')).then(() => {
          Taro.showToast({ title: '删除成功', icon: 'success' })
          getList()
          Dialog.close('dialog')
        })
      },
      onCancel: () => {
        Dialog.close('dialog')
      },
    })
    
  }

  const onConfirm = async (values: any) => {
    let params = (Object.assign(values, { agentId: userInfo.agentId }))
    if (values.id) {
      updateAgentEmployees(params).then(res => {
        Taro.showToast({ title: '添加成功', icon: 'success' })
        formRef.current.closePopup()
        getList()
      })
      return
    }

    addAgentEmployees(params).then(res => {
      Taro.showToast({ title: '添加成功', icon: 'success' })
      formRef.current.closePopup()
      getList()
    })
  }

  useEffect(() => {
    Taro.getStorage({
      key: 'userInfo',
      success: (res: any) => {
        let { data } = res
        setUserInfo(data)
      },
      fail: (error) => {console.log(error)}
    })
  }, [])

  const getList = () => {
    setLoading(true)
    getAgentEmployees({agentId: userInfo.agentId}).then(res => {
      let { rows } = res
      if (rows && rows.length) {
        setEmployees(rows)
        return
      }
      setEmployees([])

    }).finally(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    if (!userInfo?.agentId) return
    getList()
    // formRef.current.openPopup()
  }, [userInfo?.agentId])

  
  return (
    <div className='bg-[#f5f6f7] h-full py-2'>
      {
        loading ? ( <Skeleton rows={6} title animated />) :
        (
          <>
          <Checkbox.Group value={checked} onChange={setChecked}>
            <div className='px-2'>
              {
                employees.map(item => (
                  <div className='rounded-md bg-white px-2 py-4 shadow-md mb-2' key={item.id}>
                    <div className='flex justify-between gap-2'>
                      <div className='flex items-center'>
                        <Checkbox value={item.id} ></Checkbox>
                        <div className='text-sm'>
                          <div className='text-slate-800 mb-2 flex items-center gap-2'>
                            <span>{item.name}</span>
                            <span className='text-xs items-baseline text-yellow-600'>{ item.type && EnumEmployeesMap[item.type] }</span>
                          </div>
                          <div className='text-xs text-slate-600' onClick={() => {
                            Taro.makePhoneCall({
                              phoneNumber: item.phone,
                            })
                          }}>
                            {item.phone}
                          </div>
                        </div>
                      </div>
                      <div className='text-sm text-center'>
                        <div className='text-red-600 mb-2'>
                          {item.installCount}
                        </div>
                        <div className='text-xs text-slate-600'>
                          安装工单
                        </div>
                      </div>
                      <div className='flex-1 min-w-0 text-gray-600 leading-4'>
                        {
                          item.regionName?.map( (item,index) => (
                            <div className=' overflow-hidden line-clamp-1 text-xs' key={index}>{item}</div>
                          ))
                        }
                      </div>
                    </div>
                    <Divider style={{borderColor: '#f5f6f7'}} />
                    <div className='flex justify-between text-xs text-center text-red-600'>
                      <div className='flex-1 flex items-center justify-center gap-2' onClick={() => {
                        Taro.navigateTo({
                          url: `/pages/install-detail/index?agentUserId=${item.id}`
                        })
                      }}>
                        <Link />
                        <span>查看</span>
                      </div>
                      {/* <div className='flex-1 flex items-center justify-center gap-2' onClick={() => {
                        handleDelete([item.id])
                      }}>
                        <Del />
                        <span>删除</span>
                      </div> */}
                      <Divider direction='vertical' style={{borderColor: '#f5f6f7', height: '16px'}} />
                      <div className='flex-1 flex items-center justify-center gap-2' onClick={() => {
                        if (userInfo.type !== 'subAdmin') {
                          Taro.showToast({
                            title: '权限不足',
                          })
                          return
                        }
                        formRef.current.openPopup(item)
                      }}>
                        <Edit />
                        <span>编辑</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </Checkbox.Group>
          <Sticky threshold={0} position="bottom">
            <div className='py-2 px-2 shadow-md rounded-md bg-white flex gap-6 items-center justify-center'>
              <Button className='flex-1' type='primary' fill='outline' onClick={handleDelete}>+ 删除</Button>
              <Button className='flex-1' onClick={() => formRef.current.openPopup()}>+ 新增</Button>
            </div>
          </Sticky>
          </>
        )
      }
      <UserForm ref={formRef} onConfirm={onConfirm} />
      <Dialog id="dialog" />
    </div>
  )
}

export default Employees