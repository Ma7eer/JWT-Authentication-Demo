import React from "react";
import "./App.css";

const formContainerStyle = {
  border: "4px solid black",
  borderRadius: "3px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "100px 400px 100px 400px",
  padding: "10px 150px 50px 150px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const formItemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "10px",
};

const inputStyle = {
  padding: "10px",
  margin: "5px 0px 0px 0px",
  borderRadius: "3px",
  fontSize: "18px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  padding: "12px 40px 12px 40px",
  fontSize: "18px",
  borderRadius: "3px",
  marginTop: "10px",
};

function App() {
  return (
    <div className="App">
      <h1>JWT AUTHENTICATION DEMO</h1>

      {/* Sign Up Form */}
      <div style={formContainerStyle}>
        <h1>SIGN UP</h1>
        <form style={formStyle}>
          <div style={formItemStyle}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              style={inputStyle}
            />
          </div>

          <div style={formItemStyle}>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
      </div>

      {/* Log In Form */}
      <div style={formContainerStyle}>
        <h1>LOG IN</h1>
        <form style={formStyle}>
          <div style={formItemStyle}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              placeholder="username"
              id="username"
              style={inputStyle}
            />
          </div>

          <div style={formItemStyle}>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
