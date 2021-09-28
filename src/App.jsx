import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  document.onkeydown = (e) => {
    if (e.keyCode === 123 || e.ctrlKey) return false;
  };
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}
