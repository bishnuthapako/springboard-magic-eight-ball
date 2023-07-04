import React, {useState} from 'react';
import './App.css';

function EightBall() {
  const randomAns =()=>{
    const answer = [
      { msg: "It is certain.", color: "green" },
      { msg: "It is decidedly so.", color: "green" },
      { msg: "Without a doubt.", color: "green" },
      { msg: "Yes - definitely.", color: "green" },
      { msg: "You may rely on it.", color: "green" },
      { msg: "As I see it, yes.", color: "green" },
      { msg: "Most likely.", color: "green" },
      { msg: "Outlook good.", color: "green" },
      { msg: "Yes.", color: "green" },
      { msg: "Signs point to yes.", color: "goldenrod" },
      { msg: "Reply hazy, try again.", color: "goldenrod" },
      { msg: "Ask again later.", color: "goldenrod" },
      { msg: "Better not tell you now.", color: "goldenrod" },
      { msg: "Cannot predict now.", color: "goldenrod" },
      { msg: "Concentrate and ask again.", color: "goldenrod" },
      { msg: "Don't count on it.", color: "red" },
      { msg: "My reply is no.", color: "red" },
      { msg: "My sources say no.", color: "red" },
      { msg: "Outlook not so good.", color: "red" },
      { msg: "Very doubtful.", color: "red" },
    ];

    let idx = Math.floor(Math.random() * answer.length);
    let randomAnswer = answer[idx];
    return randomAnswer;
  }

 const [answer, setAnswer] = useState("Think of a Question");
 const [colors, setColors] = useState("black");
 const [random, setRandom] = useState();
 const [count, setCount] = useState(0);



 console.log(colors, 'color');
 console.log(answer, 'ans');
 console.log(count, 'count')

 const handleClick =()=>{
  setRandom(randomAns())
  setColors(random.color);
  setAnswer(random.msg);
  setCount(count + 1)
 }

 const handleNewGame = ()=>{
   setAnswer("Think of a Question")
   setColors("black");
   setCount(0)
   setRandom(randomAns())
 }

  return (

   <>
   <div className="col">
    <div className="col d-flex justify-content-center align-items-center">
    {
        count >= 20 ? <h1>Game Over</h1>:
        <div onClick={handleClick} className='circle color rounded-circle d-flex justify-content-center align-items-center' style={{backgroundColor: colors}}>
        <p className='text-light'>{answer}</p>
        </div>
      }
   
    </div>
    <br/>
    {count >= 20 && <div className="col d-flex justify-content-center">
      <button onClick={handleNewGame} type='button' className='btn btn-warning btn-lg'>New Game</button>
    </div>}
   </div>
   </>
   

  )
}

export default EightBall