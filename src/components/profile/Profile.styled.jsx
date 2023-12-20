import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: block;
	margin-top: 20px;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px grey solid;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Photo = styled.img`
  width: 100px;
`;

export const Name = styled.p`
	font-size: 24px;
	font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
`;
export const Tag = styled.p`
	font-size: 18px;
	font-weight: 500;
  margin-top: 16px;
  margin-bottom: 0;
  color: grey;
`;

export const Location = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  box-sizing: border-box;
  width: 140px;
  height: 140px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px grey solid;
  border-right: 1px grey solid;
  border-top: 2px grey solid;
  background-color: #b5d8fb;
`;

export const Label = styled.span`
  display: block;
  color: grey;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
`;
