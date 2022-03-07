import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCashAction, getCashAction } from "./store/cashReducer";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncAction/customers";

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getCash = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="app">
      <div className='app-container'>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <span className="count">{cash}</span>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>

      <div className='app-container'>
        <button onClick={() => addCustomer(prompt())}>
          Добавить клиента
        </button>
        <div className='clients'>
          {customers.length > 0
            ? <div className='clients'>{customers.map(customer =>
              <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)}</div>
            : <div className='clients'>Клиенты отсутствуют!</div>}
        </div>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить клиентов из базы
        </button>
      </div>
    </div>
  );
};

export default App;
