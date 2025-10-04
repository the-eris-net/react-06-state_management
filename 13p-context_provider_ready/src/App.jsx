import { useState, useEffect } from 'react';

function ContentItem({ item, isDarkMode }) {
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? '#fff' : '#333',
        color: isDarkMode ? '#000' : '#fff',
        margin: 8,
        padding: 8,
        borderRadius: 8,
      }}
    >
      <span>
        {item.id} : {item.text}
      </span>
    </div>
  );
}

function Card({ title, content, isDarkMode }) {
  return (
    <div
      style={{
        border: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
        borderRadius: '8px',
        padding: '16px',
        color: isDarkMode ? '#fff' : '#000',
        backgroundColor: isDarkMode ? '#333' : '#fff',
      }}
    >
      <strong>{title}</strong>
      <div style={{ margin: 8 }}>
        {content.map((item) => (
          <ContentItem key={item.id} item={item} isDarkMode={isDarkMode} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const data = [
    { id: 1, text: 'JSX 알아보기'},
    { id: 2, text: '컴포넌트 스타일링 해보기' },
    { id: 3, text: '일정 관리 앱 만들어 보기'},
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
      </button>
      <Card
        title="오늘 공부 체크리스트"
        content={data}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}

export default App;
