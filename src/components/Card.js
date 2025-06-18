import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

function Card({data, i}) {
    const navigate = useNavigate();

    return (
        <Nav.Link
            className="card"
            onClick={() => {
                navigate(`/detail/${data.i}`);
                // localStorage에 넣어주는 것
                let arr = JSON.parse(localStorage.getItem("watched"));
                // 중복 싫으면 Set자료형 쓰면 됨. => 집합
                // 안에 없으면 넣고
                if (
                    !arr.some(
                        (item) => item.title === data.i.title
                    )
                ) {
                    arr.push(data.i);
                    localStorage.setItem("watched", JSON.stringify(arr));
                } else {
                    // 있으면 앞에건 없애고 넣기
                    const index = arr.findIndex(
                        (item) => item.title === data.i.title
                    );
                    arr.splice(index, 1);
                    arr.push(data.i);
                    localStorage.setItem("watched", JSON.stringify(arr));
                }
            }}
        >
            <img
                src={data.image}
                alt="이미지"
                className="h-36"
            />
            <h3>{data?.title.length > 10
              ? data?.title.slice(0, 10) + "..."
              : data?.title
            }</h3>
            <p>{data.content}</p>
            <p>
  {data?.description?.length > 20
    ? data.description.slice(0, 20) + "..."
    : data?.description}
</p>
            <p>{data.price}</p>
        </Nav.Link>
    );
}

export default Card;
