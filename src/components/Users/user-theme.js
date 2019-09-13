import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  signUpPage: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(45deg, rgba(210,250,255,1) 0%, rgba(74,200,223,1) 100%)',
  },
  signUpContainer: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '30px',
    backgroundColor: 'white',
  },
  button: {
    marginTop: '1rem',
  }
});

export default useStyles;
