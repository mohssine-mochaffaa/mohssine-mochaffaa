import React, { useEffect, useState } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import db from "../Firebase"

const Mobile = () => {

  const [projects,setProjects] = useState([])
  const q = query(collection(db, "projects"), where("type", "==", "mobile app"));

  const getData = onSnapshot(q, (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    setProjects(data);
  });
  useEffect(()=>{
    getData();
  },[])
  return (
    <center>
      {projects.length > 0 ? <div className='projectsContainer'>
      {projects.map((pro)=>{
        return(
          <div className='projectsBox'>
              <img src={pro.imageUrl}/>
              <p>{pro.title}</p>
          </div>
        )
      })}
    </div> : <div>
      <h1>Soon!...</h1></div>}
    </center>
  )
}

export default Mobile