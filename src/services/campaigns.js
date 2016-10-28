import {request, promise} from '../utils/request';
import qs from 'qs';

export async function query(params) {
  return request('/ajax_get_campaigns');
}
export async function queryAuto(params) {
  return request('/ajax_get_automatic_campaigns');
}
export async function queryCampaign(params) {
  return promise(['/ajax_get_campaigns', '/ajax_get_automatic_campaigns']);
}