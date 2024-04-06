import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import userData from '../import/user.json'
import stats from '../import/statistics.json'
import friends from '../import/friends.json';
import transactions from '../import/transaction-history.json';

export const App = () => {
  return (
    <div>
      <Profile userData={userData} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
