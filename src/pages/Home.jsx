import Card from '../components/Card'
import {useState} from 'react'

const Home = () => {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score+1)
  }

  const [searchText, setSearchText] = useState('');

  return (
    <>
     <Card title="Score Counter" buttonTitle="Click Here" showScore score={score} handleClick={updateScore} />
     <Card title="Another Card" buttonTitle="Do Something" showScore={false} />
     <div className="border border-dark m-4 p-4 mb-4">
        <h2>Testing Input</h2>
        <input name="textSearch" placeholder="Type here" value={searchText} onChange={(event) => {setSearchText(event.target.value)}} />
        <h3>{searchText}</h3>
     </div>
    </>
  )
}

export default Home;