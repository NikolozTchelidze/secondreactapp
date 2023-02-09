import { useEffect, useState } from "react";

const generateUsers = () => {
  return [
    { id: 1, name: "Niko" },
    { id: 2, name: "Nico" },
    { id: 3, name: "Natia" },
    { id: 4, name: "Kakha" },
    { id: 5, name: "Luka" },
    { id: 6, name: "Sandro" },
    { id: 7, name: "Eteri" },
    { id: 8, name: "Vaso" },
    { id: 9, name: "Dudu" },
    { id: 10, name: "Gio" },
    { id: 11, name: "Dato" },
    { id: 12, name: "Givi" },
    { id: 13, name: "Nugzari" },
  ];
};

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(generateUsers());
    setUsers(generateUsers());
  }, []);

  useEffect(()=>{
    document.title=`${users.length} users left`
  },[users]);
  const onRemoveUser = () => {
    setUsers((prevUsers) => {
      const index = Math.floor(Math.random() * prevUsers.length);
      const newUsersArray = prevUsers.filter((_, ind) => ind !== index);
      return newUsersArray;
    });
  };
  return (
    <div className="App">
      {users.map(({ id, name }) => (
        <h1 key={id}>{name}</h1>
      ))}
      <button onClick={onRemoveUser}>Remove user</button>
    </div>
  );
}

export default App;
