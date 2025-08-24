import "./App.css";
import { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App() {
  const [list, setList] = useState([]);

  function handleClick(note) {
    setList((preValue) => {
      return [...preValue, note];
    });
  }

  function handleDelete(id) {
    setList(() => {
      return list.filter((list, index) => {
        if (id != index) {
          return list;
        }
      });
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={handleClick} />
      {list.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </>
  );
}

export default App;
