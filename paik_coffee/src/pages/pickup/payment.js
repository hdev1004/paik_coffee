import { useNavigate } from "react-router-dom";
import styles from "./css/payment.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { addCoffee, clearCoffee } from '../../reducers/actions/coffeeAction';
import { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
    const navigate = useNavigate();
    const coffee = useSelector((state) => state.coffee);
    let [cnt, setCnt] = useState(0);
    let [price, setPrice] = useState(0);
    let dispatch = useDispatch();

    useEffect(() => {
        let sumCnt = 0;
        let sumPrice = 0;
        for(let i = 0; i < coffee.length; i ++) {
            sumCnt += coffee[i].cnt;
            sumPrice += coffee[i].item.price * coffee[i].cnt + coffee[i].shot * 500
        }
        setCnt(sumCnt);
        setPrice(sumPrice)
    }, []);

    const pay = async() => {
        if(!window.confirm("결제하시겠습니까?")) return;
        let order_id = Math.random().toString(36).substring(2, 11);

        try {
            for(let i = 0; i < coffee.length; i ++) {
                await axios.post(process.env.REACT_APP_DEV_PATH + "/coffee/bill", {
                    user_id: "jinwon",
                    order_id: order_id,
                    order_title: coffee[i].item.title,
                    order_cnt: coffee[i].cnt,
                    total_price: coffee[i].item.price * coffee[i].cnt + coffee[i].shot * 500,
                    coffee_price: coffee[i].item.price,
                    shot_cnt: coffee[i].shot
                })
            }
            alert("결제가 완료되었습니다.");
            navigate("/");
            dispatch(clearCoffee());

        } catch(err) {
            console.log(err);
            alert("결제 도중 오류가 생겼습니다.");
        }
       
    }
    return (
        <div className={styles.shop_container}>
            <div className={styles.title}>
                <div className={styles.title_before} onClick={() => {
                    navigate("/pickup/order")
                }}>
                    {"<"}
                </div>
                <div className={styles.title_name}>
                    픽업오더
                </div>
            </div>

            <div>
                {
                    coffee?.map((item) => (
                        <div className={styles.bill_container}>
                            <div className={styles.pay_row_total}>
                                <div>{item.item.title}</div>
                                <div>{item.item.price * item.cnt + item.shot * 500}</div>
                            </div>

                            <div>
                                <div className={styles.pay_row}>
                                    <div>└ 가격</div>
                                    <div>{item.cnt}</div>
                                    <div>{item.item.price * item.cnt}</div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.pay_row}>
                                    <div>└ 샷 추가</div>
                                    <div>{item.shot}</div>
                                    <div>{item.shot * 500}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className={styles.backpack_container}>
                    <div className={styles.backpack_box} onClick={() => { pay(); }}>
                        <div>결제하기</div>
                        <div>{price}원</div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Payment;