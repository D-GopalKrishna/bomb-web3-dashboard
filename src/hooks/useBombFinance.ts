import {useContext} from 'react';
import {Context} from '../contexts/BombFinanceProvider';

const useBombFinance = () => {
  const {bombFinance} = useContext(Context);
  // console.log("useBombFinance", bombFinance)
  return bombFinance;
};

export default useBombFinance;
