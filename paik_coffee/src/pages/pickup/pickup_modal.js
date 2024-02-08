import { useNavigate } from "react-router-dom";
import styles from "./css/pickup_modal.module.css";

const PickupModal = ({isModalOpen, setIsModalOpen}) => {
    const navigate = useNavigate();

    return (
        isModalOpen.trigger === false || isModalOpen.item === undefined ? (
            <></>
        ) : (
            <div className={styles.modal_container}>

                <div className={styles.modal_form}>
                    <div className={styles.modal_title}>
                        <div className={styles.modal_title_text}>{isModalOpen.item.title}</div>
                        <div className={styles.modal_title_close} onClick={() => {
                            setIsModalOpen({
                                trigger: false,
                                item: {}
                            })
                        }}>×</div>
                    </div>
                    <div className={styles.modal_image}>
                        이미지
                    </div>

                    <div className={styles.modal_address}>
                        <div>
                            주소
                        </div>
                        <div>
                            서울 영등포구 영중로 5(영등포동 4가)1층
                        </div>
                    </div>

                    
                    <div className={styles.modal_map}>
                        지도
                    </div>

                    <div className={styles.modal_footer}>
                        <div onClick={() => {
                             setIsModalOpen({
                                trigger: false,
                                item: {}
                            })
                        }}>닫기</div>
                        <div onClick={() => {
                            navigate("/pickup/order")
                        }}>주문하기</div>
                    </div>
                </div>
            </div>
        )

        
    )
}

export default PickupModal;