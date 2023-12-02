
import { useNavigate } from "react-router-dom";
function App() {
   const navigate= useNavigate();
   const handleClick=(e) =>{e.preventDefault();
    let name = document.getElementById("name").value
    let gender = document.getElementById("gender").value
    let age = document.getElementById("age").value
    let number = document.getElementById("number").value
    let aadhar = document.getElementById("aadhar").value
    if(!name || !age || !gender || !number || !aadhar){
        alert("Please fill all details!")
    }
    else{navigate("/Photocapture");}
    }

  return(
    
      <>
        <div className="Header">
            <h1>My Comapany</h1>
        </div>
        <div className="Card">
          <div className="holder">
             
             <div className="insidecard">
                <h1>Patient Detail Form</h1>
                <label>Name of Patient</label><br/>
                <input type="text" id="name" placeholder=""></input><br/>
                <label>Gender</label><br/>
                <input type="text" id="gender" placeholder=""></input><br/>
                <label>Age</label><br/>
                <input type="text" id="age" placeholder=""></input><br/>
                <label>Phone Number</label><br/>
                <input type="text" id="number" placeholder=""></input><br/>
                <label>Aadhar UID number</label><br/>
                <input type="text" id="aadhar" placeholder=""></input><br/>
                <button type="submit" class="submitbutton" onClick={handleClick}>Submit</button>
             </div>
           </div>
        </div>
        <div className="Footer">
            <p>&copy;  {new Date().getFullYear()} Developed by Aditya </p>
        </div>
        </>
    
      
    
    
    
 )

  
}

export default App
