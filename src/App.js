import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './state';
import { bindActionCreators } from 'redux'

function App() {

  const account = useSelector((state) => state.account);

  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);
  




  return (
    <div className="App">
      <h1>{ account }</h1>
      <button onClick={()=>{depositMoney(1000)}}>Deposit</button>
      <button onClick={()=>{withdrawMoney(1000)}}>Withdrow</button>
    </div>
  );
}

export default App;
