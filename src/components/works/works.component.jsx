import React from "react";
import { workstopInfo, worksbottomInfo } from "../../constants/boardInfo";
import "./works.styles.scss";

export const WorksComponent = () => (
  <div className='work-container'>
    <div className='work-content'>
      {workstopInfo.map(info => (
        <div key={info.id}>
          <img alt='work box bg ' src={info.bgImg} />
          <h4>{info.title}</h4>
        </div>
      ))}
    </div>
    <div className='work-content'>
      {worksbottomInfo.map(info => (
        <div key={info.id}>
          <img alt='work box bg' src={info.bgImg} />
          <h4>{info.title}</h4>
        </div>
      ))}
    </div>
  </div>
);
