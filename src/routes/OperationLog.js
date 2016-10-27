import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './OperationLog.less';

function OperationLog() {
  return (
    <div className={styles.normal}>
      <h1>Welcome to dva!</h1>
      <hr />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/sorrycc/blog/issues/8" target="_blank">Getting Started</a></li>
      </ul>
    </div>
  );
}

OperationLog.propTypes = {
};

export default connect()(OperationLog);
