const MiniCart = () => {
  return (
    <div className="cart-container">
      <h4 className="cart-heading">장바구니에 있는 상품</h4>
      {/* // localStorage에 내가 들어간 혹은 지금 장바구니에 있는 상품 넣어주면 됨 */}
      {(localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : []
      ).map((item, index) => {
        return (
          <div key={index} className="latest-inner-container">
            <img src={item.img} alt="" width="30%" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MiniCart;