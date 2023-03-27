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

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"} />
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={()=>setBad(bad+1)} text={"bad"} />
      <br />
      <h1>statistics</h1>
      <Statdisplay text={"good"} value={good} suffix = "" />
      <Statdisplay text={"neutral"} value={neutral} suffix = "" />
      <Statdisplay text={"bad"} value={bad} suffix = "" />
      <Statdisplay text={"all"} value={all} suffix = "" />
      <Statdisplay text={"average"} value={average} suffix = "" />
      <Statdisplay text={"positive"} value={positive} suffix = "%" />
    </div>
  )
}

export default App;
