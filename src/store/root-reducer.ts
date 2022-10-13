import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './reducers/app-reducer';
import blockchainReducer from './reducers/blockchain-reducer';
// import contractInfoReducer from './reducers/contract-info-reducer';

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  app: appReducer,
  //   contractInfo: contractInfoReducer,
});
export default rootReducer;
