import { useEffect, useState } from "react";
import styles from "./css/order_list.module.css";
import axios from "axios";

const OrderList = () => {
    const [select, setSelect] = useState(0);
    let [bill, setBill] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let data = await axios.get(process.env.REACT_APP_DEV_PATH + `/coffee/bill/jinwon`);
        setBill(data.data);
    }

    let tempId = "";
    return (
        <div className={styles.order_container}>
            <div className={styles.order_month}>
                <div className={styles.order_month_container}>
                    <div className={select === 0 ? styles.order_active_0 : select === 1 ? styles.order_active_1 : styles.order_active_2}></div>
                    <div className={select === 0 ? styles.order_active_text : ""} onClick={() => {setSelect(0)}}>1개월</div>
                    <div className={select === 1 ? styles.order_active_text : ""} onClick={() => {setSelect(1)}}>6개월</div>
                    <div className={select === 2 ? styles.order_active_text : ""} onClick={() => {setSelect(2)}}>12개월</div>
                </div>

            </div>
            <div className={styles.order_list}>
                {
                    bill.map((item) => (
                        <> {
                            tempId !== item.order_id ? (
                                <>
                                    <div style={{display: "none"}}>{tempId = item.order_id}</div>
                                    <div style={{marginBottom: "10px"}}>

                                    </div>
                                </>
                                
                             ) : (
                              <></>  
                             )
                        }
                        <div className={styles.bill_container}>
                            <div className={styles.pay_row_total}>
                                <div>{item.order_title}</div>
                                <div>{item.total_price}</div>
                            </div>

                            <div>
                                <div className={styles.pay_row}>
                                    <div>└ 가격</div>
                                    <div>{item.order_cnt}</div>
                                    <div>{item.order_cnt * item.coffee_price}</div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.pay_row}>
                                    <div>└ 샷 추가</div>
                                    <div>{item.shot_cnt}</div>
                                    <div>{item.shot_cnt * 500}</div>
                                </div>
                            </div>
                        </div>
                        
                       
                        </>
                    ))
                }

            </div>
        </div>
    )
}

export default OrderList;