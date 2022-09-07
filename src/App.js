import { useEffect, useState } from "react";
import "./App.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { FirebaseApp } from "firebase/app";

function App() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    loginEmail: "",
    loginPassword: "",
  });
  const [data, setData] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setData(currentuser);
    });
  }, []);

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const register = async () => {
    const { email, password } = user;
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (e) {
      console.log(e.message);
    }
  };
  const login = async () => {
    const { loginEmail, loginPassword } = user;
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("user", user);
    } catch (e) {
      console.log(e.message);
    }
  };
  const logOut = async () => {
    await signOut(auth);
  };
  // const postData = async (e) => {
  //   e.preventDefault();
  //   const { name, phone, email, password } = user;
  //   if (name && phone && email && password) {
  //     const res = await fetch(
  //       "https://formfirebase-da2ec-default-rtdb.firebaseio.com/reactform.json",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           phone,
  //           email,
  //           password,
  //         }),
  //       }
  //     );
  //     if (res) {
  //       setUser({
  //         name: "",
  //         phone: "",
  //         email: "",
  //         password: "",
  //       });
  //       alert("data added succesfully");
  //     }
  //   } else {
  //     alert("plz fill the data");
  //   }
  // };
  const loginGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={loginGoogle}>Sign In with google</button>
      <h2>Name</h2>
      <input
        variant="outlined"
        type="name"
        value={user.name}
        onChange={handleChange}
        name="name"
        placeholder="Enter the name"
        required
      />
      <h2>Phone No.</h2>
      <input
        variant="outlined"
        type="phone"
        value={user.phone}
        onChange={handleChange}
        name="phone"
        placeholder="Enter the Phone no"
        required
      />
      <h2>Email</h2>
      <input
        variant="outlined"
        type="email"
        value={user.email}
        onChange={handleChange}
        name="email"
        placeholder="Enter the Email address"
        required
      />
      <h2>Password</h2>
      <input
        variant="outlined"
        type="password"
        value={user.password}
        onChange={handleChange}
        name="password"
        placeholder="Enter the password"
        required
      />
      <button variant="contained" onClick={register}>
        Register
      </button>
      <h2>Email</h2>
      <input
        variant="outlined"
        type="email"
        value={user.loginEmail}
        onChange={handleChange}
        name="loginEmail"
        placeholder="Enter your Email address"
        required
      />
      <h2>Password</h2>
      <input
        variant="outlined"
        type="password"
        value={user.loginPassword}
        onChange={handleChange}
        name="loginPassword"
        placeholder="Enter your password"
        required
      />
      <button variant="contained" onClick={login}>
        Login
      </button>
      {console.log("data", data)}
      <h2>{data?.email}</h2>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default App;
