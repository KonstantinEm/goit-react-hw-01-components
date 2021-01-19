import React from 'react';
import './App.css';

import usersCard from './dataBase/user.json';
import statisticalData from './dataBase/statistical-data.json';
import friends from './dataBase/friends.json';
import transactions from './dataBase/transactions.json';

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import Transactions from './components/transactions/Transactions';
import FriendList from './components/friendsList/FriendsList';

function App() {
  return (
    <>
      <Profile
        name={usersCard.name}
        tag={usersCard.tag}
        location={usersCard.location}
        avatar={usersCard.avatar}
        stats={usersCard.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />
    </>
  );
}

export default App;
