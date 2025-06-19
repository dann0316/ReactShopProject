import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const headerArr = ["home", "cart"];

  return (
    <header className="fixed w-full h-16 bg-[#6a7466e3] top-0 left-0 flex flex-row justify-center items-center gap-5 z-40">
      {headerArr.map((a, i) => {
        return (
          <div
            key={i}
            className="text-white font-extrabold text-2xl uppercase cursor-pointer hover-transition hover:text-[#525a4f]
                        "
            onClick={() => {
              a === "cart" ? navigate("/cart") : navigate("/");
            }}
          >
            {a}
          </div>
        );
      })}
    </header>
  );
};

export default Header;
