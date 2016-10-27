import React from 'react';
import { Carousel } from 'antd';
import banner from './banner.jpg';
import styles from './Banner.less';

export function Banner () {
    return (
        <Carousel className={styles.carousel} autoplay effect="fade">
            <div><img src={banner} /><p>1</p></div>
            <div><img src={banner} /><p>3</p></div>
            <div><img src={banner} /><p>4</p></div>
            <div><img src={banner} /><p>5</p></div>
        </Carousel>
    )
}
