import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  TextArea,
  Uploader,
} from "@nutui/nutui-react-taro";
import { Link, Location2 } from "@nutui/icons-react-taro";
import { multipleUploadResult } from "../../utils/index";
import Taro from "@tarojs/taro";

interface IProps {
  item: any;
  id: string | number;
  onConfim: (values: any, apiName: string) => void;
}

const BizSurveyHouse = (props: IProps) => {
  let { item, onConfim } = props;
  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };


  useEffect(() => {
    setFormData(Object.assign(item || {}));
    form.setFieldsValue({
      ...item,
    });
  }, [item]);

  const getLocation = () => {
    Taro.getLocation({
      type: "wgs84", // 使用 GPS 坐标
      success: (res) => {
        const { latitude, longitude } = res;
        console.log(latitude, longitude);
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
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onConfim(formData, "updateBizSurveyHouse");
              }}
              formType="submit"
              block
              type="primary"
            >
              提交
            </Button>
          </>
        }
      >
        <div className="mb-1">
          <Form.Item label="场景类型" name="sceneType">
            <Input placeholder="请输入场景类型" type="text" />
          </Form.Item>
          <Form.Item label="经纬度" name="localtion">
            <div className="flex items-center">
              <Input
                value={formData.latitude}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    latitude: value,
                  });
                  form.setFieldsValue({
                    latitude: value,
                  });
                }}
                placeholder="经度"
                type="text"
              />
              <Input
                value={formData.longitude}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    longitude: value,
                  });
                  form.setFieldsValue({
                    longitude: value,
                  });
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
                onChange={(value) => {
                  updateFormData('siteNumber', value)
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
              placeholder="请输入业主要求"
              maxLength={300}
            />
          </Form.Item>
        </div>
        <div className=" grid grid-cols-2 gap-2 px-2 pb-2">
          {item?.image?.map((itemImg, index) => {
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
                  name="files"
                  maxCount={ itemImg?.images?.length || 5}
                  multiple={true}
                  onSuccess={(param) => {
                    let fileLists = multipleUploadResult(param as any)
                    let values = formData.image.map(item => {
                      if (item.name === itemImg.name) {
                        return {
                          ...item,
                          images: fileLists
                        }
                      }
                      return item
                    })
                    updateFormData('image', values)
                  }}
                  // // deletable={!item?.image?.length}
                  value={itemImg?.images}
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
