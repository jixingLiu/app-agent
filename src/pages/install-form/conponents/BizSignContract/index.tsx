import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { getBizInstallApplication } from "@/api/install";
import { formatImageUrl } from "@/utils/index";
import { multipleUploadResult, uploadResult } from '../../utils/index'

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onUpdateizApplication?: (values: any) => void;
  onConfim: (values: any, apiName: string) => void;
}


const BizSignContract = (props: IProps) => {
  let { item,id, detailData, onConfim, onUpdateizApplication } = props;
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
    setFormData(Object.assign(item || {}, {id}));
    form.setFieldsValue({
      ...item,
      id
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(['acceptance'].includes(detailData?.state))
  }, [detailData?.state])

  return (
    <div>
      <Form
        labelPosition="top" divider
        initialValues={formData}
        form={form}
        footer={ isEdit &&
          <div className="w-full flex justify-between gap-4">
            <Button 
              className="flex-1"
              onClick={() => {
                onConfim(formData, 'updateBizSignContract')
              }}
              formType="submit">
              保存
            </Button>
            <Button
              className="flex-1"
              disabled={detailData.approvaling}
              onClick={() => {
                onUpdateizApplication && onUpdateizApplication({...(detailData || {}),subState: 'approvaling'})
              }}
              type="primary"
              formType="submit">
              提交
            </Button>
          </div>
        }
      >
        <div className="gap-2 px-2 pb-2">
          <div className=" leading-6 text-xs text-slate-600">安装合同</div>
          <Uploader
            uploadLabel="安装合同"
            disabled={!isEdit}
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
