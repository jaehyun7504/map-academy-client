import { makeStyles } from '@material-ui/styles';
import sizes from './_sizes';

const useStyles = makeStyles({
  MenuDrawer: {
    display: 'none',
    [sizes.down('md')]: {
      display: 'block',
    },
    '& Button': {
      marginLeft: '-2rem',
      fontSize: '1.8rem',
      color: '#f5f5f7',
      opacity: '0.8',
      transition: 'opacity 0.1s ease-out',
      '&:hover': {
        opacity: '0.9',
      },
      [sizes.down('md')]: {
        fontSize: '2rem',
      },
    },
  },
  list: {
    width: '25rem',
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    color: 'rgba(245, 245, 247, 0.8)',
    boxShadow: '0 -2px 10px 10px rgba(255, 255, 255, 0.5)',
  },
  fullList: {
    width: 'auto',
  },
  item: {
    fontSize: '1.6rem',
    '&:not(:last-of-type)': {
      borderBottom: '1px solid rgba(245, 245, 247, 0.2)',
    },
  },
});

export default useStyles;
