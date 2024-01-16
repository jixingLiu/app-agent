import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { getBizInstallApplication } from "@/api/install";
import { formatImageUrl } from "@/utils/index";
import { multipleUploadResult, sourceType, uploadResult } from '../../utils/index'
import { API_BASE_URL } from "@/constants/index";
import Taro from "@tarojs/taro";
import { FileItem } from "@nutui/nutui-react/dist/types/packages/uploader";

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onUpdateizApplication?: (values: any) => void;
  onConfirm: (values: any, apiName: string) => void;
}


const BizSignContract = (props: IProps) => {
  let { item,id, detailData, onConfirm, onUpdateizApplication } = props;
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
                onConfirm(formData, 'updateBizSignContract')
              }}
              formType="submit">
              保存
            </Button>
            <Button
              className="flex-1"
              onClick={() => {
                if (formData.image?.length < 1) {
                  Taro.showToast({
                    title: '请上传安装合同',
                    icon: 'none'
                  })
                  return
                }
                onConfirm(formData, 'updateBizSignContract')
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
            sourceType={sourceType}

            disabled={!isEdit}
            url={`${uploadUrl}/common/uploads`}
            className="flex-1"
            name="files"
            maxCount={detailData?.state ==='acceptance' ? 10 : formData?.image?.length}
            multiple={true}
            onSuccess={(param) => {
              let fileLists = multipleUploadResult(param as any)

              updateFormData('image', fileLists)
            }}
            deletable={detailData?.state ==='acceptance'? true : false}
            value={formData?.image}
            onDelete={(file: FileItem, files: FileItem[]) => {
              updateFormData('image', files)
            }}
            uploadIcon={<Link />}
          />
        </div>

      </Form>
    </div>
  );
};

export default BizSignContract;
