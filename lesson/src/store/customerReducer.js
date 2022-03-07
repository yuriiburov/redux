const defaultState = {
  customers: []
}

export const ADD_CUSTOMERS = 'ADD_CUSTOMERS';
export const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS';
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ADD_CUSTOMERS:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMERS:
      return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
    case ADD_MANY_CUSTOMERS:
      return { ...state, customers: [...state.customers, ...action.payload] }
    default:
      return state;
  }
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMERS, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMERS, payload });
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
