import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <div
      className="w-full border border-[#c0c9bb] p-5 rounded-3xl flex flex-col items-center justify-center gap-2 hover:border-[#6f7d68] cursor-pointer hover-transition bg-white"
      onClick={() => {
        navigate(`/detail/${data.id}`);
        // // localStorage에 넣어주는 것
        // let arr = JSON.parse(localStorage.getItem("watched"));
        // // 중복 싫으면 Set자료형 쓰면 됨. => 집합
        // // 안에 없으면 넣고
        // if (!arr.some((item) => item.title === data.title)) {
        //   arr.push(data.i);
        //   localStorage.setItem("watched", JSON.stringify(arr));
        // } else {
        //   // 있으면 앞에건 없애고 넣기
        //   const index = arr.findIndex((item) => item.title === data.title);
        //   arr.splice(index, 1);
        //   arr.push(data.id);
        //   localStorage.setItem("watched", JSON.stringify(arr));
        // }
      }}
    >
      <div className="w-full flex justify-center items-center border border-[#e1ebdc] p-10 rounded-3xl">
        <img
          src={data?.image}
          alt="이미지"
          className={`max-h-36 max-w-36 min-h-16 min-w-16 w-auto
            ${imgLoad ? "opacity-100" : "opacity-0"}
            `}
          loading="lazy"
          onLoad={() => setImgLoad(true)}
        />
        {!imgLoad && (
          <div className="animate-spin rounded-full h-6 w-6 border-4 border-t-transparent border-[#9dab96]" />
        )}
      </div>

      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-center" title={data?.title}>
        {data?.title.length > 20
          ? data?.title.slice(0, 20) + "..."
          : data?.title}
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-center">
        {data?.description.length > 30
          ? data?.description.slice(0, 30) + "..."
          : data?.description}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-center">{data.price} $</p>
    </div>
  );
}

export default Card;
