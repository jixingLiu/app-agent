import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { multipleUploadResult, sourceType } from "../../utils/index";
import { API_BASE_URL } from "@/constants/index";
import { FileItem } from "@nutui/nutui-react-taro/dist/types/packages/uploader/file-item";

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onUpdateizApplication?: (values: any) => void;
  onConfirm: (values: any, apiName: string) => void;
}

const BizCheckGridConnection = (props: IProps) => {
  let { item, id, detailData, onConfirm, onUpdateizApplication } = props;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
    form.setFieldsValue(updatedData);
  };
  const updateImageFormData = (name: string, fileLists: FileItem[]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: prevFormData.image.map((imgItem) =>
        imgItem.name === name ? { ...imgItem, images: fileLists } : imgItem
      ),
    }));
  };

  useEffect(() => {
    setFormData(Object.assign(item || {}, { id }));
    form.setFieldsValue({
      ...item,
      id,
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(["check"].includes(detailData?.state));
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
            <>
              <div className="w-full flex justify-between gap-4">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    onConfirm(formData, "updateBizCheckGridConnection");
                    console.log(formData, "formData");
                  }}
                  formType="submit"
                  className="flex-1"
                >
                  保存
                </Button>
                <Button
                  onClick={() => {
                    onConfirm(formData, "updateBizCheckGridConnection");
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
            </>
          )
        }
      >
        <div className="mb-1">
          <Form.Item label="发电户号" name="powerAccount">
            <Input
              disabled={!isEdit}
              placeholder="请输入发电户号"
              type="text"
              onChange={(value) => { updateFormData("powerAccount", value); }}
            />
          </Form.Item>
          <Form.Item label="备案容量" name="recordCapacity">
            <div className="flex items-center">
              <Input
                disabled={!isEdit}
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
          {formData?.image?.map((itemImg, index) => {
            return (
              <div key={index}>
                <div className=" leading-6 text-[24px] text-slate-600">
                  {itemImg.name}
                </div>
                <Uploader
                  key={encodeURI(itemImg.name)}
                  uploadLabel={`${itemImg.name}图`}
                  url={`${uploadUrl}/common/uploads`}
                  sourceType={sourceType}

                  className="flex-1"
                  name="files"
                  multiple={true}
                  disabled={!isEdit}
                  onSuccess={(param) => {
                    let fileLists = multipleUploadResult(param as any);
                    updateImageFormData(itemImg.name, fileLists)
                  }}
                  deletable={isEdit}
                  maxCount={ isEdit ? 10 : itemImg?.images?.length ?? 10}

                  onDelete={(file: FileItem, files: FileItem[]) => {
                    updateImageFormData(itemImg.name, files)
                  }}
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
