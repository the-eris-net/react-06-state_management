import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './features/theme/themeSlice';
import { setLoggedIn } from './features/login/loginSlice';
import { fetchPokemon } from './features/posts/postSlice';

function Card({ title, content }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const { data, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleFetchPokemon = () => {
    dispatch(fetchPokemon());
  };

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
      <button 
        onClick={handleFetchPokemon}
        style={{
          padding: '8px 16px',
          margin: '8px 0',
          backgroundColor: isDarkMode ? '#555' : '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        disabled={loading}
      >
        {loading ? '포켓몬 데이터 로딩중...' : '포켓몬 데이터 가져오기'}
      </button>
      {error && (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '8px' }}>
          에러: {error}
        </div>
      )}
      {data && (
        <div style={{ marginTop: '8px' }}>
          <strong>포켓몬 목록 ({data.count}개):</strong>
          <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {data.results.slice(0, 10).map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
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
