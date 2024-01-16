import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  TextArea,
  Uploader,
  Video,
} from "@nutui/nutui-react";
import { Link, Location2 } from "@nutui/icons-react-taro";
import { multipleUploadResult } from "../../utils/index";
import Taro from "@tarojs/taro";
import { API_BASE_URL } from "@/constants/index";
import { FileItem } from "@nutui/nutui-react/dist/types/packages/uploader";
import { sourceType } from '../../utils/index'


import './index.scss'

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onUpdateizApplication?: (values: any) => void;
  onConfirm: (values: any, apiName: string) => void;
}

const BizSurveyHouse = (props: IProps) => {
  let { item, id, detailData, onConfirm, onUpdateizApplication } = props;
  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };

  useEffect(() => {
    setFormData(
      Object.assign(
        {
          ...item,
          ownerRequirement: item.ownerRequirement || "",
          id:id,
        } || {}
      )
    );
    console.log(formData, '--id')

    form.setFieldsValue({
      ...item,
      ownerRequirement: item.ownerRequirement || "",
      id:id,
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(["measure"].includes(detailData?.state));
  }, [detailData?.state]);

  const getLocation = () => {
    Taro.getLocation({
      type: "wgs84", // 使用 GPS 坐标
      success: (res) => {
        const { latitude, longitude } = res;
        console.log(latitude, longitude);
        form.setFieldsValue({
          latitude: latitude || '',
          longitude: longitude || ''
        })
        // this.setState({ latitude, longitude });
      },
      fail: (error) => {
        console.error("获取经纬度失败", error);
        Taro.showToast({
          title: "获取经纬度失败",
        });
      },
    });
  };

  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        footer={
          isEdit && (
            <div className="w-full flex justify-between gap-4">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onConfirm(formData, 'updateBizSurveyHouse')
                  console.log(formData, 'formData')
                }}
                className="flex-1"
              >
                保存
              </Button>
              <Button
                onClick={() => {
                  if (!formData.sceneType) {
                    Taro.showToast({
                      title: '请填写类型',
                      icon: 'none',
                    })
                    return 
                  }
                  onConfirm(formData, 'updateBizSurveyHouse')
                  onUpdateizApplication && onUpdateizApplication({...(detailData || {}),subState: 'approvaling'})
                }}
                className="flex-1"
                type="primary"
              >
                提交
              </Button>
            </div>
          )
        }
      >
        <div className="mb-1">
          <Form.Item label="场景类型" name="sceneType">
            <Input
              disabled={!isEdit}
              placeholder="请输入场景类型"
              onChange={(value) => {updateFormData('sceneType', value)}}
              type="text"
            />
          </Form.Item>
          <Form.Item label="经纬度" name="localtion">
            <div className="flex items-center">
              <Input
                disabled={!isEdit}
                value={formData.latitude}
                onChange={(value) => {
                  updateFormData("latitude", value);
                }}
                placeholder="经度"
                type="text"
              />
              <Input
                value={formData.longitude}
                disabled={!isEdit}
                onChange={(value) => {
                  updateFormData("longitude", value);
                }}
                placeholder="纬度"
                type="text"
              />
              <Location2 onClick={getLocation} />
            </div>
          </Form.Item>
          <Form.Item label="场地数量" name="siteNumber">
            <div className="flex items-center">
              <Input
                value={formData.siteNumber}
                disabled={!isEdit}
                onChange={(value) => {
                  updateFormData("siteNumber", value);
                }}
                placeholder="请输入场地数量"
                type="text"
              />
              <span className="text-xs text-[12px] text-slate-600">块</span>
            </div>
          </Form.Item>
          <Form.Item label="业主要求" name="ownerRequirement">
            <TextArea
              showCount
              rows={6}
              className="w-full"
              onChange={(value) => {
                updateFormData('ownerRequirement', value)
              }}
              disabled={!isEdit}
              placeholder="请输入业主要求"
              maxLength={300}
            />
          </Form.Item>
        </div>
        <div className=" grid grid-cols-2 gap-2 px-2 pb-2">
          { formData?.image?.map((itemImg, index) => {
            if (!isEdit && itemImg.name === '视频' && itemImg.images?.length) {
              return (
                <div key={index} className="col-span-2">
                  <div className=" leading-6 text-xs text-slate-600">
                    {itemImg.name}
                  </div>
                  <Video
                    source={{
                      src: itemImg.images[0]?.url,
                      type: 'video/mp4',
                    }}
                    options={{
                      controls: true,
                    }}
                  />
                </div>
              )
            }
            if (itemImg.name === '视频') {
              return (
                <div key={index} className="col-span-2">
                  <div className=" leading-6 text-xs text-slate-600">
                    {itemImg.name}
                  </div>
                  <Uploader
                    
                    key={itemImg.name}
                    uploadLabel={`${itemImg.name}图`}
                    url={`${uploadUrl}/common/uploads`}
                    className="flex-1"
                    method="post"
                    accept={'video/*' }
                    name="files"
                    disabled={!isEdit}
                    deletable={isEdit}
                    
                    multiple={false}
                    onSuccess={(param) => {
                      let fileLists = multipleUploadResult(param as any);
                      console.log(fileLists,' fileLists')
                      let values = formData?.image.map((item) => {
                        if (item.name === itemImg.name) {
                          return {
                            ...item,
                            images: fileLists,
                          };
                        }
                        return item;
                      });
                      console.log(values, 'onSuccess')
                      updateFormData("image", values);
                    }}
                    value={itemImg.images}
                    onDelete={(file: FileItem, files: FileItem[]) => {
                      let values = formData.image.map((item) => {
                        if (item.name === itemImg.name) {
                          return {
                            ...item,
                            images: files,
                          };
                        }
                        return item;
                      });
                      updateFormData("image", values);
  
                    }}
                    uploadIcon={<Link />}
                  />
                </div>
              );
            }

            return (
              <div key={index}>
                <div className=" leading-6 text-xs text-slate-600">
                  {itemImg.name}
                </div>
                <Uploader
                  key={itemImg.name}
                  uploadLabel={`${itemImg.name}图`}
                  url={`${uploadUrl}/common/uploads`}
                  className="flex-1"
                  method="post"
                  accept={'image/*'}
                  name="files"
                  disabled={!isEdit}
                  deletable={detailData?.state === 'measure'}
                  
                  maxCount={detailData?.state ==='measure' ? 10 : itemImg?.images?.length || 10}
                  multiple={true}
                  onSuccess={(param) => {
                    let fileLists = multipleUploadResult(param as any);
                    let values = formData.image.map((item) => {
                      if (item.name === itemImg.name) {
                        return {
                          ...item,
                          images: fileLists,
                        };
                      }
                      return item;
                    });
                    updateFormData("image", values);
                  }}
                  value={itemImg.images}
                  onDelete={(file: FileItem, files: FileItem[]) => {
                    let values = formData.image.map((item) => {
                      if (item.name === itemImg.name) {
                        return {
                          ...item,
                          images: files,
                        };
                      }
                      return item;
                    });
                    console.log(values, 'onDelete')
                    updateFormData("image", values);

                  }}
                  uploadIcon={<Link />}
                />
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default BizSurveyHouse;
