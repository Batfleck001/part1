import { useState } from 'react'


const Mostvoted = (props) =>{
  let maxInd = 0;
  let maxNumb = props.points[0]

  for(let i=1;i<props.points.length;i++){
    if(props.points[i] > maxNumb){
      maxNumb = props.points[i]
      maxInd = i;
    }
  }
  return(
    <div>
      <p>{props.anecdotes[maxInd]}</p>
      <p>had {maxNumb} votes.</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [points,setpoints] = useState([0,0,0,0,0,0,0,0])
  const [selected, setSelected] = useState(0)
  const nextanecdote = () =>{
    console.log(anecdotes.length)
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addvote = () =>{
    
    setpoints(() =>{
    const copy = [...points]
    copy[selected] += 1
    return copy
  })
  }

  

  console.log(points)
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={addvote}>vote</button>
      <button onClick={nextanecdote}>next anecdotes</button>
      <h2>Anecdote with most votes</h2>
      <Mostvoted points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App