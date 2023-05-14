import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
  <table className={css['transaction-history']}>
    <thead className={css['transaction-head']}>
      <tr>
        <th className={css['transaction-title']}>Type</th>
        <th className={css['transaction-title']}>Amount</th>
        <th className={css['transaction-title']}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={css['transaction-row']}>
          <td className={css['transaction-cell']}>{item.type}</td>
          <td className={css['transaction-cell']}>{item.amount}</td>
          <td className={css['transaction-cell']}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  itemss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
