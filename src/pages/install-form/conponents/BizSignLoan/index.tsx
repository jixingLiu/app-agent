import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { getBizInstallApplication } from "@/api/install";
import { formatImageUrl } from "@/utils/index";
import { multipleUploadResult, uploadResult } from "../../utils/index";
import { API_BASE_URL } from "@/constants/index";
import { FileItem } from "@nutui/nutui-react/dist/types/packages/uploader";
import { sourceType } from "../../utils/index";
interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onConfirm: (values: any, apiName: string) => void;
}

console.log(API_BASE_URL, "API_BASE_URL");

const BizSignLoan = (props: IProps) => {
  let { item, id, detailData, onConfirm } = props;
  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (!item || !detailData) return
    setFormData(Object.assign(detailData || {}, item || {}));
    form.setFieldsValue({
      ...item,
      ...detailData,
    });
    // getBizInstallApplication({ id: id }).then((res) => {
    //   let { data } = res;
    //   console.log(data, 'getBizInstallApplication')
    //   setFormData(Object.assign(item || {}, data || {}));
    //   form.setFieldsValue({
    //     ...item,
    //     ...data,
    //   });
    // });
  }, [item, detailData]);

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
                onClick={() => onConfirm(formData, "updateBizSignLoan")}
              >
                保存
              </Button>
            )}
          </>
        }
      >
        <div className="mb-1 bg-white">
          {item.financialProduct !== "租赁建站" ? (
            <>
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
              <Form.Item label="贷款年限" name="loanTerm">
                <Input
                  onChange={(value) => {
                    updateFormData("loanTerm", value);
                  }}
                  disabled={!isEdit}
                  placeholder="请输入贷款年限"
                  type="number"
                />
              </Form.Item>
            </>
          ) : null}
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
              uploadLabel="身份证正面"
              disabled={!isEdit}
              sourceType={sourceType}
              value={formatImageUrl(formData.idFront, "身份证正面") as []}
              className="flex-1"
              deletable={isEdit}
              onDelete={() => {
                updateFormData("idFront", "");
              }}
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
              sourceType={sourceType}
              disabled={!isEdit}
              value={formatImageUrl(formData.idBack, "身份证发面") as []}
              className="flex-1"
              deletable={isEdit}
              onDelete={() => {
                updateFormData("idBack", "");
              }}
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
              maxLength={19}
              disabled={!isEdit}
              placeholder="请输入银行卡号"
              type="text"
            />
          </Form.Item>
          `
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              url={`${uploadUrl}/common/upload`}
              value={formatImageUrl(formData.bankCardFront, "银行照片") as []}
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any);
                let value = fileLists[0].url;
                updateFormData("bankCardFront", value);
              }}
              deletable={detailData?.state === "acceptance" ? true : false}
              onDelete={() => {
                updateFormData("bankCardFront", "");
              }}
              maxCount={1}
              sourceType={sourceType}
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
                sourceType={sourceType}
                maxCount={
                  detailData?.state === "acceptance"
                    ? 10
                    : item?.houseOwnership?.length
                }
                multiple={true}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any);
                  updateFormData("houseOwnership", fileLists);
                }}
                deletable={detailData?.state === "acceptance" ? true : false}
                onDelete={(file: FileItem, files: FileItem[]) => {
                  updateFormData("houseOwnership", files);
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
                url={`${uploadUrl}/common/uploads`}
                className="flex-1"
                name="files"
                sourceType={sourceType}
                maxCount={
                  detailData?.state === "acceptance"
                    ? 10
                    : formData?.gridApplication?.length || 10
                }
                value={formData?.gridApplication || []}
                multiple={true}
                disabled={!isEdit}
                onSuccess={(param) => {
                  let fileLists = multipleUploadResult(param as any);
                  updateFormData("gridApplication", fileLists);
                }}
                deletable={detailData?.state === "acceptance" ? true : false}
                onDelete={(file: FileItem, files: FileItem[]) => {
                  updateFormData("gridApplication", files);
                }}
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
