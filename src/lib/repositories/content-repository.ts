import type { Content } from '../../types';

export interface ContentRepository {
  getHomeContent(): Promise<Content['home']>;
  getAboutContent(): Promise<Content['about']>;
  getContactContent(): Promise<Content['contact']>;
  getShopContent(): Promise<Content['shop']>;
  getAllContent(): Promise<Content>;
}