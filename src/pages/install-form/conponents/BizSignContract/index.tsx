import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { getBizInstallApplication } from "@/api/install";
import { formatImageUrl } from "@/utils/index";
import { multipleUploadResult, uploadResult } from '../../utils/index'

interface IProps {
  item: any;
  id: string | number;
  onConfim: (values: any, apiName: string) => void
}


const BizSignContract = (props: IProps) => {
  let { item, id, onConfim } = props;
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
        labelPosition="top" divider
        initialValues={formData}
        form={form}
        footer={
          <>
            <Button 
            onClick={() => {
              onConfim(formData, 'updateBizSignContract')
            }}
            formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        <div className="gap-2 px-2 pb-2">
          <div className=" leading-6 text-xs text-slate-600">安装合同</div>
          <Uploader
            uploadLabel="安装合同"
            url={`${uploadUrl}/common/uploads`}
            className="flex-1"
            name="files"
            maxCount={5}
            multiple={true}
            onSuccess={(param) => {
              let fileLists = multipleUploadResult(param as any)
              updateFormData('image', fileLists)
            }}
            deletable={!item?.image?.length}
            value={formData?.image}
            uploadIcon={<Link />}
          />
        </div>

      </Form>
    </div>
  );
};

export default BizSignContract;
