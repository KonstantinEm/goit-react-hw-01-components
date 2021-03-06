import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={styles['status__on']} />
          ) : (
            <span className={styles['status__off']} />
          )}
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default FriendList;
