import { useEffect, useState } from "react";
import './userForm.css';
function UserForm({ roomId, onAddUser }) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then((r) => r.json())
      .then(setUsers);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      user_id: userId,
      room_id: roomId,
      name : name,
      
    };
    fetch("/room_users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newUser) => {
          onAddUser(newUser);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user_id">User:</label>
      <select
        id="user_id"
        name="user_id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="">Select a room</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <label htmlFor="user_id">Name:</label>
      <input
        type="string"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Book Room</button>
    </form>
  );
}

export default UserForm;