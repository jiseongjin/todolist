import { useState } from "react";
import "./App.css";
import AddBtn from "./components/AddBtn";
import Cards from "./components/Cards";

function App() {
  // 제목 내용 useState
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const onChangeTitle = (event) => {
    const inputValue = event.target.value;
    setTitle(inputValue);
  };

  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };
  // 카드리스트
  const [cards, setCards] = useState([]);

  // 추가하기 버튼
  const addCardBtn = () => {
    const newCard = { id: cards.length + 1, title, detail, isdone: false };
    setCards([...cards, newCard]);
    setTitle("");
    setDetail("");
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
    <div className="totd-list">
      <div className="title-name">My Todo List</div>
      <div className="plus-card">
        <div className="card-name">
          제목
          <input
            className="input"
            type="text"
            onChange={onChangeTitle}
            value={title}
          />
        </div>
        <div className="card-name">
          내용
          <input
            className="input"
            type="text"
            onChange={onChangeDetail}
            value={detail}
          />
        </div>
        <div>
          <AddBtn addCardBtn={addCardBtn} />
        </div>
      </div>
      <div>
        <div className="card-list-name">Working..</div>
        <div className="card-list">
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
        </div>
        <div>
          <div className="card-list-name">Done..!</div>
          <div className="card-list">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
