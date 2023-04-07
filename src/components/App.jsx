import Profile from './profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'data/user.json';
import data from 'data/data.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}
    </div>
  );
};

export default App;
