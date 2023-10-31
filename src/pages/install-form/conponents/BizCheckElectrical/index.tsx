import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { multipleUploadResult } from "../../utils/index";

interface IProps {
  item: any;
  id: string | number;
  onConfim: (values: any, apiName: string) => void;
}

const BizElectricalDesign = (props: IProps) => {
  let { item, onConfim } = props;
  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };

  console.log(item, "item");
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
                onConfim(formData, "updateBizCheckElectrical");
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
        <div className="px-2 pb-2">
          {item?.image?.map((itemImg, index) => {
            return (
              <div key={encodeURI(itemImg.name)} className="w-full">
                <div className=" leading-6 text-xs text-slate-600">
                  {itemImg.name}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {itemImg.images?.map((subItem) => (
                    <div key={encodeURI(subItem.name)}>
                      <div className=" leading-6 text-xs text-slate-400">
                        {subItem.name}
                      </div>
                      <Uploader
                        uploadLabel={`${subItem.name}图`}
                        url={`${uploadUrl}/common/uploads`}
                        className="flex-1"
                        method="post"
                        name="files"
                        maxCount={5}
                        multiple={true}
                        onSuccess={(param) => {
                          let fileLists = multipleUploadResult(param as any);
                          let values = formData.image.map((item) => {
                            return {
                              ...item,
                              images: item.images?.map( (fromSubItem) => {
                                if (fromSubItem.name === subItem.name) {
                                  return {
                                    ...fromSubItem,
                                    images: fileLists
                                  }
                                }
                                return fromSubItem
                              })
                            }
                            // if (item.name === itemImg.name) {
                            //   return {
                            //     ...item,
                            //     images: fileLists,
                            //   };
                            // }
                            return item;
                          });
                          updateFormData('image', values)
                        }}
                        // deletable={!item?.image?.length}
                        // value={itemImg?.images}
                        uploadIcon={<Link />}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default BizElectricalDesign;