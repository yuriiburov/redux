import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import store from './store';
import { removeUser, setUser } from './user.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 77, name: 'chease' }));
store.dispatch(removeProduct(76));
store.dispatch(setUser({ name: 'Isaak' }));
