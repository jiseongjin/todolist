const Cards = ({ item, deleteCardBtn, completeBtn }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div key={item.id} className="cards">
      <div className="card-title">{item.title}</div>
      <div className="card-detail">{item.detail}</div>
      <div className="card-date">
        {new Date(item.date).toLocaleString("ko-KR", options)}까지!
      </div>
      <div className="buttons">
        <button className="delete-btn" onClick={() => deleteCardBtn(item.id)}>
          삭제하기
        </button>
        <button
          className="complete-delete-btn"
          onClick={() => completeBtn(item.id)}
        >
          {item.isdone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
