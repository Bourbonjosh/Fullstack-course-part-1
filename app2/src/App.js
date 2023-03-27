import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td> 
    <td>{props.value} {props.suffix}</td>
  </tr>
)

const Statistics = (props) => {

  console.log('Statistics properties', props);
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }


  return (
    <div>
      <h1>statistics</h1>      
      <table>
        <tbody>
          <StatisticLine text={"good"} value={props.good} suffix = "" />
          <StatisticLine text={"neutral"} value={props.neutral} suffix = "" />
          <StatisticLine text={"bad"} value={props.bad} suffix = "" />
          <StatisticLine text={"all"} value={all} suffix = "" />
          <StatisticLine text={"average"} value={average} suffix = "" />
          <StatisticLine text={"positive"} value={positive} suffix = "%" />
        </tbody>
      </table>      
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
