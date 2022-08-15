import { useState } from 'react';
import './style.scss'
import {Icon} from 'components'

const SECOND_DEFAULT = 600;

export const Counter = () => {

const [seconds, setSeconds] = useState(SECOND_DEFAULT);

const secondsToTime = (secs: number) => {
  //uma hora tem 3600 segundos
  const divisorMinute = secs % 3600;

  const minutes = Math.floor( divisorMinute / 60);
  const seconds = Math.ceil( divisorMinute % 60);

  //retornar uma string e concatenar minutos por sengundos
  //a função padStart vai manter os digitos a esquerda, o "2" é quantidade de digitos, o "0" o número que vai retornar na tela
  // return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  return (
    <div className='content'>
      <span className='content__number-timer'>{`${String(minutes).padStart(2, '0')[0]}`}</span>
      <span className='content__number-timer'>{`${String(minutes).padStart(2, '0')[1]}`}</span>
      <div className='content__divider'>
        <span className='content__circle'></span>
        <span className='content__circle'></span>
      </div>
      <span className='content__number-timer'>{`${String(seconds).padStart(2, '0')[0]}`}</span>
      <span className='content__number-timer'>{`${String(seconds).padStart(2, '0')[1]}`}</span>
    </div>
  )
;}

const startTimer = () => {
  setInterval(() => {
    setSeconds((previousSeconds) => {
      return previousSeconds - 1;
    })
  }, 1000)
}

return (
  <div className='container'>

      {secondsToTime(seconds)}
   
    <button className='button' onClick={() => startTimer()}>
    <Icon icon = 'play' alt = 'play icon' />
    Começar
    </button>
  </div>
  )
}
