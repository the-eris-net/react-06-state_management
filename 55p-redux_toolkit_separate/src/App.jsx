import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './features/theme/themeSlice';
import { setLoggedIn } from './features/login/loginSlice';

function Card({ title, content }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

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
        {isLoggedIn ? <> {content} </> : <>로그인 후 내용을 확인하세요.</>}
      </div>
    </div>
  );
}

function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  
  return (
    <div>
      <button onClick={() => dispatch(toggleDarkMode())}>
        Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={() => dispatch(setLoggedIn({ isLoggedIn: !isLoggedIn }))}
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
