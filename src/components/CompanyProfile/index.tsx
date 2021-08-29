import { Flex } from 'antd-mobile';
import React from 'react';
import ListItem from '../List/LIstItem';
import icon40 from '../../assets/images/保障@2x.png';
import icon41 from '../../assets/images/免费 (1)@2x.png';
import icon42 from '../../assets/images/专业 专业课@2x.png';
import icon43 from '../../assets/images/流转查询@2x.png';
import icon44 from '../../assets/images/电话 (1)@2x.png';
import './index.css';
import useQueryAxios from '../../hooks/useQueryAxios';

type CmpanyInfoType = 'webInfo' | 'companyInfo' | 'weChatImg';
type CmpanyInfo = {
  data: {
    id: number;
    name: string;
    description: string;
    phone: string;
    qq: string;
    email: string;
  };
};

interface Props {
  className?: string;
}
const CompanyProfile: React.FC<Props> = ({ className }) => {
  const { data } = useQueryAxios<{ type: CmpanyInfoType }, CmpanyInfo>(
    'getInfo',
    { type: 'webInfo' },
  );

  return (
    <div className={className}>
      <Flex wrap="wrap" className="mt-4">
        <Flex justify="between">
          <ListItem
            left={<img src={icon40} width="30px" height="30px" />}
            content="2000+专业咨询师"
            style={{ width: '200px' }}
          />
          <ListItem
            left={<img src={icon41} width="30px" height="30px" />}
            content="34省免费找公司"
            style={{ width: '200px' }}
          />
        </Flex>
        <Flex justify="between">
          <ListItem
            left={<img src={icon42} width="30px" height="30px" />}
            content="3大服务保障"
            style={{ width: '200px' }}
          />
          <ListItem
            left={<img src={icon43} width="30px" height="30px" />}
            content="1547家公司完成流转"
            style={{ width: '200px' }}
          />
        </Flex>
      </Flex>
      {console.log(data?.data.phone)}
      <Flex style={{ color: '#4B82DF' }} justify="between" className="mt-4">
        <ListItem
          left={<img src={icon44} width="28PX" height="28px" />}
          content={data?.data.phone || '02884325628'}
          className="tel-tag "
        />
        <ListItem
          left={<img src={icon44} width="28PX" height="28px" />}
          content="173-8156-5284"
          className="tel-tag "
        />
      </Flex>
      <a
        className="block text-center my-4"
        href="https://beian.miit.gov.cn/#/Integrated/index"
      >
        <div className="desc">Copyright©2020-2021 企枣网版权所有</div>
        <div className="desc py-2">蜀ICP备2020036560号</div>
        <div className="desc">川公安备51010602001292号</div>
      </a>
    </div>
  );
};

export default CompanyProfile;
