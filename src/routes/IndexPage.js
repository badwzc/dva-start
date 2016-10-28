import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import {Banner} from '../components/index/Banner'
import CampaignList from '../components/index/CampaignList'
// import G2 from 'g2'
function IndexPage({history, dispatch, campaigns}) {
    const {
        loading, list, autoCampaigns, auto_count, hout_count
    } = campaigns

    const campaignList = {
        loading,
        dataSource: list
    };
    return (
        <div className={styles.normal}>
            <div className={styles.banner}>
                <h2>公告信息</h2>
                <Banner />
            </div>
            <div className={styles.gragh} id="gragh">
            </div>
            <CampaignList {...campaignList} />

        </div>
    );
}

IndexPage.propTypes = {
};

function mapStateToProps({ campaigns }) {
  return {campaigns};
}

// 建立数据关联关系
export default connect(mapStateToProps)(IndexPage);
