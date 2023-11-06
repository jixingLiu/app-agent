import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { getBizInstallApplication } from "@/api/install";
import { formatImageUrl } from "@/utils/index";
import { multipleUploadResult, uploadResult } from "../../utils/index";

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onConfim: (values: any, apiName: string) => void;
}

const BizSignLoan = (props: IProps) => {
  let { item, id, detailData, onConfim } = props;
  const uploadUrl = "http://162.14.70.114:8080";

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  

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

  useEffect(() => {
    setIsEdit(["acceptance"].includes(detailData?.state));
  }, [detailData?.state]);

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
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
            {isEdit && (
              <Button
                block
                onClick={() => onConfim(formData, "updateBizSignLoan")}
              >
                保存
              </Button>
            )}
          </>
        }
      >
        <div className="mb-1 bg-white">
          <Form.Item label="贷款银行" name="financialProduct">
            <Input
              onChange={(value) => {
                updateFormData("financialProduct", value);
              }}
              disabled={!isEdit}
              maxLength={18}
              placeholder="请输入贷款银行"
              type="text"
            />
          </Form.Item>
          <Form.Item label="贷款年限" name="username">
            <Input
              onChange={(value) => {
                updateFormData("username", value);
              }}
              disabled={!isEdit}
              placeholder="请输入贷款年限"
              type="text"
            />
          </Form.Item>
          <Form.Item label="业主姓名" name="ownerName">
            <Input
              onChange={(value) => {
                updateFormData("ownerName", value);
              }}
              disabled={!isEdit}
              placeholder="请输入业主姓名"
              type="text"
            />
          </Form.Item>
          <Form.Item label="业主电话" name="ownerPhone">
            <Input
              onChange={(value) => {
                updateFormData("ownerPhone", value);
              }}
              disabled={!isEdit}
              placeholder="请输入业主电话"
              type="text"
            />
          </Form.Item>
          <Form.Item label="安装地址" name="address">
            <Input
              onChange={(value) => {
                updateFormData("address", value);
              }}
              disabled={!isEdit}
              placeholder="请输入安装地址"
              type="text"
            />
          </Form.Item>
          `
        </div>
        <div className="mb-1 bg-white">
          <Form.Item label="身份证号" name="idNumber">
            <Input
              onChange={(value) => {
                updateFormData("idNumber", value);
              }}
              maxLength={18}
              disabled={!isEdit}
              placeholder="请输入身份证号"
              type="text"
            />
          </Form.Item>
          `
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              key={"idFront"}
              maxCount={1}
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.idFront}
              uploadLabel="身份证正面"
              disabled={!isEdit}
              value={formatImageUrl(formData.idFront, "身份证正面") as []}
              className="flex-1"
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any);
                let value = fileLists[0].url;
                updateFormData("idFront", value);
              }}
            />
            <Uploader
              key={"idBack"}
              uploadLabel="身份证反面"
              url={`${uploadUrl}/common/upload`}
              // deletable={!item?.idBack}
              value={formatImageUrl(formData.idBack, "身份证发面") as []}
              className="flex-1"
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any);
                let value = fileLists[0].url;
                updateFormData("idBack", value);
              }}
            />
          </div>
        </div>
        <div className="mb-1 bg-white">
          <Form.Item label="银行卡号" name="bankCardNumber">
            <Input
              onChange={(value) => {
                updateFormData("bankCardNumber", value);
              }}
              maxLength={18}
              disabled={!isEdit}
              placeholder="请输入银行卡号"
              type="text"
            />
          </Form.Item>
          `
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.bankCardFront}
              value={formatImageUrl(formData.bankCardFront, "银行照片") as []}
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any);
                let value = fileLists[0].url;
                updateFormData("bankCardFront", value);
              }}
              maxCount={1}
              uploadLabel="银行照片"
              disabled={!isEdit}
              className="flex-1"
            />
          </div>
          <div className="flex gap-2 px-2 pb-2">
            <div className="flex-1">
              <div className=" leading-6 text-xs text-slate-600">
                房屋所属表
              </div>
              <Uploader
                uploadLabel="房屋所属表"
                url={`${uploadUrl}/common/uploads`}
                className="flex-1"
                name="files"
                maxCount={5}
                multiple={true}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any);
                  updateFormData("houseOwnership", fileLists);
                }}
                disabled={!isEdit}
                value={formData?.houseOwnership || []}
                uploadIcon={<Link />}
              />
            </div>
            <div className="flex-1">
              <div className=" leading-6 text-xs text-slate-600">
                并网申请表
              </div>
              <Uploader
                uploadLabel="并网申请表"
                headers={{ custom: "files" }}
                url={`${uploadUrl}/common/uploads`}
                value={formData?.gridApplication || []}
                maxCount={5}
                multiple={true}
                disabled={!isEdit}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any);
                  updateFormData("gridApplication", fileLists);
                }}
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
