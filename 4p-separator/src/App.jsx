import { useState, useEffect } from 'react';

function List({ title, value, setValue, data, setData }) {
  return (
    <ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData([...data, value]);
          setValue(0);
      }}
    >
      <label>
        {title} :{' '}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>);
}

function Expense() {
  const [expense, setExpense] = useState(0);
  const [data, setData] = useState([]);
  return (
    <List
      title="Expense"
      value={expense}
      setValue={setExpense}
      data={data}
      setData={setData}
    />
  );
}

function Income() {
  const [income, setIncome] = useState(0);
  const [data, setData] = useState([]);

  return (
    <List
      title="Income"
      value={income}
      setValue={setIncome}
      data={data}
      setData={setData}
    />
  );
}

function App() {
  return (
    <div>
      <Income />
      <Expense />
    </div>
  );
}

export default App;
