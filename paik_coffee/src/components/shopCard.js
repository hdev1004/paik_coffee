import styles from "./css/shopCard.module.css";

const ShopCard = ({item, setIsModalOpen}) => {
    const onClick = (title) => {
    }

    return (
        <div className={styles.card_container} onClick={() => {
            onClick(item.title);
            setIsModalOpen({
                trigger: true,
                item: item
            });
        }}>
            <div className={styles.card_title}>
                {item.title}
            </div>

            <div className={styles.card_distance}>
                {item.distance}
            </div>
        </div>
    )
}

export default ShopCard;