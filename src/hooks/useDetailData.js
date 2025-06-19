import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailData = () => {
    // 할인 모달 state
    const [modal, setModal] = useState(true);

    // countDown state
    const [countDown, setCountDown] = useState(5);

    // 훅으로 url 파라미터 가져오기
    const { id } = useParams();

    // modal 5초 뒤에 없애는 함수
    const removeModal = () => {
        setTimeout(() => {
            setModal(false);
        }, 5000);
    };

    // 5초 카운트 하는 함수
    const fiveCountDown = () => {
        setInterval(() => {
            setCountDown((prev) => {
                if (prev <= 1) {
                    clearInterval(fiveCountDown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // 페이지 마운트 시 한번
    useEffect(() => {
        removeModal();
        fiveCountDown();

        return () => {
            clearTimeout(removeModal);
            clearInterval(fiveCountDown);
        };
    }, []);

    // user클릭시 알림 함수
    const userEvent = () => {
        clearTimeout(removeModal);
        alert("축하드립니다! 할인 쿠폰 드립니다!");
        setModal(false);
    };

    return {
        modal, countDown, id, userEvent
    };
}
