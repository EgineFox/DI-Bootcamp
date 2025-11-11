
import User from "./components/User";
import "./App.css";
// import users from "./users.json";
import { useState } from "react";
import Counter from "./components/Counter";

// console.log(users);
/** uuid */

function App() {
  let [count, setCount] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [users, setUsers] = useState();
  console.log(count);

  // const [a,b] = useState()
  // let count = 0;

  const echo = (msg) => {
    alert(msg);
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (val.trim() == "") {
      setErrMsg("do not space me!");
    }
  };
const increment = () => {
    setCount(count + 1);
  };

  const getUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Counter />
      {users &&
        users.map((item, indx) => {
          return <User key={item.id} {...item} />;
        })}

      <button onClick={() => getUsers()}>Click</button>
      <div>
        <input onChange={(e) => handleChange(e)} />
        <div style={{ color: "red" }}>{errMsg}</div>
      </div>
    </>
  );
}

export default App;