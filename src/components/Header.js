import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const headerArr = ["home", "cart"];

    return (
        <header className="fixed w-full bg-[#6a7466e3] top-0 left-0">
            {headerArr.map((a, i) => {
                return (
                    <div
                        key={i}
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
