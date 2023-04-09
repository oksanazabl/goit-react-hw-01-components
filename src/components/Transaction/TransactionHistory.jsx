import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.td_left_text}>{type}</td>
            <td className={css.td_center_text}>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propType = {
    items: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };

export default TransactionHistory;