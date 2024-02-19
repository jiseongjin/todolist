import React, { useEffect, useState } from "react";
import {
  CardList,
  CardListName,
  PlusCard,
  SortButton,
  TitleName,
  TodoList,
} from "../components/Styled";
import AddBtn from "../components/AddBtn";
import Cards from "../components/Cards";
import axios from "axios";

function Todo({ cards, setCards }) {
  // 제목 내용 useState
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");

  // 조회 함수
  const fatchTodos = async () => {
    const { data } = await axios.get("http://localhost:4002/todos");
    setCards(data);
  };
  //날짜 오름차순 내림차순..
  const orderButton = (event) => {
    if (event.target.value === "asc") {
      return setCards(
        [...cards].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
    }
    return setCards(
      [...cards].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  const onChangeTitle = (event) => {
    const inputValue = event.target.value;
    setTitle(inputValue);
  };

  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };

  const onChanggeDate = (event) => {
    const inputValue = event.target.value;
    setDate(inputValue);
  };

  // 추가하기 버튼
  const addCardBtn = async () => {
    const newCard = {
      id: crypto.randomUUID(),
      title,
      detail,
      date,
      isdone: false,
    };
    if (
      newCard.title.length <= 0 ||
      newCard.detail.length <= 0 ||
      newCard.date.length <= 0
    ) {
      alert("제목,내용,날짜를 입력해 주세요!");
    } else {
      axios.post("http://localhost:4002/todos", newCard);
      setCards([...cards, newCard]);
      // setCards(
      //   [...cards, newCard].sort((a, b) => new Date(a.date) - new Date(b.date))
      // );
      setTitle("");
      setDetail("");
      setDate("");
    }
  };

  // 삭제 버튼
  const deleteCardBtn = async (id) => {
    axios.delete(`http://localhost:4002/todos/${id}`);
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  // 완료 버튼
  const completeBtn = async (id) => {
    const findCard = cards.find((item) => item.id === id);
    const updatedIsDone = !findCard.isdone;
    axios.patch(`http://localhost:4002/todos/${id}`, {
      isdone: updatedIsDone,
    });
    const trueCard = cards.map((obj) =>
      obj.id === id ? { ...obj, isdone: !obj.isdone } : obj
    );
    setCards(trueCard);
  };

  useEffect(() => {
    fatchTodos();
  }, []);

  return (
    <TodoList>
      <TitleName>My Todo List</TitleName>
      <PlusCard>
        <div>
          제목
          <input type="text" onChange={onChangeTitle} value={title} />
        </div>
        <div>
          내용
          <input type="text" onChange={onChangeDetail} value={detail} />
        </div>
        <div>
          기한
          <input type="date" onChange={onChanggeDate} value={date} />
        </div>
        <div>
          <AddBtn addCardBtn={addCardBtn} />
        </div>
      </PlusCard>
      <SortButton>
        {/* 오름 내림 버튼 */}
        <select onChange={orderButton}>
          <option value={"asc"}>오름차순</option>
          <option value={"desc"}>내림차순</option>
        </select>
      </SortButton>
      <div>
        <CardListName>Working..</CardListName>
        <CardList>
          {/* 카드리스트 맴으로 가져오기 */}
          {cards.map((item) => {
            return item.isdone ? null : (
              <Cards
                key={item.id}
                item={item}
                deleteCardBtn={deleteCardBtn}
                completeBtn={completeBtn}
              />
            );
          })}
        </CardList>
        <div>
          <CardListName>Done..!</CardListName>
          <CardList>
            {/* 완료카드 가져오기 */}
            {cards.map((item) => {
              return item.isdone ? (
                <Cards
                  key={item.id}
                  item={item}
                  deleteCardBtn={deleteCardBtn}
                  completeBtn={completeBtn}
                />
              ) : null;
            })}
          </CardList>
        </div>
      </div>
    </TodoList>
  );
}

export default Todo;
