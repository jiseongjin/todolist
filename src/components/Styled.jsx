import styled from "styled-components";

export const TodoList = styled.main`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleName = styled.header`
  width: 1200px;
  margin: 20px 0 10px 0;
`;

export const PlusCard = styled.div`
  width: 1200px;
  height: 100px;
  background-color: rgb(172, 172, 172);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
  gap: 30px;
`;

export const CardListName = styled.div`
  max-width: 1200px;
  margin: 20px 0 20px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const CardList = styled.main`
  width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CardsStyle = styled.div`
  width: 250px;
  height: 150px;
  padding: 20px;
  border: 3px solid rgb(98, 219, 98);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.p`
  width: 250px;
  font-size: 20px;
  font-weight: bold;
`;

export const CardDetail = styled.p`
  width: 250px;
`;

// 나중에 다시 확인
// .attrs((props) => ({
//   // isdone 속성을 필터링하여 DOM으로 전달되지 않도록 설정
//   isdone: undefined,
// }))
export const CardDate = styled.p`
  width: 250px;
  font-size: 15px;
  text-decoration: ${(props) => (props.isdone ? "line-through" : "none")};
`;

export const PlusButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: rgb(98, 219, 98);
  border: transparent;
  border-radius: 10px;
  font-weight: bold;
`;

export const Buttons = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DeleteButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: 1px solid red;
  border-radius: 5px;
`;

export const CompleteButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border: 1px solid rgb(63, 211, 70);
  border-radius: 5px;
`;

export const SortButton = styled.div`
  margin-right: 90%;
`;
