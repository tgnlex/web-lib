import {useState} from 'react';

export default function EditableForm() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
     <button type="edit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <br/><br/>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label><br/>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label><br/><br/>    
      <p><i>Hello, {firstName} {lastName}!</i></p>
    </form>
  );
}