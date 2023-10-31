import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Uploader,
} from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { multipleUploadResult } from "../../utils/index";

interface IProps {
  item: any;
  id: string | number;
  onConfim: (values: any, apiName: string) => void;
}

const BizDesignStructural = (props: IProps) => {
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
      ...(item || {}),
    });
  }, [item]);


  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        onFinish={(values) => {
          onConfim(values, 'updateBizDesignStructural')
        }}
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <div className="mb-2 px-2 leading-6 text-xs text-slate-600">设计结构</div>
        <div className=" grid grid-cols-2 gap-2 px-2 pb-2">
          {item?.image?.map((itemImg, index) => {
            console.log(itemImg, 'itemImg')
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
                    })
                    updateFormData('image', values)
                  }}
                  // disabled={!itemImg?.images?.length}
                  // deletable={!itemImg?.images?.length}
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

export default BizDesignStructural;