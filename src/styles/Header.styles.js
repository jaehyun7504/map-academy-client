import { makeStyles } from '@material-ui/styles';
import sizes from './_sizes';

const useStyles = makeStyles({
  Header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '4.4rem',
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    zIndex: '5',
    [sizes.down('md')]: {
      height: '48px',
    },
  },
  container: {
    maxWidth: '1366px',
    height: '100%',
    margin: '0 auto',
    padding: '0 2.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    textDecoration: 'none',
    fontFamily: 'Comfortaa, cursive',
    fontSize: '1.8rem',
    fontWeight: '300',
    color: '#f5f5f7',
    [sizes.down('md')]: {
      fontSize: '2rem',
    },
  },
  button: {
    padding: '0.6rem 1rem',
    backgroundImage: 'linear-gradient(to bottom, #0575e6, #021b79)',
    border: '0',
    borderRadius: '3px',
    fontSize: '1.35rem',
    color: '#f5f5f7',
    opacity: '0.9',
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, #0575e6, #021b79)',
    },
    '&:active': {
      backgroundImage: 'none',
      backgroundColor: '#021b79',
    },
    [sizes.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  login: {
    width: '6.92rem',
    display: ({ isAuth }) => (!isAuth ? 'block' : 'none'),
  },
  signout: {
    display: ({ isAuth }) => (isAuth ? 'block' : 'none'),
  },
});

export default useStyles;
