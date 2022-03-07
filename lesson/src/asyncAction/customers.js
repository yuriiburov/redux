import { addManyCustomersAction } from "../store/customerReducer";


const baseUrl = 'https://61c0aacf33f24c0017823540.mockapi.io/api/v1/bankUsers';

export const fetchCustomers = () => {
  return dispatch => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(json => dispatch(addManyCustomersAction(json)))
  }
}