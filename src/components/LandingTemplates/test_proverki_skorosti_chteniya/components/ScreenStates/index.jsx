import * as React from "react";
import { useEffect, useState } from "react";
import { Screen1 } from '../Screen1'
import { ScreenReading } from '../ScreenReading'
import { ScreenTest } from '../ScreenTest'
import { ScreenResult } from '../ScreenResult'
export const ScreenStates = ( {widget} ) => {

  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [endedAt, setEndedAt] = useState(0)
  const [readed, setReaded] = useState(false)
  const [done, setDone] = useState(false)
  const [result, setResult] = useState([])
  const [time, setTime] = useState(0)
  const [interval, changeInterval] = useState(null);

  useEffect(() => {
    const startedAtFirst = Date.now;
    if (!start) {
      return
    }

    setStartedAt(startedAtFirst)
    changeInterval(
      setInterval(() => setTime(time => time + 1), 1000));
    }, [start])

  useEffect(() => {
    setEndedAt(Date.now)
    clearInterval(interval)
  }, [end])

  return (
    <>
      {!start && <Screen1 onStart={setStart}/>}
      {!readed && start && <ScreenReading onReaded={setReaded} stopTimer={setEnd} time={time}/> }
      {start && readed && !done && <ScreenTest isDone={setDone} onResult={setResult} /> }
      {done && <ScreenResult timeStart={startedAt} timeEnd={endedAt} answers={result} widget={widget}/>}
    </>
  );
}
