import styled from "styled-components";

export const StatisticsStyle = styled.section`
	display: block;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 8px;
  border: 2px grey solid;
	background-color: white;
	box-shadow: 2px 2px 4px black;
  h2 {
    text-align: center;
  }
	ul {
		display: flex;
	}
`

export const StatItem = styled.li`
  border-top: 2px grey solid;
	display: flex;
  flex-direction: column;
  padding: 20px 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
