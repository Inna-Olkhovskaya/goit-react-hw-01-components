import PropTypes from 'prop-types';

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
        <li className="item">
          <span className="label">{stats.label}</span>
          <span className="percentage">{stats.percentage}</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
