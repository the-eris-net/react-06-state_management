import useStore from './store/useStore';

function Card({ title }) {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const pokemonData = useStore((state) => state.pokemonData);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const fetchPokemon = useStore((state) => state.fetchPokemon);

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
      <strong>{title}</strong><br/>
      <button
        onClick={fetchPokemon}
        style={{
          padding: '8px 16px',
          backgroundColor: isDarkMode ? '#555' : '#007bff',
          color: '#fff',
          borderRadius: '4px',
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
      {pokemonData && (
        <div style={{ marginTop: '8px' }}>
          <strong>포켓몬 목록 ({pokemonData.count}개):</strong>
          <ul style={{ maxHeight: '200px', overflow: 'auto' }}>
            {pokemonData.results.slice(0, 10).map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function App() {
  const isDarkMode = useStore((state) => state.isDarkMode);
  const isLoggedIn = useStore((state) => state.auth.isLoggedIn);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const setLoggedIn = useStore((state) => state.setLoggedIn);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode : {isDarkMode ? 'ON' : 'OFF'}
      </button>
      <button
        onClick={() => setLoggedIn(!isLoggedIn)}
      >
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      {isLoggedIn ? (
        <Card title="포켓몬 리스트" />
      ) : (
        <div>로그인 후 내용을 확인하세요.</div>
      )}
    </div>
  );
}

export default App;
