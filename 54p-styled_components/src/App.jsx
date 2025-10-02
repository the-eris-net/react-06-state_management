import { useState, useEffect } from 'react';
import styled from 'styled-components';

function CheckBox({ item: { id, checked, value }, setData }) {
  const formStyle = {
    display: 'flex',
    gap: '10px',
  };

  const handleChange = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleClick = () => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <form style={formStyle}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={handleChange}
        />
        {value}
      </label>
      <button
        onClick={handleClick}
        type="button"
        style={{ marginLeft: 'auto' }}
      >
        삭제
      </button>
    </form>
  );
}

function CheckListForm({ setData }) {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setData((prevData) => [
      ...prevData,
      { id: prevData.length, checked: false, value: newItem },
    ]);
    setNewItem('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '10px' }}>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}

const CheckListProgressOuter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  border: 1px solid gray;
  display: flex;
`;

const CheckListProgressInner = styled.div`
  background: green;
  height: 100%;
  transition: width 0.5s;
  width: ${({ $progress }) => $progress}%;
  display: flex;
`;

const CheckListProgressText = styled.span`
  color: white;
  font-weight: bold;
  margin: auto;
`;


function CheckListProgress({ data }) {
  const checkedCount = data.filter((item) => item.checked).length;
  const progress = Math.round((checkedCount / data.length) * 100);

  return (
    <CheckListProgressOuter>
      <CheckListProgressInner $progress={progress}>
        <CheckListProgressText>{progress}%</CheckListProgressText>
      </CheckListProgressInner>
    </CheckListProgressOuter>
  );
}


function App() {
  const [data, setData] = useState([
    { id: 0, checked: false, value: '스터디 준비' },
    { id: 1, checked: false, value: '예제 코드 작성' },
    { id: 2, checked: false, value: '복습' },
  ]);

  const checkListStyle = {
    boxSizing: 'border-box',
    width: '100%',
    border: '1px solid black',
    padding: 10,
    marginBottom: 10,
  };

  return (
    <div>
      <h1>체크리스트</h1>
      <CheckListForm setData={setData} />
      <div style={checkListStyle}>
        {data.map((item) => (
          <CheckBox key={item.id} item={item} setData={setData} />
        ))}
      </div>
      <CheckListProgress data={data} />
    </div>
  );
}

export default App;
