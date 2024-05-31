import { useState } from 'react'

const Title = (props) => <h2>{props.txt}</h2>

const Button = (props) => <button onClick={props.handleclick}>{props.txt}</button>

const StatisticLine = (props) =>{
  return(
    <tr><td>{props.txt}</td> <td>{props.value}</td></tr>
  )
}

const Statistics = (props) =>{

  const total = props.feeds[0]+props.feeds[1]+props.feeds[2]

  const average = (((props.feeds[0]*1)+(props.feeds[2]*-1))/total).toFixed(1)

  const positive = (((props.feeds[0])/total)*100 ).toFixed(1)+ " %"


  if(props.feeds[0] + props.feeds[1] +props.feeds[2] === 0){
  return(
    <div>
      <Title txt="statistics"/>
      <p>No feedback given</p>
    </div>
  )
}
  else{
    return(
      <div>
      <Title txt="statistics"/>
      <table>
      <StatisticLine txt="good" value={props.feeds[0]}/>
      <StatisticLine txt="neutral" value={props.feeds[1]}/>
      <StatisticLine txt="bad" value={props.feeds[2]}/>
      <StatisticLine txt="all" value={total}/>
      <StatisticLine txt="average" value={average}/>
      <StatisticLine txt="positive" value={positive}/>
      </table>
      </div>
    )
  }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  
  return (
    <div>
      <Title txt="give feedback"/>
      <Button handleclick={() => setGood(good+1)} txt="good"/>
      <Button handleclick={() => setNeutral(neutral+1)} txt="neutral"/>
      <Button handleclick={() => setBad(bad+1)} txt="bad"/>
      <Statistics feeds={[good,neutral,bad]} />
    </div>
  )
}

export default App