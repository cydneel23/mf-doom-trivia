import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 className="title">MF DOOM TRIVIA</h1>
      <img
        src="/mf-doom.png"
        className="logo"
        alt="DOOM Icon"
        width="100"
        height="100"
      ></img>
    </div>
  );
};

export default Header;
