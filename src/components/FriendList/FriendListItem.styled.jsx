import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
	background-color: white;
	box-shadow: 2px 2px 4px black;
  padding: 8px 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px grey solid;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 16px;
  width: 60px;
`;

export const Name = styled.p`
  margin-left: 16px;
  font-size: 20px;
`;
