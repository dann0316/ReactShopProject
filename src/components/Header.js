import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);

  return (
    <header className="fixed w-full h-16 bg-[#6a7466e3] top-0 left-0 flex flex-row justify-center items-center gap-5 z-40">

      <h3 className="text-white font-extrabold text-2xl uppercase cursor-pointer hover-transition hover:text-[#525a4f]" onClick={() => {
        navigate('/')
      }}>
        home
      </h3>

      <h3 className="relative text-white font-extrabold text-2xl uppercase cursor-pointer hover-transition hover:text-[#525a4f]" onClick={() => {
        navigate('/cart')
      }}>
        cart
        {data.length > 0 && (<span className="absolute -top-2 -right-7 text-red-400 text-center border border-white rounded-full text-lg px-2">{data.length}</span>)}
      </h3>

    </header>
  );
};

export default Header;
