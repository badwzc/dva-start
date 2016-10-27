import React, {Component} from 'react';
import styles from './MainLayout.less';

import Header from './Header';
import { BackTop } from 'antd';

function MainLayout({children, locatio}) {
    return (
        <div>
            <Header location={location}/>
            <div className={styles.container}>
                {children}
            </div>
            <BackTop style={{ bottom: 100 }}>
                <div>UP</div>
            </BackTop>
        </div>
    )
}
export default MainLayout;