'use strict';

const qs = require('qs');
const mockjs = require('mockjs');

let campaignList = [];
if (!global.campaignList) {
    const data = mockjs.mock({
        'data|15': [{
            'id|+1': 100000,
            name: '@cname',
            'businessType|0-4': 1,
            'dayBudgetResult|0-500': 1,
            'dayBudgetStr|0-500': 1,
            'putType|0-4': 1,
            'spreadType|0-4': 1,
            'startTime|1477457600000-1477497600000': 1,
            'endTime|1477457600000-1477497600000': 1,
            'status|0-4': 1
        }]
    });
    campaignList = data.data;
    global.campaignList = campaignList;
} else {
    campaignList = global.campaignList;
}

let autoCampaignList = {}
if (!global.autoCampaignList) {
    const data = mockjs.mock({
        'data|1-2': {
          '100000-100002': {
            'cancel_status|0-1': 1,
            'cpc_max|0-9.1': 1,
            'settings_type|1': ['auto', 'hot']
          }
        }
    });
    autoCampaignList = data.data;
    global.autoCampaignList = autoCampaignList;
} else {
    autoCampaignList = global.autoCampaignList;
}

module.exports = {

  'GET /ajax_get_campaigns' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: campaignList
      });
    }, 500);
  },
  'GET /ajax_get_automatic_campaigns' (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: autoCampaignList
      });
    }, 500);
  },

  'POST /api/users' (req, res) {
    setTimeout(function () {
      const newData = qs.parse(req.body);

      newData.id = tableListData.data.length + 1;
      tableListData.data.unshift(newData);

      tableListData.page.total = tableListData.data.length;
      tableListData.page.current = 1;

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page
      });
    }, 500);
  },

  'DELETE /api/users' (req, res) {
    setTimeout(function () {
      const deleteItem = qs.parse(req.body);

      tableListData.data = tableListData.data.filter(function (item) {
        if (item.id == deleteItem.id) {
          return false;
        }
        return true;
      });

      tableListData.page.total = tableListData.data.length;

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page
      });
    }, 500);
  },

  'PUT /api/users' (req, res) {
    setTimeout(function () {
      const editItem = qs.parse(req.body);

      tableListData.data = tableListData.data.map(function (item) {
        if (item.id == editItem.id) {
          return editItem;
        }
        return item;
      });

      global.tableListData = tableListData;
      res.json({
        success: true,
        data: tableListData.data,
        page: tableListData.page
      });
    }, 500);
  }

};
