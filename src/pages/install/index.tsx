import { useState, useCallback, useEffect, useRef } from "react";
import {
  SearchBar,
  Sticky,
  VirtualList,
  Checkbox,
  Divider,
  Button,
} from "@nutui/nutui-react-taro";

import { getInstallList, updateInstall } from "@/api/install";
import { getAgentEmployees } from "@/api/me"
import { Plus } from "@nutui/icons-react-taro";
import { Picker } from "@nutui/nutui-react-taro";

import "./index.scss";
import Taro from "@tarojs/taro";

const Install = () => {
  const containerTopRef = useRef(null);

  const tabList = [
    { title: "全部", key: "all" },
    { title: "受理", key: "accept" },
    { title: "设计", key: "design" },
    { title: "验收", key: "acceptance" },
    { title: "完成", key: "finish" },
    { title: "废弃", key: "abandoned" },
  ];

  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [list, setList] = useState<number[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [isLastPage, setIslastPage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<string[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(600);
  const [userInfo, setUserInfo] = useState<any>({});
  const [employees, setEmployees] = useState<any[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const onHandleSearch = (value: string) => {
    console.log(value, "value");
  };
  useEffect(() => {
    setContainerHeight(
      (document.getElementById("scrollContainer")?.clientHeight || 600) - 32
    );
  }, []);

  const itemVariable = (item: any, dataIndex: number) => {
    return (
      <div className="rounded-md bg-white mx-2 px-2 py-4" key={item.id}>
        <div className="flex items-center justify-between">
          {
            !item.agentUserId && userInfo.type === 'subAdmin' ? (
              <Checkbox value={item.id} />
            ) : null
          }
          
          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <div className="text-md">{item.ownerName}</div>
              <div className="flex gap-1 text-xs text-white">
                <div className="rounded-full leading-5 h-5 px-2 bg-red-500">
                  已签收
                </div>
                <div className="rounded-full leading-5 h-5 px-2 bg-blue-500">
                  征信受理
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <div>{item.createTime}</div>
              <div>分配员工：{item.agentUserName || "暂无"}</div>
            </div>
          </div>
        </div>
        <Divider
          className="border-slate-50"
          style={{
            borderColor: "#e5e5e5",
          }}
        />
        <div className="flex justify-end gap-2">
          <Button
            size="small"
            type="info"
            onClick={(e) => {
              e.preventDefault();
              Taro.navigateTo({
                url: `/pages/install-form/index?id=${item.id}&ownerName=${item.ownerName}&ownerPhone=${item.ownerPhone}&address=${item.address}`,
              });
            }}
          >
            查看资料
          </Button>
        </div>
      </div>
    );
  };

  const onScroll = () => {
    if (isLastPage || isLoading) return;
    getData();
  };

  const handleDistribute = () => {
    if (employees?.length) {
      setVisible(true)
      return
    }
    getAgentEmployees({agentId: userInfo.agentId}).then(res => {
      let { rows } = res
      if (rows && rows.length) {
        setEmployees(rows?.map(item => ({
          ...item,
          key: item.id,
          text: item.name,
          value: item.id,
        }) || []))
        setVisible(true)
        return
      }
      Taro.showToast({
        title: '暂无员工',
        icon: 'none',
      })
      setEmployees([])
    })
  }
  const onConfirmDistribute = async (options) => {
    const userName = options[0]?.name;
    const userId = options[0]?.id;
  
    const checkedList = list.filter((item) => checked.includes(item.id));
    console.log(checkedList, 'promise');
    const promises = checkedList.map((element:any) =>
      updateInstall({
        ...element,
        agentUserId: userId,
        agentUserName: userName,
      })
    );
  
    try {
      await Promise.all(promises).finally(() => {
        setList([])
        setPageNo(1)
        getData()
      })
      console.log('All updates completed successfully.');
    } catch (error) {
      console.error('An error occurred while updating:', error);
    }

  }

  const getData = useCallback(() => {
    if (isLastPage) return;
    setIsLoading(true);
    getInstallList({
      pageNum: 1,
      pageSize: 10,
    })
      .then((res) => {
        let { rows } = res;
        if (rows.length < 10) {
          setIslastPage(true);
        }
        setList((list) => [...list, ...rows]);
      })
      .finally(() => {
        setPageNo(pageNo + 1);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        setUserInfo(res.data);
      }
    })
  }, [])

  
  return (
    <div ref={containerTopRef} className="flex flex-col justify-between h-full">
      <Sticky>
        <div className="bg-white">
          <SearchBar
            maxLength={10}
            placeholder="请输入业主姓名"
            right="搜索"
            value={searchKeyword}
            onChange={(value) => {
              console.log(value, "value");
              setSearchKeyword(value);
            }}
            onSearch={onHandleSearch}
          />
          <div className="flex justify-center py-4 bg-white">
            {tabList.map((item) => (
              <div
                className={`flex-1 text-xs text-center`}
                key={item.key}
                onClick={() => {
                  setCurrentTab(item.key);
                }}
              >
                <div
                  className={`${
                    currentTab === item.key
                      ? " text-blue-600 font-semibold"
                      : "text-slate-500"
                  }  mb-1`}
                >
                  {item.title}
                </div>
                <div
                  className={`${
                    currentTab === item.key
                      ? " text-blue-600 fonts"
                      : "text-xs text-slate-800"
                  }`}
                >
                  {"10"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sticky>
      <div
        id="scrollContainer"
        style={{ height: "calc(100% - 135px)" }}
        className="flex-1 py-4 box-border overflow-hidden bg-[#f5f6f7]"
      >
        <Checkbox.Group
          style={{ height: "100%" }}
          value={checked}
          onChange={(value: string[]) => {
            setChecked(value);
          }}
        >
          <VirtualList
            list={list}
            itemHeight={166}
            itemEqual={false}
            itemRender={itemVariable}
            containerHeight={containerHeight}
            onScroll={onScroll}
          ></VirtualList>
        </Checkbox.Group>
      </div>
      {checked.length > 0 && userInfo.type === 'subAdmin' && (
        <Sticky
          threshold={0}
          position="bottom"
          className="sticky bottom-0 z-[101]"
        >
          <div className="px-4 bg-[#f5f6f7] flex justify-between gap-2">
            <Button onClick={handleDistribute} className="flex-1" type="primary" icon={<Plus />}>
              分配
            </Button>
            <Button className="flex-1" onClick={() => {
              setChecked([]);
            }}>取消</Button>
          </div>
        </Sticky>
      )}
      <Picker
        visible={visible}
        options={employees}
        onConfirm={onConfirmDistribute}
        onClose={() => setVisible(false)}
       />
    </div>
  );
};

export default Install;
