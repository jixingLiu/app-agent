import React, { useEffect, useState } from "react";
import { Button, Form, Input, Uploader } from "@nutui/nutui-react-taro";
import { Link } from "@nutui/icons-react-taro";
import { multipleUploadResult, sourceType } from "../../utils/index";
import { API_BASE_URL } from "@/constants/index";
import { FileItem } from "@nutui/nutui-react/dist/types/packages/uploader";
interface IProps {
  item: any;
  id: string | number;
  detailData: any,
  onConfirm: (values: any, apiName: string) => void;
}

interface ImageItem {
  name: string;
  images: any[]; // 或者是具体的图片路径类型
}

interface FormData {
  id: string | number;
  gridConnectionLineLocation?: string;
  inverterLocation?: string;
  image: ImageItem[];
  // 其他表单字段
}

const BizElectricalDesign = (props: IProps) => {
  let { item, id, detailData, onConfirm } = props;
  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<FormData>({ ...item, id });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateSubImages = (subImages: FileItem[], subName: string, fileLists: FileItem[]) => {
    return subImages.map(subImgItem => subImgItem.name === subName ? { ...subImgItem, images: fileLists } : subImgItem);
  };
  const updateImageFormData = (name: string, subName: string, fileLists: FileItem[]) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      image: prevFormData.image?.map(imgItem => 
        imgItem.name === name ? { ...imgItem, images: updateSubImages(imgItem.images, subName, fileLists) } : imgItem
      )
    }));
  };

  useEffect(() => {
    setFormData(Object.assign(item || {}, {id}));
  }, [item, id]);

  useEffect(() => {
    setIsEdit(['check'].includes(detailData?.state))
  }, [detailData?.state])

  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        footer={ isEdit && 
          <>
            <Button
              onClick={(e) => {
                e.preventDefault();
                onConfirm(formData, "updateBizCheckElectrical");
              }}
              formType="submit"
              block
            >
              保存
            </Button>
          </>
        }
      >
        <div className="px-2 pb-2">
          {formData?.image?.map((itemImg, index) => {
            return (
              <div key={encodeURI(itemImg.name)} className="w-full">
                <div className=" leading-6 text-[28px] pt-2 text-slate-600">
                  {itemImg.name}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {itemImg.images?.map((subItem) => (
                    <div key={encodeURI(subItem.name)}>
                      <div className=" leading-6 text-[24px] text-slate-400">
                        {subItem.name}
                      </div>
                      <Uploader
                        uploadLabel={`${subItem.name}图`}
                        sourceType={sourceType}

                        url={`${uploadUrl}/common/uploads`}
                        className="flex-1"
                        method="post"
                        name="files"
                        multiple={true}
                        disabled={!isEdit}
                        value={subItem.images}
                        onSuccess={(param) => {
                          let fileLists = multipleUploadResult(param as any);
                          updateImageFormData( itemImg.name,subItem.name, fileLists);
                        }}
                        maxCount={isEdit ? 10 : itemImg?.images?.length ?? 10}
                        deletable={isEdit}
                        onDelete={(file: FileItem, files: FileItem[]) => {
                          console.log(subItem.name, files)
                          updateImageFormData(itemImg.name,subItem.name, files);
                        }}
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
