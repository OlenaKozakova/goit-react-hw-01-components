import React from "react";
import Profile from './components/profile/Profile';
import FriendList from './components/FriendList/friendList';
import Statistics from './components/Statistics/statistics';
import Transactions from './components/transaction/transaction';
import user from './components/profile/Profile.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import transactionData from './components/transaction/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <Transactions items={transactionData} />
  </div>
);

export default App;
