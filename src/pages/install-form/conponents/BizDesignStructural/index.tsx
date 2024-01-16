import React, { useEffect, useState } from 'react';
import { Button, Form, Uploader } from '@nutui/nutui-react-taro';
import { Link } from '@nutui/icons-react-taro';
import { multipleUploadResult, sourceType } from '../../utils/index';
import { API_BASE_URL } from '@/constants/index';
import { FileItem } from '@nutui/nutui-react/dist/types/packages/uploader';

interface ImageItem {
  name: string;
  images: FileItem[]; // 根据你的实际情况调整类型
}

interface DetailData {
  state: string;
  // 其他你可能需要的字段...
}

interface IProps {
  item: { image: ImageItem[] };
  id: string | number;
  detailData: DetailData;
  onConfirm: (values: { image: ImageItem[] }, apiName: string) => void;
}

const BizDesignStructural: React.FC<IProps> = ({ item, id, detailData, onConfirm}) => {
  const uploadUrl = API_BASE_URL;
  const [formData, setFormData] = useState<{ image: ImageItem[], id: string | number }>({ image: [], id });
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    setFormData({ ...item, id }); // 使用id作为依赖更新formData
    setIsEdit(detailData?.state === 'design');
  }, [item, id, detailData?.state]);

  const updateFormData = (name: string, fileLists: FileItem[]) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: prevFormData.image.map((imgItem) =>
        imgItem.name === name ? { ...imgItem, images: fileLists } : imgItem
      ),
    }));
  };


  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        footer={
          isEdit && (
            <Button formType="submit" block onClick={() => {
              onConfirm(formData, 'updateBizDesignStructural');
            }}>
              保存
            </Button>
          )
        }
      >
        <div className="mb-2 px-2 leading-6 text-xs text-slate-600">设计结构</div>
        <div className="grid grid-cols-2 gap-2 px-2 pb-2">
          {formData.image.map((itemImg, index) => (
            <div key={itemImg.name}>
              <div className="leading-6 text-xs text-slate-600">
                {itemImg.name}
              </div>
              <Uploader
                uploadLabel={`${itemImg.name}图`}
                url={`${uploadUrl}/common/uploads`}
                sourceType={sourceType}

                className="flex-1"
                name="files"
                disabled={!isEdit}
                multiple={true}
                onSuccess={(param) => {
                  const fileLists = multipleUploadResult(param as any);
                  updateFormData(itemImg.name, fileLists);
                }}
                value={itemImg.images}
                maxCount={isEdit ? 10 : itemImg.images.length}
                deletable={isEdit}
                onDelete={(file: FileItem, files: FileItem[]) => {
                  updateFormData(itemImg.name, files);
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

export default BizDesignStructural;
