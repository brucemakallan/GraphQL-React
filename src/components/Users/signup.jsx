import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import {
  Container, TextField, Box, Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import CREATE_USER from './user-queries';
import useStyles from './user-theme';
import Alert from '../Alert';

const handleChange = (e, state, setState) => {
  e.preventDefault();
  const { value, name } = e.target;
  setState({ ...state, [name]: value });
};

const handleSubmit = (e, state, createUserMutation) => {
  e.preventDefault();
  createUserMutation({ variables: state });
};

const Signup = ({ history: { push } }) => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const {
    firstName, lastName, email, password,
  } = state;

  const [alert, setAlert] = useState(false);
  const [validationErrors, setErrors] = useState([]);
  const [open, setOpen] = useState(true);

  const onClose = () => setOpen(false);

  const afterCreateUserMutation = (cache, { data: { createUser } }) => {
    const { errors, token } = createUser;
    if (errors && errors.length > 0) {
      setErrors(errors);
      setAlert(true);
      setOpen(true);
    } else if (token) {
      setErrors([]);
      setAlert(false);
      localStorage.setItem('token', createUser.token);
      push('/articles/');
    }
  };

  const textFields = [
    { name: 'firstName', placeholder: 'First name', value: firstName },
    { name: 'lastName', placeholder: 'Last name', value: lastName },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Email',
      value: email,
      autoComplete: 'username email'
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: password,
      autoComplete: 'current-password',
    },
  ];

  const classes = useStyles();

  return (
    <Mutation mutation={CREATE_USER} update={afterCreateUserMutation}>
      {createUserMutation => (
        <Box className={classes.signUpPage}>
          <Container maxWidth="sm" className={classes.signUpContainer}>

            {alert && <Alert open={open} onClose={onClose} descriptions={validationErrors} /> }

            <h1>Create an Account</h1>

            <form onSubmit={e => handleSubmit(e, state, createUserMutation)}>
              {textFields.map(field => (
                <TextField
                  key={field.name}
                  type={field.type || 'text'}
                  name={field.name}
                  id={field.name}
                  label={field.placeholder}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  value={field.value}
                  className={classes.textFields}
                  margin="normal"
                  fullWidth
                  required
                  onChange={e => handleChange(e, state, setState)}
                />
              ))}
              <Button type="submit" variant="contained" color="primary" className={classes.button}>
                Signup
              </Button>
            </form>
          </Container>
        </Box>
      )}
    </Mutation>
  );
};

Signup.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default React.memo(Signup);
