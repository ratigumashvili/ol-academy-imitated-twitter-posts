import { AiOutlineArrowLeft } from "react-icons/ai";

const Header = ({ commentOpen, closeComment }) => {
  return (
    <header className="header">
      {commentOpen ? (
        <>
          <button className="btn" onClick={closeComment}>
            <AiOutlineArrowLeft size={20} />
          </button>
          <h2>Tweet</h2>
        </>
      ) : (
        <h2>Home</h2>
      )}
    </header>
  );
};

export default Header;
