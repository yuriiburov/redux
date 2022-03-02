import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  return (
    <div className="app">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <span className="count">{cash}</span>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
    </div>
  );
};

export default App;
