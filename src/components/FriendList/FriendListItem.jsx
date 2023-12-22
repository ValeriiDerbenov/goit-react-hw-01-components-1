import PropTypes from 'prop-types';
import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, status, url }) => {
  return (
    <Friend>
      <Status status={status}></Status>
      <Avatar src={url} />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
      name: PropTypes.string,
      status: PropTypes.bool,
      url: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    };