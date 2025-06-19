const Modal = ({ event, content }) => {
    return (
        // 할인 모달 만들기 fixed or absolute + inset-0 이면 전체화면 덮을 수 있음 inset -> top, down, left, right 합친 거
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
                onClick={event}
                className="w-1/4 flex-row-center border border-[#9baa95] btn bg-white p-6 rounded-xl shadow-lg"
            >
                {content}
            </div>
        </div>
    );
};

export default Modal;
