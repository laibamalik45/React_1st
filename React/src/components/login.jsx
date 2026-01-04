function Login({ switchToSignup }) {
  const handleLogin = () => {
    console.log("Login form submitted!");
  };

  return (
    <div>
      <h2>Login Form</h2>

      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />

      <button onClick={handleLogin}>Login</button><br /><br />

      <button 
        style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }} 
        onClick={switchToSignup}
      >
        Don't have an account? Signup
      </button>
    </div>
  );
}

export default Login;
