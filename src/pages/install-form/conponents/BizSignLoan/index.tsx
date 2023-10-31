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


const BizSignLoan = (props: IProps) => {
  let { item, id, onConfim } = props;
  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});

  console.log(item, "item");
  useEffect(() => {
    getBizInstallApplication({ id: id }).then((res) => {
      let { data } = res;
      setFormData(Object.assign(item || {}, data || {}));
      form.setFieldsValue({
        ...item,
        ...data,
      });
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
            <Button block type="primary" onClick={() => onConfim(formData, 'updateBizSignLoan')}>
              提交
            </Button>
          </>
        }
      >
        <div className="mb-1 bg-white">
          <Form.Item label="贷款银行" name="financialProduct">
            <Input maxLength={18} placeholder="请输入贷款银行" type="text" />
          </Form.Item>
          <Form.Item label="贷款年限" name="username">
            <Input placeholder="请输入贷款年限" type="text" />
          </Form.Item>
          <Form.Item label="业主姓名" name="ownerName">
            <Input placeholder="请输入业主姓名" type="text" />
          </Form.Item>
          <Form.Item label="业主电话" name="ownerPhone">
            <Input placeholder="请输入业主电话" type="text" />
          </Form.Item>
          <Form.Item label="安装地址" name="address">
            <Input placeholder="请输入安装地址" type="text" />
          </Form.Item>
          `
        </div>
        <div className="mb-1 bg-white">
          <Form.Item label="身份证号" name="idNumber">
            <Input placeholder="请输入身份证号" type="text" />
          </Form.Item>
          `
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              key={'idFront'}
              maxCount={1}
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.idFront}
              uploadLabel="身份证正面"
              value={formatImageUrl(formData.idFront, "身份证正面") as []}
              className="flex-1"
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any)
                console.log(fileLists,param, 'param--' )
                setFormData({
                  ...formData,
                  idFront: fileLists[0].url
                })
                form.setFieldsValue({
                  idFront: fileLists[0].url
                })
              }}
            />
            <Uploader
              key={'idBack'}
              uploadLabel="身份证反面"
              url={`${uploadUrl}/common/upload`}
              // deletable={!item?.idBack}
              value={formatImageUrl(formData.idBack, "身份证发面") as []}
              className="flex-1"
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any)
                setFormData({
                  ...formData,
                  idBack: fileLists[0].url
                })
                form.setFieldsValue({
                  idBack: fileLists[0].url
                })
              }}
            />
          </div>
        </div>
        <div className="mb-1 bg-white">
          <Form.Item label="银行卡号" name="bankCardNumber">
            <Input placeholder="请输入银行卡号" type="text" />
          </Form.Item>
          `
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.bankCardFront}
              value={formatImageUrl(formData.bankCardFront, "银行照片") as []}
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any)
                setFormData({
                  ...formData,
                  bankCardFront: fileLists[0].url
                })
                form.setFieldsValue({
                  bankCardFront: fileLists[0].url
                })
              }}
              maxCount={1}
              uploadLabel="银行照片"
              className="flex-1"
            />
          </div>
          <div className="flex gap-2 px-2 pb-2">
            <div className="flex-1">
              <div className=" leading-6 text-xs text-slate-600">房屋所属表</div>
              <Uploader
                uploadLabel="房屋所属表"
                url={`${uploadUrl}/common/uploads`}
                className="flex-1"
                name="files"
                maxCount={5}
                multiple={true}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any)
                  setFormData({
                    ...formData,
                    houseOwnership: fileLists
                  })
                  form.setFieldsValue({
                    houseOwnership: fileLists
                  })
                }}
                deletable={!item?.houseOwnership?.length}
                value={formData?.houseOwnership?.map(item => ({
                  ...item,
                  status:'success',
                  type: 'image'
                }))}
                uploadIcon={<Link />
              }
            />
            </div>
            <div className="flex-1">
              <div className=" leading-6 text-xs text-slate-600">并网申请表</div>
              <Uploader
                uploadLabel="并网申请表"
                headers={{custom: 'files'}}
                url={`${uploadUrl}/common/uploads`}
                deletable={!item?.gridApplication?.length}
                value={formData?.gridApplication?.map(item => ({
                  ...item,
                  status:'success',
                  type: 'image'
                }))}
                maxCount={5}
                multiple={true}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any)
                  setFormData({
                    ...formData,
                    gridApplication: fileLists
                  })
                  form.setFieldsValue({
                    gridApplication: fileLists
                  })
                }}
                disabled={true}
                className="flex-1"
                uploadIcon={<Link />}
              />
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default BizSignLoan;
