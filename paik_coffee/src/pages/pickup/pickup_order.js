
import { Carousel } from "antd";
import styles from "./css/pickup.module.css";
import Cafe1 from "../../assets/cafe1.jpg";
import Cafe2 from "../../assets/cafe2.jpg";
import Cafe3 from "../../assets/cafe3.jpg";
import Cafe4 from "../../assets/cafe4.jpg";
import Cafe5 from "../../assets/cafe5.jpg";
import Shop_Card from "../../components/shopCard";
import { useState } from "react";
import PickupModal from "./pickup_modal";

const Pickup_Order = () => {

    let [cardItem, setCardItem] = useState([
        {
            title: "영등포신세계점",
            shopId: "abcd1",
            distance: "0.8km"
        },
        {
            title: "영등포구청역점",
            shopId: "abcd2",
            distance: "1.2km"
        },
        {
            title: "영등포시장역점",
            shopId: "abcd3",
            distance: "1.3km"
        },
        {
            title: "한강성심병원점",
            shopId: "abcd4",
            distance: "1.4km"
        },
        {
            title: "신도림큐브스테이트점",
            shopId: "abcd5",
            distance: "1.5km"
        }
    ])

    let [isModalOpen, setIsModalOpen] = useState({
        trigger: false,
        item: undefined
    });

    return (
        <div>
            <Carousel autoplay>
                <img className={styles.image} src={Cafe1}>
                </img>

                <img className={styles.image} src={Cafe2}>
                </img>

                <img className={styles.image} src={Cafe3}>
                </img>

                <img className={styles.image} src={Cafe4}>
                </img>

                <img className={styles.image} src={Cafe5}>
                </img>
            </Carousel>

            <div className={styles.footer_container}>
                <div className={styles.select_shop}>
                    주문 매장을 선택해 주세요!
                </div>

                <div className={styles.fre_shop}>
                    솜사탕알사탕님의 자주 가는 매장
                </div>

                <div className={styles.search_shop}>
                    조회 내역이 없습니다.
                </div>

                <div className={styles.show_shop}>
                    솜사탕알사탕님과 가까운 매장
                </div>

                <div className={styles.show_list}>
                    <div>
                        {
                            cardItem.map((item) => (
                                <Shop_Card item={item} setIsModalOpen={setIsModalOpen}/>
                            ))
                        }
                    </div>
                </div>
                <PickupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>

            </div>
        </div>
    )
}

export default Pickup_Order;