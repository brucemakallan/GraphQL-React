import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import CREATE_USER from './user-queries';

const handleChange = (e, state, setState) => {
  e.preventDefault();
  const { value, name } = e.target;
  setState({ ...state, [name]: value });
};

const handleSubmit = (e, state, createUserMutation) => {
  e.preventDefault();
  createUserMutation({ variables: state });
};

const afterCreateUserMutation = (cache, { data: { createUser } }) => {
  console.log(createUser);
};

const Signup = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const {
    firstName, lastName, email, password
  } = state;

  const textFields = [
    { name: 'firstName', placeholder: 'First name', value: firstName },
    { name: 'lastName', placeholder: 'Last name', value: lastName },
    { name: 'email', placeholder: 'Email', value: email },
    {
      type: 'password', name: 'password', placeholder: 'Password', value: password
    },
  ];

  return (
    <Mutation mutation={CREATE_USER} update={afterCreateUserMutation}>
      {createUserMutation => (
        <form onSubmit={e => handleSubmit(e, state, createUserMutation)}>
          {textFields.map(field => (
            <input
              key={field.name}
              type={field.type || 'text'}
              name={field.name}
              id={field.name}
              placeholder={field.placeholder}
              onChange={e => handleChange(e, state, setState)}
              value={field.value}
            />
          ))}
          <button type="submit">Signup</button>
        </form>
      )}
    </Mutation>
  );
};

export default React.memo(Signup);
