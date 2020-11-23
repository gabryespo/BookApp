import React from "react";
import style from "./book.module.css";
import noimage from "./img/noimage.jpg";


const Book = ({title, authors, image, link}) => {
      return (
            <div className={style.book}>
                  <a href={link} target="blank" className={style.link}>
                  <h2 className={style.title}>{title}</h2>
                  </a>
                  <p className={style.authors}>{authors ? authors : "Unknown Author"}</p>
                  <a href={link} target="blank" className={style.link}>
                  <button className={style.info}>Find out more</button>
                  </a>
                  <a href={link} target="blank">    
                  <img className={style.image} src={image ? image : noimage} alt="Book cover thumbnail" />
                  </a>
            </div>
      )
}

export default Book;
