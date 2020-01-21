import React from "react";
import { wwdinfo } from "../../constants/boardInfo";
import "./whatWeDo.style.scss";
export const WhatWeDo = () => (
  <div className='container'>
    {" "}
    <h3>What we do</h3>
    {wwdinfo.map(item => (
      <div key={item.id}>
        <a href='/'>
          <img alt='icon' src={item.icon} />
        </a>
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
);
