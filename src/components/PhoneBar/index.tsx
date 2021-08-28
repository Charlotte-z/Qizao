import { Toast } from 'antd-mobile';
import Input from 'antd-mobile/lib/input-item/Input';
import axios from 'axios';
import React, { useRef, useState } from 'react';

interface Props {
  selectCompany?: 1 | 2;
  companyKey?: string;
}

const PhoneBar: React.FC<Props> = ({
  selectCompany = 1,
  companyKey = 'huey',
}) => {
  const phoneNumber = useRef<string>('');
  const [companyType, setCompanyType] = useState(1);

  return (
    <div className="sz">
      <div className="flex justify-center mt-2">
        <h1 style={{ fontSize: 20 }}>全国范围免费找资质/公司</h1>
      </div>
      <div className="flex justify-center mt-1 ">
        <div onClick={() => setCompanyType(1)} className="flex items-center">
          <input
            type="radio"
            id="huey"
            name={companyKey}
            value="1"
            defaultChecked
          />
          <label>找公司</label>
        </div>

        <div onClick={() => setCompanyType(2)} className="flex items-center">
          <input
            type="radio"
            id="huey"
            name={companyKey}
            value="2"
            className="ml-4"
          />
          <label>找带资质的公司</label>
        </div>
      </div>

      <div className="searWrapper flex justify-center mt-2">
        <input
          className="inputItem"
          placeholder=" 填写您的电话号，我们立即联系您！"
          onChange={(value: any) => {
            phoneNumber.current = value.target.value;
          }}
          type="tel"
          maxLength={11}
        />
        <div
          className="search flex justify-center items-center"
          onClick={() => {
            if (!phoneNumber.current) return Toast.info('请输入手机号码');
            if (
              phoneNumber.current.length < 11 ||
              !Number.isInteger(phoneNumber.current)
            ) {
              return Toast.info('请输入正确的手机号');
            }

            axios({
              method: 'post',
              url: 'https://api.7zaowang.com/index.php/api/telephoneMessage',
              data: {
                name: '',
                phone: phoneNumber.current,
                message_type: companyType,
              },
            })
              .then((res) => {
                Toast.info('提交成功');
              })
              .catch((e) => {
                Toast.info('请求服务器错误');
              });
          }}
        >
          <span>立即查找</span>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <span>60分钟 187****4766 发布了北京****金融有限公司</span>
      </div>
    </div>
  );
};

export default PhoneBar;
