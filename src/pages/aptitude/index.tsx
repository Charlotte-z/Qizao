import { Button, Flex, Icon, NavBar, WhiteSpace } from 'antd-mobile';
import React from 'react';
import aptitudeSrc from '../../assets/images/aptitude.png';
import transferStepSrc from '../../assets/images/transferSteps.png';
import PhoneBar from '../../components/PhoneBar';
import useQueryAxios from '../../hooks/useQueryAxios';
import { AptitudeDetail } from '../../types';
import AptitudeCard, { advisoryURL } from './AptitudeCard';
import { serverDesSteps, serverTitleSteps, transferSteps } from './config';
import DescriptionCell from './DescriptionCell';

interface AptitudeList {
  status: number;
  message: string;
  data: {
    data: AptitudeDetail[];
  };
}

const Aptitude: React.FC = () => {
  const { data: res } = useQueryAxios<{ limit: number }, AptitudeList>(
    'getAptitudeList',
    {
      limit: 10,
    },
  );

  const aptitudes = res?.data?.data || [];
  console.log("res:",res)

  return (
    <div className="overflow-x-hidden">
      <NavBar
        style={{ backgroundColor: '#4868DC' }}
        className="fixed w-full z-20"
        mode="light"
        icon={<Icon type="left" color="#fff" />}
        onLeftClick={() => console.log('onLeftClick')}
        height="40px"
      >
        <span style={{ color: '#fff' }}>资质服务</span>
      </NavBar>
      <div style={{ marginTop: '40px' }}>
        <img src={aptitudeSrc} alt="aptitude.png" className="w-full" />
        <PhoneBar companyKey="Aptitude" />
        <Flex justify="center" direction="column">
          <Flex.Item className="mt-2" style={{ fontSize: 18 }}>
            特价资讯
          </Flex.Item>
          <Flex.Item className="text-gray-500 mt-1">
            全国海量资源，任你挑选
          </Flex.Item>
        </Flex>
        <WhiteSpace size="lg" />
        {aptitudes?.map((item: AptitudeDetail, index: number) => (
          <AptitudeCard key={index} aptitude={item} />
        ))}
      </div>

      <div className="flex flex-col mt-3 w-full justify-center items-center">
        <p className="mb-1" style={{ fontSize: 18 }}>
          转让咨询
        </p>
        <p className="mb-1" style={{ fontSize: 18 }}>
          高效快速6步轻松搞定
        </p>
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

      <div className="flex flex-col w-full justify-center items-center px-1">
        <div className="flex flex-col mt-3 w-full justify-center items-center">
          <p className="mb-1" style={{ fontSize: 18 }}>
            服务保障
          </p>
          <p className="text-gray-500 mb-2">重要的事情，交给我们就是放心</p>
        </div>

        <div className="flex flex-col w-full justify-center items-center px-1">
          <div className="flex flex-around px-2">
            {serverTitleSteps.map((title, index) => (
              <div
                key={index}
                className="rounded-full border-2 border-blue-500 w-6 h-6 m-1 flex flex-around items-center justify-center"
                style={{ fontSize: 12 }}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="flex flex-around">
            {serverDesSteps.map(({ des1, des2 }) => (
              <DescriptionCell key={des2} des1={des1} des2={des2} />
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
            <a href={advisoryURL}>立即咨询</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Aptitude;
