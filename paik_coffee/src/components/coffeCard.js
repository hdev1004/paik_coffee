import { useNavigate } from "react-router-dom";
import styles from "./css/coffeCard.module.css";

const CoffeeCard = ({item}) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/pickup/order/item", {
            state: {
                item: item
            }
        })
    }

    return (
    <div className={styles.card_container} onClick={() => {onClick()}}>
        <div>
            <div className={styles.card_title}>
                {item.title}
            </div>
            <div className={styles.card_price}>
                {parseInt(item.price).toLocaleString()}원
            </div>
        </div>
        
        <div className={styles.card_image}>
            image
        </div>
    </div>
    )
}

export default CoffeeCard;