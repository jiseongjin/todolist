import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(""); 

  const onChangeTitle = (event) =>{
    const inputValue = event.target.value;
    setTitle(inputValue)
    console.log(title);
  }


  return (
    <div className="totd-list">
      <div className="title-name">My Todo List</div>
      <div className="plus-card">
        <div className="card-name">
          제목 <input className="input" type="text" onChange={onChangeTitle} value={title}/>
        </div>
        <div className="card-name">
          내용 <input className="input"/>
        </div>
        <div><button className="plus-btn">추가하기</button></div>
      </div>
      <div>
        <div className="card-list-name">Working..</div>
        <div className="cards">
          <div className="card-main">리액트 공부하기</div>
          <div className="card-detail">리액트 기초를 공부해 봅시다.</div>
          <div>
            <button className="delete-btn">삭제하기</button>
            <button className="complete-delete-btn">완료</button>
          </div>
        </div>
        <div>
          <div className="card-list-name">Done..!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
