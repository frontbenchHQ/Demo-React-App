import Button from 'react-bootstrap/Button';

const Card = ({ title, buttonTitle, showScore, score = 0, handleClick }) => {

  const defaultButtonHandler = () => {
    console.log("Not doing Anything");
  }
  return (
    <div className="border border-dark m-4 p-4 mb-4">
      <h2>{title}</h2>
      {/** Score Item */}
      {
        showScore && (<p className="score">{score}</p>)
      }
      {/** Score Handler */}
      <Button className="btn" onClick={handleClick || defaultButtonHandler} >{buttonTitle}</Button>
    </div>
  )
}

export default Card;