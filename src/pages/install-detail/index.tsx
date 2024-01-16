import { useState, useCallback, useEffect, useRef } from "react";
import {
  SearchBar,
  Sticky,
  VirtualList,
  Checkbox,
  Divider,
  Button,
} from "@nutui/nutui-react-taro";

import { getInstallList, getInstallCount, updateInstall } from "@/api/install";
import { getAgentEmployees } from "@/api/me";
import { Plus } from "@nutui/icons-react-taro";
import { Picker } from "@nutui/nutui-react-taro";

import "./index.scss";
import Taro, { useRouter } from "@tarojs/taro";
import { formatDate } from "@/utils";

const AllStateMap = {
  acceptance: {
    value: "受理",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] text bg-blue-500",
  },
  measure: {
    value: "测量",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-blue-500",
  },
  design: {
    value: "设计",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-blue-500",
  },
  check: {
    value: "验收",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-blue-500",
  },
  complete: {
    value: "完成",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-green-500",
  },
  abandon: {
    value: "废弃",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-red-500",
  },
};

// 定义对象的类型
interface DataItem {
  key: string;
  name: string;
  value: number;
}

const AllSubState = {
  ongoing: {
    value: "进行中",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-green-500",
  },
  approvaling: {
    value: "审核中",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-yellow-500",
  },
  reject: {
    value: "已驳回",
    className: "rounded-full leading-4 h-4 px-2 text-[24px] bg-red-500",
  },

}
const Install = () => {

  const containerTopRef = useRef(null);
  const router = useRouter();
  const routerParams = router.params || {};
  const { agentUserId = '' } = routerParams


  const defaultTabList: DataItem[] = [
    { name: "全部", key: "all", value: 0 },
    { name: "受理", key: "acceptance", value: 0  },
    { name: "测量", key: "measure", value: 0  },
    { name: "设计", key: "design", value: 0  },
    { name: "验收", key: "check", value: 0  },
    { name: "完成", key: "complete", value: 0  },
    { name: "废弃", key: "abandon", value: 0  },
  ];

  const [tabList,setTabList] = useState<DataItem[]>([...defaultTabList]);
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
    setList([]);
    setSearchKeyword(value || '');
    setIslastPage(false)
    setPageNo(1);
    getData();
  };
  useEffect(() => {
    setContainerHeight(
      (document.getElementById("scrollContainer")?.clientHeight || 600) - 32
    );
  }, []);
  useEffect(() => {
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        let { data } = res;
        setUserInfo(data);
      },
      fail: (res) => {
        console.log(res)
      },
    });
  }, []);

  const itemVariable = (item: any, dataIndex: number) => {
    return (
      <div className="rounded-md bg-white mx-2 px-2 py-4" key={item.id || dataIndex}>
        <div className="flex items-center justify-between">
          {!item.agentUserId && userInfo.type === "subAdmin" ? (
            <Checkbox value={item.id} />
          ) : null}

          <div className="flex-1">
            <div className="flex justify-between mb-2">
              <div className="text-base flex gap-2 items-baseline">
                {item.ownerName}
                <span className="text-sm text-slate-600" onClick={() => {
                  Taro.makePhoneCall({
                    phoneNumber: item.ownerPhone
                  })
                }}>{item.ownerPhone}</span>
              </div>
              <div className="flex gap-1 text-xs text-white">
                {item?.state && (
                  <>
                    <div className={AllStateMap[item?.state]?.className}>
                      {AllStateMap[item?.state]?.value}
                    </div>
                    {
                      !['complete', 'abandon'].includes(item?.state) && (
                        <div className={AllSubState[item?.subState]?.className}>
                          {AllSubState[item?.subState]?.value}
                        </div>
                      )
                    }
                    
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <div>{formatDate(new Date(item.createTime), 'YYYY年MM月DD日 HH:mm:ss')}</div>
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
        <div className="flex justify-between gap-2">
          <div className="text-xs line-clamp-1 leading-7 text-gray-500">
            {item.address}
          </div>
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
      setVisible(true);
      return;
    }
    getAgentEmployees({ agentId: userInfo.agentId }).then((res) => {
      let { rows } = res;
      if (rows && rows.length) {
        setEmployees(
          rows?.map(
            (item) =>
              ({
                ...item,
                key: item.id,
                text: item.name,
                value: item.id,
              } || [])
          )
        );
        setVisible(true);
        return;
      }
      Taro.showToast({
        title: "暂无员工",
        icon: "none",
      });
      setEmployees([]);
    });
  };
  const onConfirmDistribute = async (options) => {
    const userName = options[0]?.name;
    const userId = options[0]?.id;

    const checkedList = list.filter((item) => checked.includes(item.id));
    console.log(checkedList, "promise");
    const promises = checkedList.map((element: any) =>
      updateInstall({
        ...element,
        agentUserId: userId,
        agentUserName: userName,
      })
    );

    try {
      await Promise.all(promises).finally(() => {
        setList([]);
        setIslastPage(false)
        setPageNo(1);
        getData();
        setChecked([])
      });
      console.log("All updates completed successfully.");
    } catch (error) {
      console.error("An error occurred while updating:", error);
    }
  };

  const getData = () => {
    if (isLastPage || isLoading) return;
    setIsLoading(true);
    getInstallList({
      pageNum: pageNo || 1,
      pageSize: 10,
      ownerName: searchKeyword || "",
      state: currentTab === "all" ? "" : currentTab,
      agentUserId: agentUserId || ''
    })
      .then((res) => {
        let { rows } = res;
        if (rows?.length < 10) {
          setIslastPage(true);
        }
        setList((list) => [...list, ...rows]);
      })
      .finally(() => {
        setPageNo(pageNo + 1);
        setIsLoading(false);
      });
  };
  // 定义求和函数
  const  sumValues = (items: DataItem[]): number => {
    if (!items?.length) return 0
    return items?.reduce((sum, item) => sum + Number(item.value || 0), 0);
  }

  useEffect(() => {
    getInstallCount({agentUserId: agentUserId || ''}).then(res => {
      if (!res?.length) {
        setTabList(() => defaultTabList)
        return
      }
      let allItem = { name: "全部", key: "all", value: sumValues(res) }
      setTabList(() => [allItem, ...res])
    }).finally(() => {
    })
  }, [])

  useEffect(() => {
    getData();
  }, [currentTab, userInfo?.id]);

  


  return (
    <div ref={containerTopRef} className="flex flex-col justify-between h-full">
      <Sticky>
        <div className="bg-white">
          <SearchBar
            maxLength={10}
            placeholder="请输入业主姓名"
            right={<div className="text-xs text-slate-600" onClick={() => {
              onHandleSearch(searchKeyword)
            }}>搜索</div>}
            value={searchKeyword}
            onChange={(value) => {
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
                  setPageNo(1);
                  setIslastPage(false);
                  setList([]);
                  console.log(item.key, "item.key");
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
                  {item.name}
                </div>
                <div
                  className={`${
                    currentTab === item.key
                      ? " text-blue-600 fonts"
                      : "text-xs text-slate-800"
                  }`}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Sticky>
      <div
        id="scrollContainer"
        style={{ height: "calc(100vh - 135px)" }}
        className="flex-1 py-4 box-border overflow-hidden bg-[#f5f6f7]"
      >
        {
          list.length ? (
            <Checkbox.Group
            style={{ height: "100%" }}
            value={checked}
            onChange={(value: string[]) => {
              setChecked(value);
            }}
          >
            <VirtualList
              list={list}
              key={'id'}
              itemHeight={166}
              itemEqual={false}
              itemRender={itemVariable}
              containerHeight={containerHeight}
              onScroll={onScroll}
            ></VirtualList>
          </Checkbox.Group>
          ) : (
            <div className="text-center text-xs text-gray-300 pt-4 font-thin">暂无数据</div>
          )
        }
       
      </div>
      {checked.length > 0 && userInfo.type === "subAdmin" && (
        <Sticky
          threshold={0}
          position="bottom"
          className="sticky bottom-0 z-[101]"
        >
          <div className="px-4 bg-[#f5f6f7] flex justify-between gap-2">
            <Button
              onClick={handleDistribute}
              className="flex-1"
              type="primary"
              icon={<Plus />}
            >
              分配
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                setChecked([]);
              }}
            >
              取消
            </Button>
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
