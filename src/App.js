import { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:4000';

let response = await fetch(`${baseUrl}/guests`);
const allGuests = await response.json();

let guestList = [
  { firstName: 'First', lastName: 'Meier', attending: true },
  { firstName: 'Second', lastName: 'Berger', attending: false },
];

export default function App() {
  const [firstName, setFirstName] = useState('');
  function handleChange(event) {
    setFirstName(event.target.value);
  }
  const [lastName, setLastName] = useState('');
  function handleOtherChange(event) {
    setLastName(event.target.value);
  }

  return (
    <div>
      Guests:
      {guestList.map((guest) => {
        return (
          <div key={`guest-div-${guest.firstName}`}>
            <br />
            Name: {guest.firstName} {guest.lastName}
            <br />
            Attending: {guest.attending}
            <br />
          </div>
        );
      })}
      <form>
        <br />
        <p>Please enter the guest's name here:</p>
        <label>
          First name
          <br />
          <input onChange={handleChange} value={firstName} />
        </label>
        <br />
        <br />
        <label>
          Last name
          <br />
          <input onChange={handleOtherChange} value={lastName} />
        </label>
        <br />
        <br />
        <label aria-label="<first name> <last name> attending status">
          Attending
          <input type="checkbox" />
        </label>{' '}
        <br />
        <br />
        <button>Return</button>
        <br />
        <br />
        <button>Remove</button>
      </form>
    </div>
  );
}
