import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Content() {
  const theme = useContext(ThemeContext);
  return <p>Content 현재 테마: {theme}</p>;
}

function Layout() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext value="blue">
      <p>Layout 현재 테마: {theme}</p>
      <Content />
    </ThemeContext>
  );
}

function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext value="dark">
      <p>App 현재 테마: {theme}</p>
      <Layout />
    </ThemeContext>
  );
}

export default App;