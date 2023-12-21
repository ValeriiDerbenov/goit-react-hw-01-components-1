import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Friends } from './FriendList.styled';


export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id} status={isOnline} url={avatar} name={name} />
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
