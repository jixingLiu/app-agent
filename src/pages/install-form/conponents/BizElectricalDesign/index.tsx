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

const BizElectricalDesign = (props: IProps) => {
  let { item, id, detailData, onConfirm, onUpdateizApplication } = props;
  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData(updatedData);
  };

  const updateImageFormData = (name: string, fileLists: FileItem[]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: prevFormData.image?.map((imgItem) =>
        imgItem.name === name ? { ...imgItem, images: fileLists } : imgItem
      ),
    }));
  };

  useEffect(() => {
    console.log(Object.assign(item || {}, { id }), 'formData')
    if (!item || !id) return
    
    setFormData(() => ({...item, id}));
  }, [item, id]);

  useEffect(() => {
    setIsEdit(["design"].includes(detailData?.state));
  }, [detailData?.state]);

  if (!formData.id) return null
  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        footer={
          isEdit && (
            <div className="w-full flex justify-between gap-4">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onConfirm(formData, "updateBizElectricalDesign");
                }}
                formType="submit"
                className="flex-1"
              >
                保存
              </Button>
              <Button
                onClick={() => {
                  onConfirm(formData, "updateBizElectricalDesign");
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
                提 交
              </Button>
            </div>
          )
        }
      >
        <div className="mb-1">
          <Form.Item label="并网线位置" name="gridConnectionLineLocation">
            <Input
              onChange={(value) => {
                updateFormData("gridConnectionLineLocation", value);
              }}
              value={formData.gridConnectionLineLocation}
              disabled={!isEdit}
              placeholder="请输入并网线位置"
              type="text"
            />
          </Form.Item>
          <Form.Item label="逆变电器位置" name="inverterLocation">
            <Input
              onChange={(value) => {
                updateFormData("inverterLocation", value);
              }}
              value={formData?.inverterLocation}
              disabled={!isEdit}
              placeholder="请输入逆变电器位置"
              type="text"
            />
          </Form.Item>
        </div>
        <div className=" grid grid-cols-2 gap-2 px-2 pb-2">
          {formData.image?.map((itemImg) => (
            <div key={itemImg.name}>
              <div className="leading-6 text-xs text-slate-600">
                {itemImg.name}图
              </div>
              <Uploader
                uploadLabel={`${itemImg.name}图`}
                sourceType={sourceType}

                url={`${uploadUrl}/common/uploads`}
                className="flex-1"
                name="files"
                multiple={true}
                disabled={!isEdit}
                onSuccess={(param) => {
                  const fileLists = multipleUploadResult(param as any); // 类型断言
                  updateImageFormData(itemImg.name, fileLists);
                }}
                value={itemImg.images}
                maxCount={isEdit ? 10 : itemImg.images?.length ?? 0}
                deletable={isEdit}
                onDelete={(file: FileItem, files: FileItem[]) => {
                  updateImageFormData(itemImg.name, files);
                }}
                uploadIcon={<Link />}
              />
            </div>
          ))}
        </div>
      </Form>
    </div>
  );
};

export default BizElectricalDesign;
