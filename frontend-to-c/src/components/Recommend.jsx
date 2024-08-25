import React, {useState, useEffect} from 'react';
import {Card, Carousel, Image} from 'antd';
import {getMonthlyServer} from '../api/recommend'

import RecommendItem from "./RecommendItem";

import styles from "../css/Recommend.module.css"

function Recommend(props) {
    const [monthlyList, setMonthlyList] = useState([]);

    useEffect(() => {
        async function getMonthly() {
            const data = await getMonthlyServer()
            setMonthlyList(data.rows)
            console.log(monthlyList)
        }
        getMonthly()
    }, []);

    let recommendList = null
    if (monthlyList.length > 0) {
        recommendList = monthlyList.map((item, index) => {
            return (
                <RecommendItem recommendInfo={{
                    num: index+1,
                    title: item.title,
                    href: `https://segmentfault.com/${item.url}`
                }}/>
            )
        })
    }

    return (
        <Card title="推荐内容">
            <div style={{marginBottom: 20}}>
                <Carousel autoplay>
                    <div>
                        <a style={{
                            background: 'url(https://image-static.segmentfault.com/583/489/583489293-62e22caab8392) center/cover no-repeat',
                        }} className={styles.contentStyle}
                           href="https://segmentfault.com/a/1190000042203704?utm_source=sf-homepage-headline"
                           target="_blank" rel="noreferrer">
                        </a>
                    </div>
                    <div>
                        <a style={{
                            background: 'url(https://image-static.segmentfault.com/248/470/2484709773-635632347923b) center/cover no-repeat',
                        }} className={styles.contentStyle}
                           href="https://chinaevent.microsoft.com/Events/details/0decfcda-1959-4098-891d-690825a58f9e/?channel_id%3d50%26channel_name%3dPaid-SF"
                           target="_blank" rel="noreferrer"></a>
                    </div>
                    <div>
                        <a style={{
                            background: 'url(https://image-static.segmentfault.com/364/971/3649718341-6355fab16df40) center/cover no-repeat',
                        }} className={styles.contentStyle}
                           href="https://segmentfault.com/a/1190000042666738?utm_source=sf-homepage-headline"
                           target="_blank" rel="noreferrer"></a>
                    </div>
                    <div>
                        <a style={{
                            background: 'url(https://image-static.segmentfault.com/422/352/422352298-6355600c6676b) center/cover no-repeat',
                        }} className={styles.contentStyle}
                           href="https://segmentfault.com/reco/1640000042672710?utm_source=sf-homepage-headline"
                           target="_blank" rel="noreferrer"></a>
                    </div>
                </Carousel>
            </div>
            {recommendList}
        </Card>
    );
}

export default Recommend;