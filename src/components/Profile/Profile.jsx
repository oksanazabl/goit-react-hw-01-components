import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className={css.profile}>{name}</p>
        <p className={css.profile}>@{tag}</p>
        <p className={css.profile}>{location}</p>
      </div>

      <ul className={css.profile}>
        <li>
          <span className={css.profile}>Followers</span>
          <span className={css.profile}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.profile}>Views</span>
          <span className={css.profile}>{stats.views}</span>
        </li>
        <li>
          <span className={css.profile}>Likes</span>
          <span className={css.profile}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
