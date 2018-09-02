import React, {Component} from "react";
import "./css/register.css";
import Axios from "axios";
// import "./css/bootstrap.min.css";



 class Register extends Component{
    
             constructor() {
                 super();
                 this.state = {
                     name: "",
                     email: "",
                     password: ""
                 }
                  this.submitBtn = this.submitBtn.bind(this);
                  this.handleChange = this.handleChange.bind(this);
            
             }

            

             handleChange = (e) => {
                 this.setState({
                     [e.target.name]: e.target.value
                 })
             }
             submitBtn() {
                let newUser = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password
    
                }
                localStorage.setItem(this.state.email, newUser)
                let registerUser = Axios.post("https://v-forum-api.bahdcasts.com/api/register", newUser);
                registerUser.then(response=>console.log(response))
                registerUser.catch(error=>console.log(error))
                console.log(this.state);
             }
 render() {
    return (     
      <div className="jumbotron">
                    <div className="container">
                        <div className="containersm">
                            <h1>Join forum</h1>
                            <h2 className="my-4 text-dark">Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories you love, and more.</h2>
                            <div>
                                <input onChange={this.handleChange} type="text" id="name" value={this.state.name} placeholder="Enter name" className="form-control mb-2" required="required" name={"name"}/>
                                <span className="invalid-feedback" id="name-error"/>
                                <input onChange={this.handleChange} type="text" id="email" value={this.state.email} placeholder="Enter Email" className="form-control mb-2" name={"email"} required="required"/>
                                <span className="invalid-feedback" id="email-error"/>
                                <input onChange={this.handleChange} type="password" id="password" value={this.state.password} placeholder="Enter password" className="form-control" name={"password"} required="required"/>
                                <span className="invalid-feedback" id="password-error"/>
                                <small id="error-message" className="text-danger text-center"/>
                                <button className="btn btn-primary btn-sm my-3" id="btn" onClick={this.submitBtn}>Submit</button>
                            </div>
                            <div className="openacct">
                                <p className>Already have an account? <a href="login.html"><span className="text-success">Sign in.</span></a></p>
                                <p className="mt-5">To make Forum work, we log user data and share it with service providers. Click "Sign in" above to accept Medium’s
                <a href="#"><span className="text-dark">Terms of Service</span></a> &amp;
                <a href="#"><span className="text-dark">Privacy Policy</span></a>.
              </p>
                            </div>
                        </div>
                    </div>
                </div>
    );
              }
            }
    
        
    
    

        
    

   export default Register;