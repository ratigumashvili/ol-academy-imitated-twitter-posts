import { BsTwitter } from "react-icons/bs";

const Spinner = () => {
  return (
    <div className="loading">
      <BsTwitter size={60} />
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
