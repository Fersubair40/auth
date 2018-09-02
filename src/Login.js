import React from "react";
import "./css/login.css";
import Axios from "axios";
// import "./css/bootstrap.min.css";


 class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
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
let registeredUser = {
    email: this.state.email,
    password: this.state.password
}
let userDetails = Axios.post("https://v-forum-api.bahdcasts.com/api/login", registeredUser);
userDetails.then(response => console.log(response))
userDetails.catch(error => console.log(error))
console.log(this.state);
}




  render() {
    return (

      <div>
        <div className="jumbotron">
          <div className="containerbig">
            <div className="containersmall">
              <h1>Welcome Back</h1>
              <h2 className="my-4 text-dark">Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that matter to you. </h2>
              <div>
                <input type="text" onChange={this.handleChange} id="email" value={this.state.email} placeholder="Enter Email" className="form-control mb-2" name="email" required="required" />
                <input type="password" onChange={this.handleChange} id="password" value={this.state.password} placeholder="Enter password" className="form-control" name="password" required="required" />
                <small id="error-message" className="text-danger text-center">
                  <button type="submit" className="btn btn-primary btn-sm my-3" id="btn" onClick={this.submitBtn}>Login</button>
                </small></div><small id="error-message" className="text-danger text-center">
                <div className="create-acct">
                  <p>No account? <a href="register.html"><span className="text-success">Create one.</span></a></p>
                  <p>To make Forum work, we log user data and share it with service providers. Click "Sign in" above to accept Medium’s
                    <a href="#"><span className="text-dark">Terms of Service</span></a> &amp; 
                    <a href="#"><span className="text-dark">Privacy Policy</span></a>.
                  </p>
                </div>
              </small></div><small id="error-message" className="text-danger text-center">
            </small></div><small id="error-message" className="text-danger text-center">
          </small></div><small id="error-message" className="text-danger text-center">
        </small>
      </div>
    );
  }
}
            
export default Login;