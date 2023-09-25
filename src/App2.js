import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

let id = 0;

export default function NamesList() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [attending, setAttending] = useState('');
  const [users, setUsers] = useState([]);

  function handleChange(event) {
    setFirstName(event.target.value);
  }

  function handleOtherChange(event) {
    setLastName(event.target.value);
  }

  function handleThirdChange(event) {
    setAttending(event.target.value);
  }

  function handleSubmit(event) {
    const newUsers = [
      {
        id: id,
        firstName: firstName,
        lastName: lastName,
        attending: attending,
      },
      ...users,
    ];
    id++;
    setUsers(newUsers);
    setFirstName('');
    setLastName('');
    setAttending('');
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={firstName}
        placeholder="First name"
      />
      <input
        onChange={handleOtherChange}
        value={lastName}
        placeholder="Last name"
      />
      <br />
      <br />
      <button>Return</button>
      <br />
      <br />
      Guests:
      {users.map((user) => {
        return (
          <div key={`user-${user.id}`}>
            {user.firstName} {user.lastName}
            <label
              onChange={handleThirdChange}
              value={attending}
              aria-label="<first name> <last name> attending status"
            >
              Attending
              <input type="checkbox" />
            </label>{' '}
            <button>Remove</button>
          </div>
        );
      })}
    </form>
  );
}
