import pathToRegexp from 'path-to-regexp';
import React, {PropTypes} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function getMenuKeyFromUrl(pathname) {
    let key = '';
    try {
        key = pathname.match(/\/([^\/]*)/i)[1];
        /* eslint no-empty:0 */
    } catch (e) {}
    return key;
}

function Header({location}) {
    return (
        <Menu
            selectedKeys={[getMenuKeyFromUrl(location.pathname)]}
            mode="horizontal"
        >
            <Menu.Item key="index">
                <Link to="/">
                    首页
                </Link>
            </Menu.Item>
            <Menu.Item key="operation_log">
                <Link to="/operation_log">
                    优化记录
                </Link>
            </Menu.Item>
            <Menu.Item key="qq">
                <a href="http://wpa.qq.com/msgrd?v=3&uin=2885579324&site=qq&menu=yes" target="_blank" rel="noopener noreferrer">联系客服</a>
            </Menu.Item>
        </Menu>
    )
}
Header.propTypes = {
    location: PropTypes.object,
};
Header.initState = {
    current: 'index'
}
export default Header;
