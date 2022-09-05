import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  console.log("user", user);
  const postData = async (e) => {
    e.preventDefault();
    const { name, phone, email, address } = user;
    if (name && phone && email && address) {
      const res = await fetch(
        "https://formfirebase-da2ec-default-rtdb.firebaseio.com/reactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            address,
          }),
        }
      );
      if (res) {
        setUser({
          name: "",
          phone: "",
          email: "",
          address: "",
        });
        alert("data added succesfully");
      }
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <div className="App">
      <form method="POST">
        <input
          type="name"
          value={user.name}
          onChange={handleChange}
          name="name"
          placeholder="Enter the name"
          required
        />
        <input
          type="phone"
          value={user.phone}
          onChange={handleChange}
          name="phone"
          placeholder="Enter the Phone no"
          required
        />
        <input
          type="email"
          value={user.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter the Email address"
          required
        />
        <input
          type="address"
          value={user.address}
          onChange={handleChange}
          name="address"
          placeholder="Enter the Address"
          required
        />
        <button onClick={postData}>Submit</button>
      </form>
    </div>
  );
}

export default App;
