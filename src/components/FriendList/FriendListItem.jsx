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
