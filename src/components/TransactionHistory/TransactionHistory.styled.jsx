import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-top: 20px;
	margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  text-align: center;
  border: 2px grey solid;
	background-color: white;
	box-shadow: 2px 2px 4px black;
	thead {
  color: #ffffff;
  background-color: #add8e6;
	}
	tr:nth-child(2n+2) {
		background-color: #d3d3d3;
}
`;