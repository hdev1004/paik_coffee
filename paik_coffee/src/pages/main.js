import { useNavigate } from "react-router-dom";
import Cafe1 from "../assets/cafe1.jpg";
import Cafe2 from "../assets/cafe2.jpg";
import Cafe3 from "../assets/cafe3.jpg";
import Cafe4 from "../assets/cafe4.jpg";
import Cafe5 from "../assets/cafe5.jpg";
import Change from "../assets/change.png";
import Coupon from "../assets/coupon.png";
import Money from "../assets/money.png";
import Stamp from "../assets/stamp.png";
import styles from "./css/main.module.css";
import { Carousel, Progress } from 'antd';

const Main = () => {
    const navigate = useNavigate();
    
    const PickupOrderClick = () => {
        navigate("/pickup")
    }
      
    return (
        <div className={styles.main_contanier}>
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

            <div className={styles.box_container}>
                <div className={styles.stamp}>
                    <div className={styles.nickname}>
                        <b>솜사탕알사탕</b> 님
                    </div>
                    <div className={styles.stamp_container}>
                        <div className={styles.stamp_cnt}>
                            스탬프 0/10개
                            <Progress percent={0} showInfo={false} />
                        </div>

                        <div className={styles.stamp_menu}>
                            <div>
                                <img src={Stamp}></img>
                                <div>스탬프</div>
                            </div>
                            <div>
                                <img src={Coupon}></img>
                                <div>마이쿠폰</div>
                            </div>
                            <div>
                                <img src={Change}></img>
                                <div>교환권</div>
                            </div>
                            <div>
                                <img src={Money}></img>
                                <div>금액권</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.menu_box}>
                    <div>
                        기프트샵
                    </div>
                    <div onClick={PickupOrderClick}>
                        픽업오더
                    </div>
                    <div>
                        이벤트
                    </div>
                    <div>
                        배달오더
                    </div>
                    
                </div>

                <div className={styles.notice}>
                    <div className={styles.notice_title}>
                        소식
                    </div>

                    <div>
                        [빽다방] 무료쿠폰 증정!!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;