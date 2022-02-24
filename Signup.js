
import "./Signup.scss";
import MainHeading from "../../Components/MainHeading";
import { useState } from "react";

const Signup = () => {
        
    const[values, setValues] = useState({
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmpassword: ""
        })

    const[userdata, setUserData] = useState([]);

    
        const inputHandler = (e) =>{
            setValues(
                {...values, [e.target.name] : e.target.value
                });
        }


        const formSubmitHandler = (e) => {
                e.preventDefault();
             setUserData([values]);

            
        }

       

    return (
           
        <div className="main-container">
        <MainHeading pageTitle="Signup Form" />
            <form onSubmit={formSubmitHandler}>
             <div className="loginForm">
                {
                    userdata.map((newData) => 
                     <div className="login-result">
                         <ol>
                            <li>User Name : {newData.username}</li>
                            <li>Email : {newData.email}</li>
                            <li>Phone : {newData.phone}</li>
                            <li>Password : {newData.password}</li>
                            <li>Confirm Password : {newData.confirmpassword}</li>
                        </ol>
                     </div>
                    )
                }
               

                 <div className="formInput">
                <input  type="text" name="username" placeholder="User Name" value={values.username} 
                autoComplete="off"
                onChange={inputHandler} />

                <input type="text" name="email" placeholder="Email" value={values.email} 
                autoComplete="off"
                onChange={inputHandler} />

                <input  type="text" name="phone" placeholder="Phone" value={values.phone} 
                autoComplete="off"
                onChange={inputHandler} />              

                <input type="password" name="password" placeholder="Password" value={values.password} 
                autoComplete="off"
                onChange={inputHandler} />

                <input type="password" name="confirmpassword" placeholder="Confirm Password" value={values.confirmpassword} 
                autoComplete="off"
                onChange={inputHandler} />

            </div>  
            <button className="btn btn-color">Signup</button>        
            </div>
           
            </form>
        </div>
    );
}

export default Signup;
