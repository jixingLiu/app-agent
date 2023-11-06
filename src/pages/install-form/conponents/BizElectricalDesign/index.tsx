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
  detailData: any;
  onUpdateizApplication?: (values: any) => void;
  onConfim: (values: any, apiName: string) => void;
}

const BizElectricalDesign = (props: IProps) => {
  let { item, id, detailData, onConfim, onUpdateizApplication } = props;
  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };

  useEffect(() => {
    setFormData(Object.assign(item || {}, { id }));
    form.setFieldsValue({
      ...item,
      id,
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(["design"].includes(detailData?.state));
  }, [detailData?.state]);

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
                  onConfim(formData, "updateBizElectricalDesign");
                }}
                formType="submit"
                className="flex-1"
              >
                保存
              </Button>
              <Button
                onClick={() => {
                  onUpdateizApplication &&
                    onUpdateizApplication({
                      ...(detailData || {}),
                      subState: "approvaling",
                    });
                }}
                formType="submit"
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
          <Form.Item label="并网线位置" name="gridConnectionLineLocation">
            <Input
              onChange={(value) => {
                updateFormData("gridConnectionLineLocation", value);
              }}
              disabled={!isEdit}
              placeholder="请输入并网线位置"
              type="text"
            />
          </Form.Item>
          <Form.Item label="逆变电器位置" name="inverterLocation">
            <Input
              onChange={(value) => {
                updateFormData("inverterLocation", value);
              }}
              disabled={!isEdit}
              placeholder="请输入逆变电器位置"
              type="text"
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
                  maxCount={5}
                  multiple={true}
                  disabled={!isEdit}
                  onSuccess={(param) => {
                    let fileLists = multipleUploadResult(param as any);
                    setFormData({
                      ...formData,
                      image: formData.image.map((item) => {
                        if (item.name === itemImg.name) {
                          return {
                            ...item,
                            images: fileLists,
                          };
                        }
                        return item;
                      }),
                    });
                    form.setFieldsValue({
                      image: formData.image.map((item) => {
                        if (item.name === itemImg.name) {
                          return {
                            ...item,
                            images: fileLists,
                          };
                        }
                        return item;
                      }),
                    });
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

export default BizElectricalDesign;
