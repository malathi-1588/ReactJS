import './App.css';
import InputField from './Components/InputField';
import Click from './Components/Click';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [si, setSi] = useState('');
  const [ci, setCi] = useState('');

  //simple interest function
  const calcSI = (e) =>{
    setSi(parseFloat(amount) * (parseFloat(interest)/100) * (parseFloat(time)))
  }
  //compound interest function
  const calcCI = (e) =>{
    setCi(parseFloat(amount) * Math.pow((1+parseFloat(interest)/100), parseFloat(time)) - parseFloat(amount))
  }

  const Reset = () =>{
    setAmount('');
    setTime('');
    setInterest('');
    setSi('');
    setCi('');
}

  return (
    <div>
      <h1>Interest Calculator</h1>
      <InputField type = 'text' placeholder = 'Principal Amount' value = {amount} func = {(e)=> setAmount(e.target.value)}></InputField>
      <InputField type = 'text' placeholder = 'Rate of interest (p.a)' value={interest} func = {(e)=> setInterest(e.target.value)}></InputField>
      <InputField type = 'text' placeholder = 'Time Period' value={time} func = {(e)=> setTime(e.target.value)}></InputField>
      <br></br>
      &nbsp;<Click var = 'primary' type='submit' name = 'Simple Interest' func={calcSI}></Click>
      &nbsp;
      &nbsp;<Click var = 'info' type='submit' name = 'Compound Interest' func={calcCI}></Click>
      &nbsp;
      &nbsp;<Click var = 'danger' name = 'Reset' func={Reset}></Click>
      <InputField type = 'text' placeholder = 'SI' value = {si}></InputField>
      <InputField type = 'text' placeholder = 'CI' value = {ci}></InputField>
    </div>
  );
}

export default App;
