import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statdisplay = (props) => (
  <div>
    {props.text} {props.value} {props.suffix}
  </div>
)

const Statistics = (props) => {

  console.log('Statistics properties', props);
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;

  return (
    <div>
      <h1>statistics</h1>
      <Statdisplay text={"good"} value={props.good} suffix = "" />
      <Statdisplay text={"neutral"} value={props.neutral} suffix = "" />
      <Statdisplay text={"bad"} value={props.bad} suffix = "" />
      <Statdisplay text={"all"} value={all} suffix = "" />
      <Statdisplay text={"average"} value={average} suffix = "" />
      <Statdisplay text={"positive"} value={positive} suffix = "%" />
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"} />
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={()=>setBad(bad+1)} text={"bad"} />
      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />      
    </div>
  )
}

export default App;
