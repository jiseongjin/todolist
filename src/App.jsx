import { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn";
import Cards from "./components/Cards";
import {
  CardList,
  CardListName,
  PlusCard,
  SortButton,
  TitleName,
  TodoList,
} from "./components/Styled";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  // 제목 내용 useState
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");

  //날짜 오름차순 내림차순..
  // const [sortOrder, setSortOrder] = useState("asc");
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
    // const options = {
    //   weekday: "long",
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // };
    // const date = new Date(inputValue).toLocaleString("ko-KR", options);
    // console.log(date);
    setDate(inputValue);
  };
  // 카드리스트
  const [cards, setCards] = useState([]);

  // 추가하기 버튼
  const addCardBtn = () => {
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
      setCards(
        [...cards, newCard].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
      setTitle("");
      setDetail("");
      setDate("");
    }
  };

  // 삭제 버튼
  const deleteCardBtn = (id) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);
  };

  // 완료 버튼
  const completeBtn = (id) => {
    const trueCard = cards.map((obj) =>
      obj.id === id ? { ...obj, isdone: !obj.isdone } : obj
    );
    setCards(trueCard);
  };

  return (
    <TodoList>
      <GlobalStyle />
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

export default App;
