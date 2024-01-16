import {
  Image,
  Divider,
} from "@nutui/nutui-react-taro";

import Taro from "@tarojs/taro";
import { getNoticeList } from "@/api/common";
import { formatDate } from "@/utils";
import { useEffect, useState } from "react";


import "./index.scss";


const ArticleList = () => {

  const [caseList, setCaseList] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchNoticeList = async (params: noticeParams) => {
    let { rows } = await getNoticeList(params).finally(() => {
      setLoading(false)
    });
    return rows;
  };
  const init = async () => {
    if (loading || lastPage) return
    setLoading(true);
    let caseData = await fetchNoticeList({
      pageNum: pageNum,
      pageSize: pageSize,
      status: 1,
      noticeType: 8,
    });
    if (caseData.length < pageSize) {
      setLastPage(true);
    }
    setCaseList((prevData) => [...prevData,...caseData]);
  };

  useEffect(() => {
    init();
  }, [pageNum]);


  const handleArticle = (item: any) => {
    Taro.navigateTo({
      url: `/pages/article/index?id=${item.noticeId}`,
    });
  };

  return (
      <div className="px-2 py-4 h-full box-border bg-white">

        <div className="gap-2">
          {
          caseList?.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  handleArticle(item);
                }}
                className=" shadow-white flex gap-2 mb-4"
              >
                <Image
                  className="overflow-hidden rounded-sm min-w-20 max-w-[276px] aspect-[4/3]"
                  src={item.coverImage}
                ></Image>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="text-sm text-slate-800 text-ellipsis line-clamp-2">
                    {item.noticeTitle}
                  </div>
                  <div className="text-xs text-gray-600">
                    {formatDate(new Date(item.updateTime), "YYYY年MM月DD日")}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {
          lastPage ? (
            <Divider style={{
              color: '#666',
              borderColor: '#f5f6f7'
            }}>没有更多了</Divider>
          ) : (
            <Divider style={{
              color: '#666',
              borderColor: '#ebebeb'
            }}
              onClick={() => {
                setPageNum((prev) => ++prev)
              }}
            >加载更多</Divider>
          )
        }
    </div>
  );
};

export default ArticleList;
