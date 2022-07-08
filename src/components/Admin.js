import React, { useState } from 'react'
import { ref,getStorage,uploadBytes,getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import db from "../Firebase"
import { type } from '@testing-library/user-event/dist/type';


const Admin = () => {
    const [logged,setLogged] = useState(!false)
    const [password,setPassword] = useState("")
    const [myFile,setMyFile] = useState();
    const [name,setName ]= useState('')
    const [type,setType] = useState("")

    const pass = "mohssine";

    const storage = getStorage();

    const download = async()=>{
        const storageRef = ref(storage, `/images/${myFile.name}`);
        uploadBytes(storageRef, myFile).then(() => {
            getDownloadURL(ref(storage, `/images/${myFile.name}`)).then(async(url)=>{
                const docRef = await addDoc(collection(db, "projects"), {
                    imageUrl: url,
                    title: name,
                    type:type,
                  });
            })
          });
    }









    const login=(e)=>{
        e.preventDefault();
        if (password == pass) {
            setLogged(true)
            
        }else{
            setLogged(false)
            
        }
    }
  return (
    <div className='admin'>
        {logged?
         <div className='dashboard'>
            <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
            <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Project name'/>
            <select onChange={(e)=> setType(e.target.value)}>
                <option value="website">website</option>
                <option value="mobile app">mobile app</option>
            </select>
            </div>
            <div>
                <input onChange={(e)=> setMyFile(e.target.files[0])} type="file" /> <button onClick={()=>download()}>Add</button><br />
                <progress max="100" value="0" style={{width:"100%"}}></progress>
            </div>
        </div>
        :
        <div className='login'>
            <h3>Just for admin</h3>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" />
            <button onClick={(e)=>login(e)}>Login</button>
        </div>
        }
    </div>
  )
}

export default Admin