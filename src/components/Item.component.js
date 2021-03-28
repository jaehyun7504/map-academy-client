import React, { useContext, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IsAuthContext } from '../contexts/isAuth.context';
import { TokenContext } from '../contexts/token.context';
import useStyles from '../styles/Item.styles';

function Item({ type, item, i, p, deleteItem, match, history }) {
  const isAuth = useContext(IsAuthContext);
  const token = useContext(TokenContext);

  const [show, setShow] = useState(false);

  const classes = useStyles({ show });

  const order = (10 * (p - 1) + i + 1 + '').padStart(2, '0');

  const toggleConfirm = () => {
    setShow(!show);
  };
  const handleUpdate = () => {
    history.push(`/update/${type}/${item._id}`);
  };
  const handleDelete = () => {
    fetch(`https://www.mapacademyapi.com/api/${type}/${item._id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => {
        deleteItem(item._id);
        toggleConfirm();
      })
      .catch(err => console.error(err));
  };

  let button = null;
  if (isAuth) {
    button = (
      <>
        <button className={classes.button} onClick={handleUpdate}>
          수정
        </button>
        <button className={classes.button} onClick={toggleConfirm}>
          삭제
        </button>
      </>
    );
  }

  return (
    <>
      <div className={classes.backdrop} onClick={toggleConfirm} />
      <div className={classes.confirm}>
        <div className={classes.close} onClick={toggleConfirm}>
          <i className="fas fa-times" />
        </div>
        <h3 className={classes.message}>선택하신 글을 삭제하시겠습니까?</h3>
        <button className={classes.confirmButton} onClick={handleDelete}>
          확인
        </button>
      </div>
      <tr className={classes.Item}>
        <td className={classes.col}>{order}</td>
        <td className={classes.col}>
          <div className={classes.container}>
            <Link className={classes.link} to={`${match.url}/${item._id}`}>
              {item.title}
            </Link>
            {button}
          </div>
        </td>
        <td className={classes.col}>{item.date}</td>
      </tr>
    </>
  );
}

export default withRouter(Item);
