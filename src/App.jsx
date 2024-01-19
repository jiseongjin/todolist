import { useState } from "react";
import "./App.css";

function App() {
  // 제목 내용 useState
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const onChangeTitle = (event)=>{
    const inputValue = event.target.value;
    setTitle(inputValue);
    console.log(title);
  }

  const onChangeDetail = (event)=>{
    const inputValue = event.target.value;
    setDetail(inputValue);
  }
  // 카드리스트
const [cards, setCards] = useState([]);

// 추가하기 버튼
const addCard = ()=>{
  const newCard = {id:cards.length+1,title,detail};
  setCards([...cards,newCard]);
}
  return (
    <div className="totd-list">
      <div className="title-name">My Todo List</div>
      <div className="plus-card">
        <div className="card-name">
          제목 <input className="input" type="text" onChange={onChangeTitle} value={title}/>
        </div>
        <div className="card-name">
          내용 <input className="input"type="text" onChange={onChangeDetail} value={detail}/>
        </div>
        <div><button className="plus-btn" onClick={addCard}>추가하기</button></div>
      </div>
      <div>
        <div className="card-list-name">Working..</div>
        {/* 카드리스트 맴으로 가져오기 */}
        {
          cards.map((item)=>{
            return (
            <div key={item.id} className="cards">
          <div className="card-title">{item.title}</div>
          <div className="card-detail">{item.detail}</div>
          <div>
            <button className="delete-btn">삭제하기</button>
            <button className="complete-delete-btn">완료</button>
          </div>
        </div>
            )
          })
        }
        <div>
          <div className="card-list-name">Done..!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
