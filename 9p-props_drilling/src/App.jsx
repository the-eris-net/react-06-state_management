import { useState, useEffect } from 'react';


function ListInput({ title, value, setValue, data, setData }) {
  return (<label>
        {title} :{' '}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
  );
}

function ListForm({ title, value, setValue, data, setData }) {
  return (<form
        onSubmit={(e) => {
          e.preventDefault();
          setData([...data, value]);
          setValue(0);
      }}
    >
      <ListInput
        title={title}
        value={value}
        setValue={setValue}
        data={data}
        setData={setData}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function List({ title, value, setValue, data, setData }) {
  return (
    <ul>
      <ListForm
        title={title}
        value={value}
        setValue={setValue}
        data={data}
        setData={setData}
      />
    {data.map((item, index) => (<li key={index}>{item}</li>))}
  </ul>);
}

function Expense({expenseData, setExpenseData}) {
  const [expense, setExpense] = useState(0);

  return (
    <List
      title="Expense"
      value={expense}
      setValue={setExpense}
      data={expenseData}
      setData={setExpenseData}
    />
  );
}

function Income({incomeData, setIncomeData}) {
  const [income, setIncome] = useState(0);

  return (
    <List
      title="Income"
      value={income}
      setValue={setIncome}
      data={incomeData}
      setData={setIncomeData}
    />
  );
}

function Result({ incomeData, expenseData }) {
  const totalIncome = incomeData
    .reduce((acc, curr) => acc + Number(curr), 0);
  const totalExpense = expenseData
    .reduce((acc, curr) => acc + Number(curr), 0);
  const total = totalIncome - totalExpense;
  return (
    <div>
      <h2>Result</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expense: {totalExpense}</p>
      <p>Total: {total}</p>
    </div>
  );
}

function App() {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  return (
    <div>
      <Income 
        incomeData={incomeData} 
        setIncomeData={setIncomeData} />
      <Expense 
        expenseData={expenseData} 
        setExpenseData={setExpenseData} />
      <Result 
        incomeData={incomeData} 
        expenseData={expenseData} />
    </div>
  );
}

export default App;
