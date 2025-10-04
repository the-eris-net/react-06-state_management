import { createContext,useContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext();
const AuthContext = createContext();


function Card({ title, content }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);

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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <ThemeContext value={{ isDarkMode }}>
      <AuthContext value={{ isLoggedIn }}>
        <div>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
          </button>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? '로그아웃' : '로그인'}
          </button>
          <Card
            title="오늘 공부 체크리스트"
            content="리액트 Context API 사용하기"
          />
        </div>
      </AuthContext>  
    </ThemeContext>
  );
}

export default App;
