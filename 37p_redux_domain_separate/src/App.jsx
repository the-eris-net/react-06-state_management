import { useEffect, useState } from 'react';
import store from './stores';

function Card({ title, content }) {
  const { isDarkMode } = store.getState().theme;
  const { isLoggedIn } = store.getState().login;

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
        {isLoggedIn 
          ? <> {content} </> 
          : <>로그인 후 내용을 확인하세요.</>}
      </div>
    </div>
  );
}

function App() {
  const [_, setIsStateChanged] = useState(store.getState());
  const { isDarkMode } = store.getState().theme;
  const { isLoggedIn } = store.getState().login;

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsStateChanged(store.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'DARK_MODE' })}>
        Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={() =>
          store.dispatch({
            type: 'LOGGED_IN',
            payload: { isLoggedIn: !isLoggedIn },
          })
        }
      >
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <Card
        title="오늘 공부 체크리스트"
        content="리액트 Context API 사용하기"
      />
    </div>
  );
}

export default App;
