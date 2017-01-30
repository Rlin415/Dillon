import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { mediums } from './reducers/mediums';

export default compose(applyMiddleware(thunk))(createStore)(mediums);
