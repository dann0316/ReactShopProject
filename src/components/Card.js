import { useNavigate } from "react-router-dom";

function Card({ data, i }) {
  const navigate = useNavigate();

  return (
    <div
      className="w-full border border-[#c0c9bb] p-5 rounded-3xl flex flex-col items-center justify-center gap-2 hover:border-[#6f7d68] cursor-pointer hover-transition"
      onClick={() => {
        navigate(`/detail/${data.id}`);
        // localStorage에 넣어주는 것
        let arr = JSON.parse(localStorage.getItem("watched"));
        // 중복 싫으면 Set자료형 쓰면 됨. => 집합
        // 안에 없으면 넣고
        if (!arr.some((item) => item.title === data.title)) {
          arr.push(data.i);
          localStorage.setItem("watched", JSON.stringify(arr));
        } else {
          // 있으면 앞에건 없애고 넣기
          const index = arr.findIndex((item) => item.title === data.title);
          arr.splice(index, 1);
          arr.push(data.id);
          localStorage.setItem("watched", JSON.stringify(arr));
        }
      }}
    >
      <div className="w-full flex justify-center items-center border border-[#e1ebdc] p-10 rounded-3xl">
        <img
          src={data.image}
          alt="이미지"
          className="h-36 w-36"
          loading="lazy"
        />
      </div>

      <h3 className="text-xl font-semibold text-center">
        {data?.title.length > 20
          ? data?.title.slice(0, 20) + "..."
          : data?.title}
      </h3>
      <p>
        {data?.description.length > 30
          ? data?.description.slice(0, 30) + "..."
          : data?.description}
      </p>
      <p>{data.price} $</p>
    </div>
  );
}

export default Card;
