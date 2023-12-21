import PropTypes from "prop-types";
import { StatItem, StatisticsStyle } from "./Statistics.styled";
import { getRandomHexColor } from "./getRandomHexColor";


export const Statistics = ({ title, stats }) => {
	return (
		<StatisticsStyle className="statistics">
  {title && <h2>{title}</h2>}

  <ul>{
		stats.map(item => (
			<StatItem key={item.id}
			style={{ backgroundColor: getRandomHexColor() }}>
				<span className="label">{item.label}</span>
      <span className="percentage">{item.percentage}%</span>
			</StatItem>
		))}
  </ul>
</StatisticsStyle>
	);
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
