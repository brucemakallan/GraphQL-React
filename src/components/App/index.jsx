import React from 'react';
import './App.scss';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
  );
};

export default App;
