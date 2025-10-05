import { createContext, useContext } from 'react';
import { useState } from 'react';

const MyContext = createContext();

function ContentItem({ item }) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div
          style={{
            backgroundColor: context.isDarkMode ? '#fff' : '#333',
            color: context.isDarkMode ? '#000' : '#fff',
            margin: 8,
            padding: 8,
            borderRadius: 8,
          }}
        >
          <span>
            {item.id} : {item.text}
          </span>
        </div>
      )}
    </MyContext.Consumer>
  );
}

function Card({ title, content }) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <div
          style={{
            border: `1px solid ${context.isDarkMode ? '#444' : '#ccc'}`,
            borderRadius: '8px',
            padding: '16px',
            color: context.isDarkMode ? '#fff' : '#000',
            backgroundColor: context.isDarkMode ? '#333' : '#fff',
          }}
        >
          <strong>{title}</strong>
          <div style={{ margin: 8 }}>
            {content.map((item) => (
              <ContentItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
}

function App() {
  const data = [
    { id: 1, text: 'JSX 알아보기' },
    { id: 2, text: '컴포넌트 스타일링 해보기' },
    { id: 3, text: '일정 관리 앱 만들어 보기' },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MyContext value={{ isDarkMode }}>
      <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
        </button>
        <Card title="오늘 공부 체크리스트" content={data} />
      </div>
    </MyContext>
  );
}

export default App;
