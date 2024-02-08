import { useLocation, useNavigate } from "react-router-dom";
import styles from "./css/order_item.module.css";
import { Checkbox } from "antd";
import CoffeeImage from "../../assets/coffee.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addCoffee } from '../../reducers/actions/coffeeAction';

const OrderItem = () => {
    const coffee = useSelector((state) => state.coffee);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();
    const item = {
        ...location.state.item
    }
    const [coffeeOption, setCoffeeOption] = useState({
        cnt: 1,
        option: false,
        cup: "one",
        shot: 0,
        item: item
    })

    const addBackPack = () => {
        alert("장바구니에 담겼습니다."); 
        dispatch(addCoffee(coffeeOption));
        console.log(coffee); 
        navigate("/pickup/order")
    }

    return (
        <div className={styles.order_container}>
            <div className={styles.title}>
                <div className={styles.title_before} onClick={() => {
                    navigate("/pickup/order");
                }}>
                    {"<"}
                </div>
                <div className={styles.title_name}>
                    픽업오더
                </div>

            </div>
            <div className={styles.order_top}>

                <div className={styles.order_image_container}>
                    <div className={styles.order_iamge}>
                        <img src={CoffeeImage}></img>
                    </div>
                    <div className={styles.order_title}>{item.title}</div>
                    <div className={styles.order_price}>
                        <div>가격</div>
                        <div>{parseInt(item.price).toLocaleString()}원</div>
                    </div>
                </div>

                <div className={styles.order_cup}>
                    <div className={styles.order_cup_title}>컵 선택</div>
                    <div className={styles.order_cup_select}>
                        <div className={coffeeOption.cup === "one" ? styles.order_cup_active : styles.order_cup_inactive} onClick={() => {
                            setCoffeeOption({
                                ...coffeeOption,
                                cup: "one"
                            })
                        }}>일회용</div>
                        <div className={coffeeOption.cup === "shop" ? styles.order_cup_active : styles.order_cup_inactive} onClick={() => {
                             setCoffeeOption({
                                ...coffeeOption,
                                cup: "shop"
                            })
                        }}>매장용</div>
                    </div>
                </div>

                <div className={styles.order_option}>
                    <div className={styles.order_option_title} onChange={() => {
                        setCoffeeOption({
                            ...coffeeOption,
                            option: !coffeeOption.option
                        })
                    }}>선택옵션</div>
                    <div className={styles.order_option_container}>
                        <Checkbox></Checkbox>
                        <div className={styles.order_option_text}>연하게</div>
                        <div className={styles.order_option_price}>0원</div>
                    </div>
                </div>

                <div className={styles.shot_add_container}>
                    <div className={styles.show_add_title}>샷추가 (0~4개 선택)</div>
                    <div className={styles.shot_add_option}>
                        <div>샷추가</div>
                        <div className={styles.show_plus_minuse}>
                            <div className={styles.shot_add_text}>500원</div>
                            <div onClick={() => {
                                if(coffeeOption.shot <= 0) return; 
                                setCoffeeOption({
                                    ...coffeeOption,
                                    shot: coffeeOption.shot - 1
                                })
                            }}>-</div>
                            <div>{coffeeOption.shot}</div>
                            <div onClick={() => {
                                if(coffeeOption.shot >= 4) {
                                    alert("4개 이상 선택할 수 없습니다");
                                    return;
                                }
                                setCoffeeOption({
                                    ...coffeeOption,
                                    shot: coffeeOption.shot + 1
                                })
                            }}>+</div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.order_cnt_container}>
                    <div className={styles.order_cnt_title}>수량</div>
                    <div className={styles.order_cnt_plus_minus}>
                        <div onClick={() => {
                                if(coffeeOption.cnt <= 1) return; 
                                setCoffeeOption({
                                    ...coffeeOption,
                                    cnt: coffeeOption.cnt - 1
                                })
                            }}>-</div>
                        <div>{coffeeOption.cnt}</div>
                        <div onClick={() => {
                                setCoffeeOption({
                                    ...coffeeOption,
                                    cnt: coffeeOption.cnt + 1
                                })
                            }}>+</div>
                    </div>
                </div>
            </div>
            
            
            <div className={styles.backpack_container}>
                <div className={styles.backpack_box} onClick={() => {addBackPack(); }}>
                    <div>장바구니 담기({coffeeOption.cnt}개)</div>
                    <div>{(parseInt(item.price) * coffeeOption.cnt + (coffeeOption.cnt * coffeeOption.shot * 500)).toLocaleString()}원</div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;