function Signup({ switchToLogin }) {
  const handleSubmit = () => {
    console.log("Signup form submitted!");
  };

  return (
    <div>
      <h2>Signup Form</h2>

      <input type="text" placeholder="Enter Name" /><br /><br />
      <input type="email" placeholder="Enter Email" /><br /><br />
      <input type="password" placeholder="Enter Password" /><br /><br />

      <button onClick={handleSubmit}>Submit</button><br /><br />

      <button 
        style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }} 
        onClick={switchToLogin}
      >
        Already have an account? Login
      </button>
    </div>
  );
}

export default Signup;
