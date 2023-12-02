
function Form(props){
    return(
        <>
        <div className="Header">
            <h1>My Comapany</h1>
        </div>
        <div className="Card">
          <div className="holder">
             
             <div className="insidecard">
                <h1>Patient Name : {props.name}</h1>
                <h1>Patient Gender : {props.gender}</h1>
                <h1>Patient Age : {props.age}</h1>
                <h1>Patient Number : {props.number}</h1>
                <h1>Patient Aadhar Card ID : {props.aadhar}</h1>
             </div>
           </div>
        </div>
        <div className="Footer">
            <p>&copy;  {new Date().getFullYear()} Developed by Aditya </p>
        </div>
        </>
       
    )
}
export default Form