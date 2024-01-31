import {
  Buttons,
  CardDate,
  CardDetail,
  CardTitle,
  CardsStyle,
  CompleteButton,
  DeleteButton,
} from "./Styled";

const Cards = ({ item, deleteCardBtn, completeBtn }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <CardsStyle key={item.id}>
      <CardTitle>{item.title}</CardTitle>
      <CardDetail>{item.detail}</CardDetail>
      <CardDate isdone={item.isdone}>
        {new Date(item.date).toLocaleString("ko-KR", options)}까지!
      </CardDate>
      <Buttons>
        <DeleteButton onClick={() => deleteCardBtn(item.id)}>
          삭제하기
        </DeleteButton>
        <CompleteButton onClick={() => completeBtn(item.id)}>
          {item.isdone ? "취소" : "완료"}
        </CompleteButton>
      </Buttons>
    </CardsStyle>
  );
};

export default Cards;
