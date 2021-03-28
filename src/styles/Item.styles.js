import { makeStyles } from '@material-ui/styles';
import sizes from './_sizes';

const useStyles = makeStyles({
  Item: {
    width: '100%',
    height: '4rem',
  },
  col: {
    height: '100%',
    border: '1px solid transparent',
    '&:nth-of-type(1), &:nth-of-type(3)': {
      fontSize: '14px',
      [sizes.down('sm')]: {
        display: 'none',
      },
    },
    '&:nth-of-type(2)': {
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    },
  },
  container: {
    position: 'relative',
    width: '59.5vw',
    padding: '9px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'justify',
    marginRight: 'auto',
    [sizes.down('sm')]: {
      width: '78.5vw',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'currentColor',
    borderBottom: '1px solid transparent',
    '&:hover': {
      borderBottom: '1px solid currentColor',
    },
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '3px 6px',
    backgroundImage: 'linear-gradient(to bottom, #0575e6, #021b79)',
    border: '0',
    borderRadius: '3px',
    fontSize: '1.4rem',
    color: '#f5f5f7',
    opacity: '0.9',
    outline: 'none',
    cursor: 'pointer',
    '&:first-of-type': {
      right: '4.6rem',
    },
    '&:last-of-type': {
      right: '0',
    },
    '&:hover': {
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(to bottom, #0575e6, #021b79)',
    },
    '&:active': {
      backgroundImage: 'none',
      backgroundColor: '#021b79',
    },
  },
  backdrop: {
    display: ({ show }) => (show ? 'block' : 'none'),
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))',
    zIndex: '10',
  },
  confirm: {
    display: ({ show }) => (show ? 'flex' : 'none'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '36rem',
    height: '32rem',
    paddingTop: '2rem',
    backgroundColor: '#e6e6e6',
    borderRadius: '7px',
    boxShadow: '0 2px 10px 10px rgba(0, 0, 0, 0.1)',
    zIndex: '20',
    [sizes.down('xs')]: {
      width: '32rem',
    },
  },
  close: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    fontSize: '2rem',
    color: '#333',
    cursor: 'pointer',
    [sizes.down('xs')]: {
      top: '1.5rem',
      right: '1.5rem',
    },
  },
  message: {
    fontSize: '1.9rem',
    fontWeight: '300',
    marginBottom: '2rem',
  },
  confirmButton: {
    padding: '0.6rem 1rem',
    backgroundImage: 'linear-gradient(to bottom, #0575e6, #021b79)',
    border: '0',
    borderRadius: '3px',
    fontSize: '1.4rem',
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
  },
});

export default useStyles;
