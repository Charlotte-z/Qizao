/*
 * @Author: your name
 * @Date: 2021-08-28 18:34:02
 * @LastEditTime: 2021-08-28 19:14:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qizao/src/types/index.ts
 */
export type AdminUser = {
  id: string;
  username: string;
  name: string;
  avatar: string;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
  txQQ: string;
  weChat_img: string;
};

export type Limit = {
  limit: number;
};

export type RequestUrl =
  | 'getRecommend'
  | 'getMediaList'
  | 'getInfo'
  | 'getCompanyChoiceness'
  | 'getCompanyQuality'
  | 'getAptitudeList';


  export interface AptitudeDetail {
    goods_uuid: string;
    goods_name: string;
    goods_price: number | string;
    aptitude_registered_capital: number | string;
    aptitude_clearance: string;
    aptitude_establish_date: Date | string;
    admin_users:AdminUser
  }