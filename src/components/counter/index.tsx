import { useEffect, useState } from 'react';
import './style.scss'
import {Icon} from 'components'

const SECOND_DEFAULT = 600;

export const Counter = () => {

const [changeTimer, setChangeTimer] = useState<string>('stop');
const [seconds, setSeconds] = useState<number>(SECOND_DEFAULT);

const secondsToTime = (secs: number) => {
  //uma hora tem 3600 segundos
  const divisorMinute = secs % 3600;

  const minutes = Math.floor( divisorMinute / 60);
  const seconds = Math.ceil( divisorMinute % 60);

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

useEffect(() => {

  setTimeout(() => {
    changeTimer === 'start' && setSeconds(seconds - 1)
  }, 1000)

}, [changeTimer, seconds])

return (
  <div className='container'>
    {secondsToTime(seconds)}
    {changeTimer === 'start' ? (
       <button className='button button--stop' onClick={() => setChangeTimer('stop')}>
       <Icon icon = 'play' alt = 'stop icon' />
       Parar
       </button>
    ) : (
       <button className='button button--start' onClick={() => setChangeTimer('start')}>
       <Icon icon = 'play' alt = 'play icon' />
       Começar
       </button>
    )}
  </div>
  )
}
