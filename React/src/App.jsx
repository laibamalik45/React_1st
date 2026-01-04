import { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/login";

function App() {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {showSignup ? (
        <Signup switchToLogin={() => setShowSignup(false)} />
      ) : (
        <Login switchToSignup={() => setShowSignup(true)} />
      )}
    </div>
  );
}

export default App;
