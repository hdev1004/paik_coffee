import { useNavigate } from "react-router-dom";
import styles from "./css/order.module.css";
import CoffeeCard from "../../components/coffeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Order = () => {
    const navigate = useNavigate();
    let [coffee, setCoffee] = useState([]);
    let [juice, setJuice] = useState([]);
    let [cnt, setCnt] = useState(0);
    let [price, setPrice] = useState(0);
    const coffeeBackPack = useSelector((state) => state.coffee);
    
    const getCoffeeGroup = async(id, setState) => {
        let res = await axios.get(process.env.REACT_APP_DEV_PATH + `/coffee/all/${id}`);
        setState(res.data);
    }


    useEffect(() => {
        getCoffeeGroup(1, setCoffee);
        getCoffeeGroup(2, setJuice);
        
        let sumCnt = 0;
        let sumPrice = 0;
        for(let i = 0; i < coffeeBackPack.length; i ++) {
            sumCnt += coffeeBackPack[i].cnt;
            sumPrice += coffeeBackPack[i].item.price * coffeeBackPack[i].cnt + coffeeBackPack[i].shot * 500
        }
        setCnt(sumCnt);
        setPrice(sumPrice)
    }, [])

    const payment = () => {
        navigate("/pickup/payment");
    }

    return (
        <div className={styles.shop_container}>
             <div className={styles.title}>
                <div className={styles.title_before} onClick={() => {
                    navigate("/pickup");
                }}>
                    {"<"}
                </div>
                <div className={styles.title_name}>
                    픽업오더
                </div>

            </div>

            <div className={styles.shop_title}>
                빽다방 (영등포신세계점)
            </div>



            <div className={styles.coffee_card_container}>
                
                <div className={styles.coffee_card_title}>
                    커피
                </div>
                <>
                {
                    coffee?.map((item) => (
                        <CoffeeCard item={item}/>
                    ))
                }
                </>
                <div className={styles.coffee_card_title}>
                    쥬스
                </div>
                <>
                {
                    juice?.map((item) => (
                        <CoffeeCard item={item}/>
                    ))
                }
                </>

            
            </div>
            
            {
                coffeeBackPack.length === 0 ? (
                    <></>
                ) : (
                    <div className={styles.backpack_container} onClick={() => {payment()}}>
                        <div className={styles.backpack_box}>
                            <div>주문하기({cnt}개)</div>
                            <div>{price}원</div>
                        </div>
                    </div>
                )
            }
           
        </div>
    )
}

export default Order;