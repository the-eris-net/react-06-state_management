import { useEffect, useState } from 'react';
import store from './stores';

function Card({ title, content }) {
  const { isDarkMode, isLoggedIn } = store.getState();

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
        Toggle Dark Mode : {store.getState().isDarkMode ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={() =>
          store.dispatch({
            type: 'LOGGED_IN',
            payload: { isLoggedIn: !store.getState().isLoggedIn },
          })
        }
      >
        {store.getState().isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <Card
        title="오늘 공부 체크리스트"
        content="리액트 Context API 사용하기"
      />
    </div>
  );
}

export default App;
