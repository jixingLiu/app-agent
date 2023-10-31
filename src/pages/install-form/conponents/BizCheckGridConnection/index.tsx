import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { multipleUploadResult } from "../../utils/index";

interface IProps {
  item: any;
  id: string | number;
  onConfim: (values: any, apiName: string) => void;
}

const BizCheckGridConnection = (props: IProps) => {
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
                onConfim(formData, "updateBizCheckGridConnection");
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
          <Form.Item label="发电户号" name="powerAccount">
            <Input placeholder="请输入发电户号" type="text" />
          </Form.Item>
          <Form.Item label="备案容量" name="recordCapacity">
            <div className="flex items-center">
              <Input
                value={formData.recordCapacity}
                onChange={(value) => {
                  updateFormData("recordCapacity", value);
                }}
                placeholder="请输入备案容量"
                type="number"
              />
              <span className="text-xs text-[12px] text-slate-600">KW</span>
            </div>
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
                  maxCount={itemImg?.images?.length || 5}
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
                  deletable={!item?.image?.length}
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

export default BizCheckGridConnection;
