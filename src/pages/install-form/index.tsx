import { Divider } from "@nutui/nutui-react-taro";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";

// import Anchor from '@/components/Anchor';
import StepTabs from "./conponents/StepTabs";
import {
  getBizInstallApplication,
  updateInstall,

  getBizSignLoan,
  updateBizSignLoan,

  getBizSignProductCost,
  updateBizSignProductCost,

  getBizSignContract,
  updateBizSignContract,

  getBizSurveyHouse,
  updateBizSurveyHouse,

  getBizDesignStructural,
  updateBizDesignStructural,

  getBizDesignElectrical,
  updateBizElectricalDesign,

  getBizCheckDevice,
  updateBizCheckDevice,

  getBizCheckElectrical,
  updateBizCheckElectrical,

  getBizCheckGridConnection,
  updateBizCheckGridConnection,
} from "@/api/install";

let ConfimApiMap = {
  updateBizSignLoan,
  updateBizSignProductCost,
  updateBizSignContract,
  updateBizSurveyHouse,
  updateBizDesignStructural,
  updateBizElectricalDesign,
  updateBizCheckDevice,
  updateBizCheckElectrical,
  updateBizCheckGridConnection
}

// 定义每个项的类型
type ColumnItem = {
  label: string;
  value: string;
  state?: string[],
  disabled?: boolean;
};

// 定义数据的类型
type ColumnsData = ColumnItem[];

const InstallForm = () => {
  const router = useRouter();
  const routerParams = router.params || {};
  const { id = '' } = routerParams

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [isLoadData, setIsLoadData] = useState<boolean>(false)
  const [detailData, setDetailData] = useState<any>({})

  const columns: ColumnsData = [
    {
      label: "个人资料-基本资料",
      value: "BizSignLoan",
    },
    {
      label: "个人资料-产品及造价",
      value: "BizSignProductCost",
    },
    {
      label: "个人资料-安装合同",
      value: "BizSignContract",
    },
    {
      label: "踏勘资料-房屋信息",
      value: "BizSurveyHouse",
    },
    {
      label: "设计资料-结构设计",
      value: "BizDesignStructural",
    },
    {
      label: "设计资料-电气设计",
      value: "BizElectricalDesign",
    },
    {
      label: "验收资料-设备信息",
      value: "BizCheckDevice",
    },
    {
      label: "验收资料-电气验收",
      value: "BizCheckElectrical",
    },
    {
      label: "验收资料-并网材料",
      value: "BizCheckGridConnection",
    },
  ];

  const AllStateMap = {
    acceptance: {
      value: '受理中',
      className: 'rounded-full leading-5 h-5 px-2 bg-blue-500'
    },
    measure: {
      value: '测量中',
      className: 'rounded-full leading-5 h-5 px-2 bg-blue-500'
    },
    design: {
      value: '设计中',
      className: 'rounded-full leading-5 h-5 px-2 bg-blue-500'
    },
    check: {
      value: '验收中',
      className: 'rounded-full leading-5 h-5 px-2 bg-blue-500'
    },
    complete: {
      value: '完成',
      className: 'rounded-full leading-5 h-5 px-2 bg-blue-500'
    },
    abandon: {
      value: '废弃',
      className: 'rounded-full leading-5 h-5 px-2 bg-red-500'
    },
    
  }
  
  const [projectStates, setProjectStates] = useState<Object>({
      BizSignLoan: null,
      BizSignProductCost: null,
      BizSignContract: null,
      BizSurveyHouse: null,
      BizDesignStructural: null,
      BizElectricalDesign: null,
      BizCheckDevice: null,
      BizCheckElectrical: null,
      BizCheckGridConnection: null,
  });
  const ProjectStatesKeys = ['BizSignLoan', 'BizSignProductCost', 'BizSignContract', 'BizSurveyHouse', 'BizDesignStructural', 'BizElectricalDesign', 'BizCheckDevice','BizCheckElectrical', 'BizCheckGridConnection']

  const getData = () => {
    let params = {id: id}
    setIsLoadData(false)
    getBizInstallApplication(params).then(res => {
      let { data } = res
      setDetailData(data)
    })

    Promise.all([
      getBizSignLoan(params), 
      getBizSignProductCost(params),
      getBizSignContract(params),
      getBizSurveyHouse(params),
      getBizDesignStructural(params),
      getBizDesignElectrical(params),
      getBizCheckDevice(params),
      getBizCheckElectrical(params),
      getBizCheckGridConnection(params),
    ]).then(res => {

      const copyProjectStates = projectStates
      ProjectStatesKeys.forEach((key, index) => {
        copyProjectStates[key] = res[index]?.data
      })
      setProjectStates((projectStates) => ({
        ...projectStates,
        ...copyProjectStates
      }))
    }).finally(() => {
      setIsLoadData(true)
    })
  }

  const onConfirm = (values, name) => {
    ConfimApiMap[name](values).then(res => {
      Taro.showToast({title: '保存成功', icon: 'success'})
      setTimeout(() => {
        getData()
      }, 500)
    })
  }
  const onUpdateizApplication = (values) => {
    updateInstall(values).then(res => {
      Taro.showToast({title: '提交成功', icon: 'success'})
      setTimeout(() => {
        getData()
      }, 500)
    })
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <div className="flex flex-col min-h-screen" id="wrapId" ref={containerRef}>
      <div className="bg-[#f5f6f7] px-2 shadow-white py-4" ref={headerRef} id="headerId">
        <div className="bg-white rounded-md shadow-white px-2 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <div className="text-md">XR{detailData.id}</div>
                <div className="flex gap-1 text-xs text-white">
                  {
                    detailData?.state &&  <div className={AllStateMap[detailData?.state]?.className}>
                   { AllStateMap[detailData?.state]?.value}
                  </div>
                  }
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <div>{decodeURIComponent(routerParams.ownerName || "")}</div>
              </div>
            </div>
          </div>

          <Divider
            className="border-slate-50"
            style={{
              borderColor: "#e5e5e5",
            }}
          />

          <div className="text-slate-600 text-xs">
            <div>地址：{decodeURIComponent(routerParams.address || "")}</div>
            <div>电话：{routerParams.ownerPhone}</div>
          </div>
          {
          detailData.subState === 'reject' && detailData.remark && (
            <div className="flex items-baseline gap-2 text-xs text-red-500 pt-2">
              驳回原因：{detailData.remark}
            </div>
          )
        }
        </div>
        
      </div>

      <div
        id="contentId"
        className="bg-white  flex-1"
      >
        { isLoadData ? <StepTabs onUpdateizApplication={onUpdateizApplication} columns={columns} detailData={detailData} id={id} projectStates={projectStates} onConfirm={onConfirm}></StepTabs> : null }
      </div>
    </div>
  );
};

export default InstallForm;
