import React from "react";
import { useParams } from "react-router";
import {
  CardDate,
  CardDetail,
  CardTitle,
  CardsStyle,
} from "../components/Styled";

function Detail({ cards }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const params = useParams();
  console.log(params);
  return (
    <div>
      {cards.map((item) => {
        return item.id === params.id ? (
          <CardsStyle key={item.id}>
            <CardTitle>{item.title}</CardTitle>
            <CardDetail>{item.detail}</CardDetail>
            <CardDate isdone={item.isdone}>
              {new Date(item.date).toLocaleString("ko-KR", options)}까지!
            </CardDate>
          </CardsStyle>
        ) : null;
      })}
    </div>
  );
}

export default Detail;
