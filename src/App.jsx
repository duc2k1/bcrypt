import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  document.onkeydown = (e) => {
    if (e.keyCode === 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === "S".charCodeAt(0)) {
      return false;
    }
  };
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}
