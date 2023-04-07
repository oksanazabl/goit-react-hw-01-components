// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import randomColor from '../../utils/randomColor'

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item}
            key={id}style={{backgroundColor:randomColor()}}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}

        {/* <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li>
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}</span>
    </li> */}
      </ul>
    </section>
  );
};

export default Statistics;
