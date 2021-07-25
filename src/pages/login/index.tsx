import {
  Button,
  Card,
  Checkbox,
  Flex,
  Icon,
  InputItem,
  NavBar,
  Toast,
  WhiteSpace,
} from 'antd-mobile';
import React, { RefObject, useRef, useState } from 'react';
import './index.css';
import QRcode from '../../assets/images/QRcode.png';
import { useHistory } from 'react-router';
import axios from 'axios';

const CheckboxItem = Checkbox.CheckboxItem;
const Login: React.FC = () => {
  const [logingSuccess, setLogingSuccess] = useState(false);
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const loginSucceed = (): JSX.Element => {
    return (
      <Card className="absolute top-4 p-2 mx-2">
        <div>
          <Flex direction="column" className="text-blue-500">
            <b className="leading-3 font-20">登陆成功!</b>
            <b className="leading-3 font-20">请联系我们</b>
          </Flex>
          <hr className="w-full bg-current my-2" />
          <Flex direction="column" className="text-blue-500 text-center  mb-2">
            <b className="leading-5 font-24">电话：028-84325628</b>
            <b className="leading-5 font-24">Q Q：2850224072</b>
            <b className="leading-5 font-24">微信：</b>
            <img src={QRcode} alt="" height="187px" width="187px" />
          </Flex>
          <Button className="button" onClick={() => history.push('/TabBar')}>
            好的
          </Button>
          <WhiteSpace />
        </div>
      </Card>
    );
  };

  return (
    <div className="bgc">
      <NavBar
        mode="light"
        icon={<Icon type="left" color="#fff" />}
        style={{ background: 'none' }}
        onLeftClick={() => console.log('onLeftClick')}
      >
        <b className="text-white">登录/注册</b>
      </NavBar>
      {logingSuccess ? (
        loginSucceed()
      ) : (
        <Card className="absolute top-1/4 p-2 mx-2">
          <div className="mb-2">
            <InputItem
              type="phone"
              clear
              placeholder="手机号"
              onChange={(value) => setPhone(value)}
            />
            <div className="flex items-end mt-2 h-4">
              <InputItem placeholder="验证码" />
              <Flex
                justify="center"
                className="bg-blue-200 w-8 text-white h-full"
              >
                59s
              </Flex>
            </div>
          </div>

          <Button
            className="button"
            onClick={() => {
              if (!phone) return Toast.info('请输入手机号');

              Toast.loading('');
              axios
                .post(
                  'https://api.7zaowang.com/index.php/api/telephoneMessage',
                  {
                    name: '',
                    phone: phone.replace(/\s*/g, ''),
                    message_type: 1,
                  },
                )
                .then((res) => {
                  if (res.status === 200) {
                    setLogingSuccess(true);
                  }
                  Toast.hide();
                })
                .catch((e) => {
                  Toast.info('登陆失败');
                });
            }}
          >
            注册/登录
          </Button>
          <Flex align="center" justify="center">
            <div>
              <CheckboxItem data-seed="logId" defaultChecked multipleLine>
                <span className="font-12 text-gray-400">我已阅读并同意</span>
              </CheckboxItem>
            </div>

            <span className="text-blue-400">《用户协议》</span>
          </Flex>
        </Card>
      )}
    </div>
  );
};

export default Login;
