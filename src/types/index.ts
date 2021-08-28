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

export type RequestUrl = 'getRecommend' | 'getMediaList';
