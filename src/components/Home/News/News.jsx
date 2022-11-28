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
        <div className="News">
          <p className="Tittle">{elementNewsBook.title}</p>
          <p className="Body">{elementNewsBook.author}</p>
          <img src={elementNewsBook.book_image } /> <br />
          <a target="_blank" href= {elementNewsBook.amazon_product_url}>Buy Me!</a>

        </div>
      </div>
    );
  });

  return <div>{booksnew}</div>;
};

export default News;