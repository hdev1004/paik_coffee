import { useState } from "react";
import styles from "./css/pickup.module.css";
import Pickup_Order from "./pickup_order";
import { useNavigate } from "react-router-dom";
import OrderList from "./order_list";

const Pickup = () => {
    let [btnState, setBtnState] = useState(1);
    let navigate = useNavigate();


    return (
        <div>
            <div className={styles.title}>
                <div className={styles.title_before} onClick={() => {
                    navigate("/");
                }}>
                    {"<"}
                </div>
                <div className={styles.title_name}>
                    픽업오더
                </div>

                <div className={styles.title_info}>
                    !
                </div>
            </div>

            <div className={styles.order}>
                <div onClick={() => {setBtnState(1)}} className={btnState === 1 ? styles.order_active : styles.order_inactive}>
                    주문하기
                </div>
                <div onClick={() => {setBtnState(2)}}  className={btnState === 2 ? styles.order_active : styles.order_inactive}>
                    주문내역조회
                </div>

            </div>
            
            <div className={btnState === 1 ? styles.active_bar_left : styles.active_bar_right}>
            </div>

            <div style={{marginBottom: "1px"}}></div>

            {
                btnState === 1 ? (
                    <Pickup_Order/>
                ) : (
                    <OrderList/>
                )
            }

            
        </div>
    )
}

export default Pickup;