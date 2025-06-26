import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export const useDetailHandler = () => {
    const [modal, setModal] = useState(true);
    const [countDown, setCountDown] = useState(5);
    const { id } = useParams();

    // 타이머 ID 저장용 ref
    const timeoutRef = useRef(null);
    const intervalRef = useRef(null);

    // 5초 뒤 modal 사라지게 할 함수
    const removeModal = () => {
        timeoutRef.current = window.setTimeout(() => {
            setModal(false);
        }, 5000);
    };


    // 5초 카운트 함수
    const fiveCountDown = () => {
        intervalRef.current = window.setInterval(() => {
            setCountDown((prev) => {
                if (prev <= 1) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        removeModal();
        fiveCountDown();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const userEvent = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
        alert("축하드립니다! 할인 쿠폰 드립니다!");
        setModal(false);
    };

    return {
        modal,
        countDown,
        id,
        userEvent,
    };
};
