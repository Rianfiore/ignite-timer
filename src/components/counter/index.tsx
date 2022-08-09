import { useState } from 'react';


const SECOND_DEFAULT = 300;

export const Counter = () => {

const [seconds, setSeconds] = useState(SECOND_DEFAULT);

const secondsToTime = (secs: number) => {
  //uma hora tem 3600 segundos
  const divisorMinute = secs % 3600;

  const minutes = Math.floor( divisorMinute / 60);
  const seconds = Math.ceil( divisorMinute % 60);

  //retornar uma string e concatenar minutos por sengundos
  //a função padStart vai manter os digitos a esquerda, o "2" é quantidade de digitos, o "0" o número que vai retornar na tela
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
;}


const startTimer = () => {
  setInterval(() => {
    setSeconds((previousSeconds) => {
      return previousSeconds - 1;
    })
  }, 1000)
}

return (
  <div>
    <h1>{secondsToTime(seconds)}</h1>
    <button onClick={() => startTimer()}>start</button>
  </div>
  )
}
