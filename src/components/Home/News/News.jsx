import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";


const News = () => {
  const { newsbooks,getNewsBooks } = useContext(GlobalContext);

  useEffect(() => {
    getNewsBooks();
  },[]);
  
  const booksnew = newsbooks?.map((elementNewsBook) => {
   console.log(elementNewsBook)
    
    return (
      <div key={elementNewsBook.id}>
        <div>
          <p >{elementNewsBook.title}</p>
          <p >{elementNewsBook.author}</p>
          <img src={elementNewsBook.book_image } width="350" height="500" alt=""  /> <br />
          <a target="_blank" href= {elementNewsBook.amazon_product_url}>Buy Me!</a>

        </div>
      </div>
    );
  });

  return <div>{booksnew}</div>;
};

export default News;