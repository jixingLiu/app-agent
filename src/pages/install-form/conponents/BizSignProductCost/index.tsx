import React, { useEffect, useState } from "react";
import { Button, Form, Input, Picker, Uploader } from "@nutui/nutui-react-taro";
import { formatImageUrl } from "@/utils/index";
import { uploadResult } from "../../utils/index";
import { API_BASE_URL } from "@/constants/index";
import { Plus } from "@nutui/icons-react-taro";

import { sourceType } from '../../utils/index'

interface IProps {
  item: any;
  id: string | number;
  detailData: any;
  onConfirm: (values: any, apiName: string) => void;
}

type itemComponentType = {
  type: string;
  count: number | undefined;
  power: string | undefined;
  [key: string]: any;
};

type itemInverterType = {
  type: string;
  count: number | undefined;
  [key: string]: any;
};

const defaultComponent: itemComponentType = {
  type: "",
  count: undefined,
  power: undefined,
};
const defaultInverter: itemInverterType = {
  type: "",
  count: undefined,
};

const BizSignProductCost = (props: IProps) => {
  let { item, id, detailData = {}, onConfirm } = props;



  const uploadUrl = API_BASE_URL;

  const [form] = Form.useForm();

  const [formData, setFormData] = useState<any>({});
  const [componentType, setComponentType] = useState<itemComponentType>();
  const [visible, setVisible] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const updateFormData = (key: string, value: any) => {
    const updatedData = { ...formData, [key]: value };
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
    form.setFieldsValue({ ...updatedData });
  };

  const multipleUpdateFormData = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    form.setFieldsValue({ ...formData, ...data });
  }
  useEffect(() => {
    let copyData = { ...(item || {}) };
    if (!copyData?.component?.length) {
      copyData.component = [{ ...defaultComponent }];
    }
    if (!copyData?.inverter?.length) {
      copyData.inverter = [{ ...defaultInverter }];
    }
    setFormData({ ...copyData, id: id });
    form.setFieldsValue({
      ...copyData,
      id: id,
    });
    // setComponentType(item?.component[0] || null);
  }, [item]);

  const confirmPicker = (
    options: itemComponentType[],
    values: (string | number)[]
  ) => {
    setComponentType(() => options[0]);
    // todo setValue
  };
  useEffect(() => {
    setIsEdit(["acceptance"].includes(detailData?.state));
  }, [detailData?.state]);

  const preciseMultiply = (a: number, b: number): number => {
    // 将数字转换为字符串
    const aStr: string = a.toString();
    const bStr: string = b.toString();

    // 计算两个数字小数点后的位数
    const aDecimals: number = (aStr.split('.')[1] || '').length;
    const bDecimals: number = (bStr.split('.')[1] || '').length;

    // 通过将数字转换为整数来解决精度问题
    const factor: number = Math.pow(10, aDecimals + bDecimals);
    const aInt: number = Number(aStr.replace('.', ''));
    const bInt: number = Number(bStr.replace('.', ''));

    // 执行乘法并调整回原来的小数位
    return (aInt * bInt) / factor;
  }

  return (
    <div>
      <Form
        labelPosition="top"
        divider
        // initialValues={formData}
        form={form}
        footer={
          isEdit && (
            <>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(formData, "formData");
                  onConfirm(formData, "updateBizSignProductCost");
                }}
                formType="submit"
                block
              >
                保存
              </Button>
            </>
          )
        }
      >
        <div className="mb-1 bg-white">
          <div className="">
            <div className="px-2 text-[24px] text-gray-600">组件信息</div>
            <div className="grid grid-cols-3 gap-1 pt-3">
              <div className="px-5">型号</div>
              <div className="px-5">功率</div>
              <div className="px-5">数量</div>
            </div>
            {formData?.component?.map((item, index) => (
              <div
                className="grid grid-cols-3 gap-1"
                key={`component-${index}`}
              >
                <Input
                  value={item.type}
                  key={`component-${index}-type`}
                  onChange={(value) => {
                    console.log(index);
                    let listValues = formData?.component.map(
                      (subItem, subIndex) => {
                        if (subIndex !== index) {
                          return subItem;
                        }
                        return {
                          ...subItem,
                          type: value,
                        };
                      }
                    );
                    console.log(listValues, "subItem, subIndex");

                    updateFormData("component", listValues);
                  }}
                  disabled={!isEdit}
                  placeholder="型号"
                  type="text"
                />
                <div className="flex items-center">
                  <Input
                    value={item.power}
                    key={`component-${index}-power`}
                    onChange={(value) => {
                      let listValues = formData?.component.map(
                        (subItem, subIndex) => {
                          if (subIndex !== index) {
                            return subItem;
                          }
                          return {
                            ...subItem,
                            power: value,
                          };
                        }
                      );
                      updateFormData("component", listValues);
                    }}
                    disabled={!isEdit}
                    placeholder="功率"
                    type="number"
                  />
                  <span className="text-xs text-[12px] text-slate-600">KW</span>
                </div>
                <Input
                  defaultValue={item.count}
                  value={item.count}
                  key={`component-${index}-count`}
                  onChange={(value) => {
                    let listValues = formData?.component.map(
                      (subItem, subIndex) => {
                        if (subIndex !== index) {
                          return subItem;
                        }
                        return {
                          ...subItem,
                          count: value,
                        };
                      }
                    );
                    updateFormData("component", listValues);
                  }}
                  disabled={!isEdit}
                  placeholder="数量"
                  type="number"
                />
              </div>
            ))}
            <div className="flex justify-center py-2">
              <Plus
                className="text-xl"
                onClick={() => {
                  updateFormData("component", [
                    ...formData.component,
                    { ...defaultComponent },
                  ]);
                }}
              />
            </div>

            <div className="px-2 text-[24px] text-gray-600">逆变器信息</div>
            <div className="grid grid-cols-3 gap-1 pt-3">
              <div className="px-5">型号</div>
              <div className="px-5">功率</div>
            </div>
            {formData?.inverter?.map((item, index) => (
              <div className="grid grid-cols-3 gap-1" key={`inverter-${index}`}>
                <Input
                  defaultValue={item.type}
                  value={item.type}
                  key={`inverter-${index}-type`}
                  onChange={(value) => {
                    let listValues = formData?.inverter.map(
                      (subItem, subIndex) => {
                        if (subIndex !== index) {
                          return subItem;
                        }
                        return {
                          ...subItem,
                          type: value,
                        };
                      }
                    );
                    updateFormData("inverter", listValues);
                  }}
                  disabled={!isEdit}
                  placeholder="型号"
                  type="text"
                />
                <div className="flex items-center">
                  <Input
                    key={`inverter-${index}-power`}
                    value={item.power}
                    onChange={(value) => {
                      let listValues = formData?.inverter.map(
                        (subItem, subIndex) => {
                          if (subIndex !== index) {
                            return subItem;
                          }
                          return {
                            ...subItem,
                            power: value,
                          };
                        }
                      );
                      updateFormData("inverter", listValues);
                    }}
                    disabled={!isEdit}
                    placeholder="功率"
                    type="number"
                  />
                  <span className="text-xs text-[12px] text-slate-600">KW</span>
                </div>
              </div>
            ))}
            <div className="flex justify-center py-2">
              <Plus
                className="text-xl"
                onClick={() => {
                  updateFormData("inverter", [
                    ...formData.inverter,
                    { ...defaultInverter },
                  ]);
                }}
              />
            </div>
          </div>

          {
            detailData?.financialProduct === '租赁建站' ? (
              <>
                <Form.Item label="光伏板数量" name="installedCapacity">
                  <div className="flex items-center">
                    <Input
                      placeholder="请输入光伏板数量"
                      type="number"
                      disabled={!isEdit}
                      value={formData.installedCapacity}
                      onChange={(value) => {
                        if (formData.loanAmount) {
                          multipleUpdateFormData({
                            totalCost:  preciseMultiply(Number(value), formData.installedCapacity),
                            installedCapacity: value
                          })
                          return
                        }
                        updateFormData("installedCapacity", value);

                      }}
                    />
                    <span className="text-xs text-[12px] text-slate-600">块</span>
                  </div>
                </Form.Item>

                <Form.Item label="租赁费单价" name="loanAmount">
                  <div className="flex items-center">
                    <Input
                      placeholder="请输入租赁费单价"
                      type="number"
                      value={formData.loanAmount}
                      disabled={!isEdit}
                      onChange={(value) => {
                        // console.log( preciseMultiply(Number(value), formData.installedCapacity), 'formData.installedCapacity')
                        if (formData.installedCapacity) {
                          multipleUpdateFormData({
                            totalCost: preciseMultiply(Number(value), formData.installedCapacity),
                            loanAmount: value
                          })
                          return
                        }
                        updateFormData("loanAmount", value);
                      }}
                    />
                    <span className="text-xs text-[12px] text-slate-600">元</span>
                  </div>
                </Form.Item>
                <Form.Item label="年租赁费" name="totalCost">
                  <div className="flex items-center">
                    <Input
                      defaultValue={formData.totalCost}
                      value={formData.totalCost}
                      disabled={true}
                      onChange={(value) => {
                        updateFormData("totalCost", value);
                      }}
                      placeholder="请输入年租赁费"
                      type="number"
                    />
                    <span className="text-xs text-[12px] text-slate-600">元</span>
                  </div>
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item label="装机容量" name="installedCapacity">
                  <div className="flex items-center">
                    <Input
                      placeholder="请输入装机容量"
                      type="number"
                      disabled={!isEdit}
                      value={formData.installedCapacity}
                      onChange={(value) => {
                        updateFormData("installedCapacity", value);
                      }}
                    />
                    <span className="text-xs text-[12px] text-slate-600">W</span>
                  </div>
                </Form.Item>

                <Form.Item label="贷款额度" name="loanAmount">
                  <div className="flex items-center">
                    <Input
                      placeholder="请输入贷款额度"
                      type="number"
                      value={formData.loanAmount}
                      disabled={!isEdit}
                      onChange={(value) => {
                        updateFormData("loanAmount", value);
                      }}
                    />
                    <span className="text-xs text-[12px] text-slate-600">元</span>
                  </div>
                </Form.Item>
                <Form.Item label="电站总造价" name="totalCost">
                  <div className="flex items-center">
                    <Input
                      value={formData.totalCost}
                      disabled={!isEdit}
                      onChange={(value) => {
                        updateFormData("totalCost", value);
                      }}
                      placeholder="请输入站总造价"
                      type="number"
                    />
                    <span className="text-xs text-[12px] text-slate-600">元</span>
                  </div>
                </Form.Item>
              </>
            )
          }
          <div className="flex gap-2 px-2 pb-2">
            <Uploader
              url={`${uploadUrl}/common/upload`}
              deletable={!item?.paymentVoucher}
              value={
                formatImageUrl(formData.paymentVoucher, "付款凭证") as []
              }
              maxCount={1}
              sourceType={sourceType}
              disabled={!isEdit}
              onSuccess={(param) => {
                let fileLists = uploadResult(param as any);
                updateFormData("paymentVoucher", fileLists[0].url);
              }}
              uploadLabel="付款凭证"
              className="flex-1"
            />
          </div>
        </div>
      </Form>
      <Picker
        visible={visible}
        options={(item?.component || [])?.map((item) => ({
          ...item,
          text: item.type,
          value: item.type,
        }))}
        onConfirm={(options, value) => confirmPicker(options as any, value)}
        onClose={() => setVisible(false)}
      />
    </div>
  );
};

export default BizSignProductCost;
