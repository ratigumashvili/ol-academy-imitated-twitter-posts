import { useState } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";

function App() {
  const [commentOpen, setCommentOpen] = useState(false);

  const closeComment = () => {
    setCommentOpen(false);
  };

  return (
    <div className="app">
      <Header commentOpen={commentOpen} closeComment={closeComment} />
      <Feed commentOpen={commentOpen} setCommentOpen={setCommentOpen} />
    </div>
  );
}

export default App;
