import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
  return request('/ajax_get_campaigns');
}