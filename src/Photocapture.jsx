import { Camera } from 'react-html5-camera-photo';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { useNavigate } from "react-router-dom";


function Photocapture() {
    const[camera,setCam]=useState(true);
    const[capture,setCap]=useState(null);
    const handletakePhoto=(dataUri) =>{
        setCam(false);
        setCap(dataUri);
    }
    const handleNext=() => {
        setCam(true);
        setCap(null);
    }
    const navigate= useNavigate();
    const handleForm=()=>{
        navigate("/Form");
    }
return(
<>
    <div className="Header">
                <h1>My Comapany</h1>
    </div>
    <div className="Card">
        <div className="photoholder">
             
            <div className="camera"> 
               {camera ? <Camera onTakePhoto={(dataUri) => handletakePhoto(dataUri)}/>:<img src={capture} alt="Captured Image Feed" style={{width:"85%" ,height:"550px"}}></img>}
               {!camera && (
               <div>
                    <button className='cap' onClick={handleForm}>Get Form</button> 
                    <button className='cap' onClick={handleNext}>Retake</button>
               </div>
               )}
            </div>
            
        </div>
    </div>
    <div className="Footer">
                <p>&copy;  {new Date().getFullYear()} Developed by Aditya </p>
    </div>
</>
)
}
export default Photocapture