import React from "react";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import "./home.css";
import { useState } from "react";
// import { BookItem } from "./components/BookItem";

export const Home = () => {
  const { mainState, mainDispatcher } = useContext(MainContext);

    console.log(mainState)

  const handleMoveTo=(bookId,e)=>{
    const category=e.target.value;
    mainDispatcher({
      type: "move-book",
      payload: { bookId, category },
    });
  } 

  const BookItem = ({ book, handleMoveTo }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <select value={book.category} onChange={(event) => handleMoveTo(book.id, event)}>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
      </select>
    </div>
  );
};


  return (
    <div className="main">
      {mainState?.Books?.map((book) => (
         <BookItem key={book.id} book={book} handleMoveTo={handleMoveTo}/>    ))}
    </div>
  );
};
