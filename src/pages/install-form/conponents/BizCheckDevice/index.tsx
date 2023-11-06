import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Input,
  Uploader,
} from "@nutui/nutui-react-taro";
import { multipleUploadResult } from "../../utils/index";
import Taro from "@tarojs/taro";

interface IProps {
  id: string | number,
  item: any;
  detailData: any,
  onConfim: (values: any, apiName: string) => void;
}

const BizCheckDevice = (props: IProps) => {
  const { item, id, detailData, onConfim } = props;

  const [form] = Form.useForm();
  const [formData, setFormData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);

  useEffect(() => {
    if (!item.component?.length) {
      let commonItem = {
        serialNumber: "",
        registrationNo: "",
      }
          
      let newItem = {
        ...item,
        component: [commonItem],
        dataStick: [commonItem],
        inverter: [commonItem],
      }
      setFormData(Object.assign(newItem || {}, {id}));
      form.setFieldsValue({
        ...newItem,
        id,
      });
      return
    }
    setFormData(Object.assign(item || {}, {id}));
    
    form.setFieldsValue({
      ...item,
    });
  }, [item]);

  useEffect(() => {
    setIsEdit(['check'].includes(detailData?.state))
  }, [detailData?.state])

  const handleUpdateData = (
    componentKey: string,
    key: string,
    index: number,
    value: any
  ) => {
    console.log(componentKey, key, index, value);
    const updatedData = { ...formData };
    const componentData = updatedData[componentKey].map(
      (originItem, originIndex) => {
        if (index === originIndex) {
          return {
            ...originItem,
            [key]: value,
          };
          return originItem;
        }
        return originItem;
      }
    );
    setFormData((updatedData) => {
      return {
        ...updatedData,
        [componentKey]: componentData,
      };
    });
    form.setFieldsValue({
      [componentKey]: componentData,
    });
  };

  const renderInputGroup = (label: string, key: string) => {
    return formData[key]?.map((item, index) => (
      <div className="flex items-center gap-4" key={`${key}-${index}`}>
        <Input
          className="flex-1"
          key={`${key}-serialNumber`}
          // key={'serialNumber'}
          disabled={!isEdit}
          value={item.serialNumber}
          onChange={(value) =>
            handleUpdateData(key, "serialNumber", index, value)
          }
          placeholder={`${label}序列号`}
          type="text"
        />
        <Input
          className="flex-1"
          key={`${key}-registrationNo`}
          value={item.registrationNo}
          disabled={!isEdit}
          onChange={(value) =>
            handleUpdateData(key, "registrationNo", index, value)
          }
          placeholder={`${label}注册码`}
          type="text"
        />
      </div>
    ));
  };

  return (
    <div>
      <Form
        labelPosition="top"
        divider
        initialValues={formData}
        form={form}
        onFinish={(values) => {
          onConfim(values, "updateBizCheckDevice");
        }}
        footer={ isEdit &&
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }
      >
        {formData["component"] ? (
          <>
            <Form.Item label="组件信息" name="component" key={"component"}>
              {renderInputGroup("组件信息", "component")}
            </Form.Item>
            <Form.Item label="逆变器信息" name="inverter" key={"inverter"}>
              {renderInputGroup("逆变器信息", "inverter")}
            </Form.Item>
            <Form.Item label="数据棒信息" name="dataStick" key={"dataStick"}>
              {renderInputGroup("数据棒信息", "dataStick")}
            </Form.Item>
          </>
        ) : null}
      </Form>
    </div>
  );
};

export default BizCheckDevice;
