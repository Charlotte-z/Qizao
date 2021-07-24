import { Button, Flex, Icon, NavBar, WhiteSpace } from 'antd-mobile';
import React from 'react';
import aptitudeSrc from '../../assets/images/aptitude.png';
import transferStepSrc from '../../assets/images/transferSteps.png';
import AptitudeCard from './AptitudeCard';
import { serverDesSteps, serverTitleSteps, transferSteps } from './config';
import DescriptionCell from './DescriptionCell';

const Aptitude: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar
        style={{ backgroundColor: '#4868DC' }}
        mode="light"
        icon={<Icon type="left" color="#fff" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        <span style={{ color: '#fff' }}>资质服务</span>
      </NavBar>
      <img src={aptitudeSrc} alt="aptitude.png" className="w-full" />
      <WhiteSpace size="lg" />
      <Flex direction="column">
        <h3 className="text-16 font-bold">全国范围免费找资质/公司</h3>
        <div className="flex justify-around mt-2">
          <input type="radio" name="value" className="mr-1" /> 找公司
          <input type="radio" name="value" className="mx-1" /> 找带资质的公司
        </div>
      </Flex>
      <WhiteSpace size="lg" />
      <div className="flex items-center justify-center my-2 px-4">
        <input
          type="text"
          placeholder="填写您的电话号，我们立即联系您!"
          className="h-5 flex-1 bg-gray-300 pl-1"
        />
        <Button
          type="primary"
          style={{ fontSize: 14, paddingLeft: 8, paddingRight: 8 }}
        >
          立即查找
        </Button>
      </div>
      <WhiteSpace size="lg" />
      <Flex justify="center">
        60分钟&nbsp;187****4766&nbsp;发布了北京****金融有限公司
      </Flex>
      <WhiteSpace size="lg" />
      <Flex justify="center" direction="column">
        <Flex.Item className="font-bold">特价资讯</Flex.Item>
        <Flex.Item className="text-gray-500 mt-1">
          全国海量资源，任你挑选
        </Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
      {Array(3)
        .fill(1)
        .map(() => (
          <AptitudeCard />
        ))}

      <div className="flex flex-col mt-3 w-full justify-center items-center">
        <p className="font-bold mb-1">转让咨询</p>
        <p className="font-bold mb-1">高效快速6步轻松搞定</p>
        <p className="text-gray-500 mb-2">通过率高，速度快</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <img src={transferStepSrc} alt="transferStepSrc.png" />
        <div className="flex justify-around">
          {transferSteps.map((title) => (
            <div
              key={title}
              className="text-gray-500 mt-1"
              style={{ fontSize: 10, marginRight: 4 }}
            >
              {title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-3 w-full justify-center items-center">
        <p className="font-bold mb-1">服务保障</p>
        <p className="text-gray-500 mb-2">重要的事情，交给我们就是放心</p>
      </div>

      <div className="flex flex-col w-full justify-center items-center px-1">
        <div className="flex flex-around px-2">
          {serverTitleSteps.map((title) => (
            <div
              className="rounded-full border-4 border-blue-500 w-6 h-6 m-1 flex flex-around items-center justify-center"
              style={{ fontSize:12 }}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="flex flex-around">
          {serverDesSteps.map(({ des1, des2 }) => (
            <DescriptionCell des1={des1} des2={des2} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center my-2">
        <div
          className="bg-gray-200 flex p-1 items-center"
          style={{ height: 30 }}
        >
          财富热线：17381565284
        </div>
        <Button size="small" type="primary">
          立即咨询
        </Button>
      </div>
    </div>
  );
};

export default Aptitude;
