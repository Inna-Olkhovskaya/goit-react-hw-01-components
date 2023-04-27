import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return <ul className="friend-list"></ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
