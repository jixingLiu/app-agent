import { useState, useCallback, useEffect, useRef } from "react";
import { SearchBar,Sticky, VirtualList, Checkbox, Divider, Button } from '@nutui/nutui-react-taro';

import { getInstallList } from '@/api/install'

import "./index.scss";
import Taro from "@tarojs/taro";


const Install = () => {

  const containerTopRef = useRef(null)

  const tabList = [
    { title: '全部', key: 'all' },
    { title: '受理', key: 'accept' },
    { title: '设计', key: 'design' },
    { title: '验收', key: 'acceptance' },
    { title: '完成', key: 'finish' },
    { title: '废弃', key: 'abandoned' }
  ];

  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<string>('all');
  const [list, setList] = useState<number[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [isLastPage, setIslastPage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<string[]>([]);

  const onHandleSearch = (value: string) => {
    console.log(value, 'value');
  };

  const itemVariable = (item: any, dataIndex: number) => {
    return (
      <div className="rounded-md bg-white mx-4 px-4 py-4" key={item.id} >
        <div className="flex items-center justify-between gap-2">
          <Checkbox value={item.id}/>
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <div className="text-md">李四</div>
              <div className="flex gap-1 text-xs text-white">
                <div className="rounded-full leading-5 h-5 px-2 bg-red-500">已签收</div>
                <div className="rounded-full leading-5 h-5 px-2 bg-blue-500">征信受理</div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-slate-500">
              <div>分配员工：{item.agentUserName || '暂无'}</div>
              {/* <div>装机容量(KW):100</div> */}
            </div>
          </div>
        </div>
        <Divider className="border-slate-50" style={{
          borderColor: '#e5e5e5'
        }} />
        <div className="flex justify-end gap-2">
          <Button size="small" type="info" onClick={(e) => {
            e.preventDefault()
            Taro.navigateTo({
              url: `/pages/install-form/index?id=${item.id}&ownerName=${item.ownerName}&ownerPhone=${item.ownerPhone}&address=${item.address}`
            })
          }}>查看资料</Button>
        </div>
      </div>
    )
  }

  const onScroll = () => {
    if (isLastPage || isLoading) return
    getData()
  }

  const getData = useCallback(() => {
    if (isLastPage) return
    setIsLoading(true)
    getInstallList({
      pageNum: 1,
      pageSize: 10
    }).then(res => {
      let { rows } = res
      if (rows.length < 10) {
        setIslastPage(true)
      }
      setList((list) => [...list, ...rows])
    }).finally(() => {
      setPageNo(pageNo + 1)
      setIsLoading(false)
    })

  }, [])

  useEffect(() => {
    getData()
  }, [])
  return (
    <div ref={containerTopRef} className="flex flex-col justify-between">
      <Sticky>
        <div className="bg-white">
          <SearchBar
            maxLength={10}
            placeholder="请输入业主姓名" 
            right="搜索"
            value={searchKeyword} onChange={ (value) => {
              console.log(value, 'value')
              setSearchKeyword(value)
            }}
            onSearch={onHandleSearch}
          />
          <div className="flex justify-center py-4 bg-white">
            {
              tabList.map((item) => (
                <div className={`flex-1 text-xs text-center`} key={item.key}
                  onClick={() => {
                    setCurrentTab(item.key)
                  }}
                >
                  <div className={`${currentTab === item.key ? " text-blue-600 font-semibold" : 'text-slate-500'}  mb-1`}>{item.title}</div>
                  <div className={`${currentTab === item.key ? " text-blue-600 fonts" : 'text-xs text-slate-800'}`}>{'10'}</div>
                </div>
              ))
            }
          </div>
        </div>
      </Sticky>
      <div id="scrollContainer"  className="flex-1 py-4 box-border bg-[#f5f6f7]" >
        <Checkbox.Group
          style={{height: '100%'}}
          value={checked} onChange={(value: string[]) => {
          setChecked(value);
        }}>
          <VirtualList
            list={list}
            itemEqual={false}
            itemRender={itemVariable}

            onScroll={onScroll}
          >
          </VirtualList>
        </Checkbox.Group>
      </div>
    </div>
    
  );
};

export default Install;
