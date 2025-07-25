// import { useState, useEffect } from "react";
// import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Invalid from "./validations/invalid/Invalid";
// import Valid from "./validations/valid/Valid";

// export default function Login() {
//   const [isUserFocus, setUserFocus] = useState(false);
//   const [isPasswordFocus, setPasswordFocus] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isValid, setIsValid] = useState(false);
//   const [isNotValid, setIsNotValid] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     document.title = "Login Page";
//     console.log(LOCAL_IP);
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/users/login", {
//         username,
//         password,
//       });

//       if (response.status === 200) {
//         setIsValid(true);

//         // Save user data and token to localStorage
//         const { token, user } = response.data;
//         console.log(token);
//         try {
//           const response = await fetch("http://localhost:5000/api/users/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(userData),
//           });
//           const data = await response.json();

//           if (response.ok) {
//             // Assuming the server sends the 'token' and 'user' in the response
//             const { token, user } = data;

//             // Save the authToken and user data to localStorage
//             try {
//               localStorage.setItem("authToken", token);
//               localStorage.setItem("user", JSON.stringify(user));
//               sessionStorage.setItem("userId", JSON.stringify(response.data.user.user_id));
//               sessionStorage.setItem("userLocation", JSON.stringify(response.data.user.location));
//               sessionStorage.setItem("user", JSON.stringify(response.data.user.username));
//             } catch (error) {
//               console.error("Error storing data:", error);
//             }

//           //   localStorage.setItem("authToken", token);
//           //   localStorage.setItem("user", JSON.stringify(user));
//           //   sessionStorage.setItem("userId", JSON.stringify(response.data.user.user_id));
//           // sessionStorage.setItem("userLocation", JSON.stringify(response.data.user.location));
//           // sessionStorage.setItem("user", JSON.stringify(response.data.user.username));

//             // After successful signup, navigate to home
//             navigate("/home");
//           } else {
//             alert(data.message);
//           }
//         } catch (error) {
//           console.error("Error signing up:", error);
//         }
//         const authToken = localStorage.getItem("authToken"); // Check if the user is authenticated
//         console.log(authToken);
//         setTimeout(() => {
//           setIsValid(false);
//           navigate("/home");
//         }, 5500);
//       }
//     } catch (error) {
//       setIsNotValid(true);
//       setTimeout(() => setIsNotValid(false), 3500);
//     }
//   };

//   return (
//     <div className="loginWrapper">
//       {isValid && <Valid uname={username} />}
//       {isNotValid && <Invalid />}
//       <form onSubmit={handleLogin}>
//         <div className="loginContainer">
//           <div className="header">
//             <FaUser id="logo" />
//             <h3 style={{ textAlign: "center" }}>
//               Welcome back,
//               <br />
//               Login into your Account
//             </h3>
//           </div>
//           <div className="fieldContainer">
//             <div className="username">
//               <h5 className={isUserFocus ? "userText active" : "userText"}>Username:</h5>
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={username}
//                 onFocus={() => !isUserFocus && setUserFocus(true)}
//                 onBlur={() => isUserFocus && setUserFocus(false)}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="password">
//               <h5 className={isPasswordFocus ? "passText active" : "passText"}>Password:</h5>
//               <div className="passwordField">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   value={password}
//                   onFocus={() => !isPasswordFocus && setPasswordFocus(true)}
//                   onBlur={() => isPasswordFocus && setPasswordFocus(false)}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   className="showbutton"
//                   type="button"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </div>
//               <a href="#">
//                 <p>Forgot Password?</p>
//               </a>
//             </div>
//           </div>
//           <div className="loginbutton">
//             <button type="submit">Login</button>
//           </div>
//           <div className="dontAccount">
//             <p>
//               {"Don't have an Account? Create one"} <Link to="/signup">Sign Up</Link>
//             </p>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Invalid from "./validations/invalid/Invalid";
import Valid from "./validations/valid/Valid";
import Loading from '../loadingscreen/LoadingScreen';
import { useDarkMode } from "../../DarkModeContext";
import vid from "./bg2.mp4";
import vide from "./bg4.mp4";
import "./Login.css";

export default function Login() {
  const [isUserFocus, setUserFocus] = useState(false);
  const [isPasswordFocus, setPasswordFocus] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isNotValid, setIsNotValid] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(false);
  const {isDarkMode} = useDarkMode();

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    document.title = "Login Page";
    console.log(LOCAL_IP);
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault(); 
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `http://${LOCAL_IP}:5000/api/users/login`,
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        setIsValid(true);

        // Save user data and token to localStorage
        const { token, user } = response.data;
        console.log(token);
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("userId", response.data.user.user_id);
        sessionStorage.setItem("userLocation", response.data.user.location);
        sessionStorage.setItem("user", JSON.stringify(user));
        const authToken = localStorage.getItem("authToken"); // Check if the user is authenticated
        console.log(authToken);
        setTimeout(() => {
          setIsValid(false);
          setIsLoading(false);
          navigate("/home");
        }, 1500);
      }
    } catch (error) {
      setIsNotValid(true);
      setIsLoading(false);
      setTimeout(() => setIsNotValid(false), 3000);
    }
  };

  if(isLoading){
    return (
      <div className="loginWrapper" style={
        isDarkMode
          ? { color: "white", backgroundColor: "#242a23" }
          : { color: "black" }
      }>
        <video
        src={screenSize <= 850 ? vide : vid}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      {isValid && <Valid uname={username} fullScreen={true} />}
      {isNotValid && <Invalid />}
      <div className="loginContainer" >
        <Loading />
      </div>
      </div>
    )
  }

  return (
    <div className="loginWrapper">
      <video
        src={screenSize <= 850 ? vide : vid}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      ></video>
      {isValid && <Valid uname={username} fullScreen={true} />}
      {isNotValid && <Invalid />}
      <form onSubmit={handleLogin}>
        <div className="loginContainer">
          <div className="header">
            <FaUser id="logo" />
            <h3 style={{ textAlign: "center" }}>
              Welcome back,
              <br />
              Login into your Account
            </h3>
          </div>
          <div className="fieldContainer">
            <div className="username">
              <h5 className={isUserFocus ? "userText active" : "userText"}>
                Username:
              </h5>
              <input
                className="login-userName-input login-input"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onKeyDown={handleKeyDown}
                onFocus={() => !isUserFocus && setUserFocus(true)}
                onBlur={() => isUserFocus && setUserFocus(false)}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="password">
              <h5 className={isPasswordFocus ? "passText active" : "passText"}>
                Password:
              </h5>
              <div className="passwordField">
                <input
                  className="login-password-input login-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onKeyDown={handleKeyDown}
                  onFocus={() => !isPasswordFocus && setPasswordFocus(true)}
                  onBlur={() => isPasswordFocus && setPasswordFocus(false)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="showbutton"
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <FaEyeSlash className={`eye ${!showPassword ? 'active' : ''}`} />
                  <FaEye className={`eye ${showPassword ? 'active' : ''}`} />
                </button>
              </div>

              <Link to="/forgotPassword">
                <p>Forgot Password?</p>
              </Link>
            </div>
          </div>
          <div className="loginbutton">
            <button type="submit">Login</button>
          </div>
          <div className="dontAccount">
            <p>
              {"Don't have an Account? Create one"}{" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
