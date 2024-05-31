import style from './index.module.css';
import { Members } from "./data";
import React from "react";



const Stat = () =>{
     return(
         <>
             <div className={style.Stats}>
                 <div>
                     <h2>Helping a local <span style={{color: "#4caf4f", display: "block"}}>business reinvent itself</span>
                     </h2>
                     <p>We reached here with our hard work and dedication</p>
                 </div>

                 <div className={style.statisticsNumbers}>
                     <div className={style.statsContainer} style={{columnGap:"50px", rowGap: "20px"}}>
                         {
                             Members.map((value, index) => (
                                 <div style={{display:"flex",alignItems:"center",justifyContent:"center", gap:"15px"}} key={index}>
                                     <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                                         <img src={value.image} />
                                     </div>
                                     <div style={{display:"flex",flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
                                         <h6 style={{marginBottom:0}}>{value.number}</h6>
                                         <h6 style={{marginTop:"10px"}}>{value.text}</h6>
                                     </div>

                                 </div>
                             ))
                         }
                     </div>
                 </div>
             </div>
         </>


     );


}


export default Stat;