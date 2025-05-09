import './mcq.css'
import React,{useState} from'react'
function Mcqtest() {
const[num,setNum]=useState(["1","2","3","4","5",
    "6","7","8","9","10"]);
const[question,setQuestion]=useState(["1. What does CPU stand for?",
    "2. Which of the following is considered an input device?",
    "3. What is the full form of USB?",
    "4. Which device is used to input data into a computer?",
    "5. What does the acronym RAM stand for?",
    "6. Which of the following is considered a permanent storage device?",
    "7. Which of these is an example of an operating system?",
    "8. Which of the following is an example of a programming language?",
    "9. What does the www stand for in a website address?",
    ""]);
const[op1,setOp1]=useState(["A) Central Processing Unit",
    "A) Printer","A) Universal System Bus","A) Printer",
    "A) Read Access Memory",
    "A) RAM","A) Microsoft Word","A) Microsoft Excel",
    "A) World Web Wide",""]);
const[op2,setOp2]=useState(["B) Central Power Unit",
    "B) Monitor","B) Universal Serial Bus","B) Monitor",
    "B) Random Access Memory",
    "B) Hard Drive","B) Google Chrome","B) Python",
    "B) World Wide Web",""]);
const[op3,setOp3]=useState(["C) Computer Personal Unit",
    "C) Keyboard","C) United Serial Bus","C) Keyboard",
    "C) Real Access Memory",
    "C) Cache Memory","C) Windows 10","C) PowerPoint","C) World Web Web",
    ""]);
const[op4,setOp4]=useState(["D) Central Processor Unit",
    "D) Speaker","D) Unified Serial Bus","D) Speaker",
    "D) Rapid Access Memory",
    "D) CPU","D) Photoshop","D) Notepad","D) Worldwide Web",
    ""]);
const[ans,setAns]=useState(["A) Central Processing Unit",
    "C) Keyboard","B) Universal Serial Bus",
    "C) Keyboard","B) Random Access Memory",
    "B) Hard Drive","C) Windows 10",
    "B) Python","B) World Wide Web",
    ""]);
const [marks,setMarks]=useState(0);
const [selected,setSelected]=useState('');
const [ans2,setAns2]=useState(['','','','','','','','','',''])
const [currentQuestion, setCurrentQuestion] = useState(0);

function fun11(e,i,btnid)
{

    if(ans[currentQuestion]===selected)
    {
        setMarks(marks+1);
    }
    else
    {
        setMarks(marks+0);     
    } 
    document.getElementById(btnid).disabled="true";
    document.getElementById(btnid).style.backgroundColor="red";

// Store the user's answer for the current question
    const updatedAnswers = [...ans2];
    updatedAnswers[currentQuestion] = selected;
    setAns2(updatedAnswers);
    setSelected("");


    // Move to the next question or show results if it's the last question
    if (currentQuestion < question.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
}

const renderResults = () => {
    return (
      <div className="App">
        <header className="App-header2">
          <h1>RESULTS</h1>
          <h3>Total Marks: {marks}</h3>
          <br />
          {question.map((q, index) => {
            const userAnswer = ans2[index];
            const correctAnswer = ans[index];
  
            const isCorrect = userAnswer === correctAnswer;
            const answerClass = isCorrect ? "correct" : "incorrect";
  
            return (
              <div key={index} className="result-question">
                <strong>{q}</strong>
                <h4>
                  Your answer:{" "}
                  <span className={answerClass}>
                    {userAnswer || "Not Answered"}
                  </span>
                  <br />
                  Correct answer:{" "}
                  <span className="correct">
                    {correctAnswer}
                  </span>
                </h4>
                <hr />
              </div>
            );
          })}
        </header>
      </div>
    );
  };
   
  if (currentQuestion +1 >= question.length) {
    return renderResults(); // Show the results when all questions are answered
  }

function funbutton()
{
    const buttonLabels = ["1", "2", "3", "4","5", "6", "7", "8","9"
    ,"10"];
    const q = ["q1", "q2", "q3", "q4","q5", "q6", "q7", "q8","q9"
        ,"q10"];
    const buttonName =["button1","button2","button3","button4",
    "button5","button6","button7","button8","button9","button10"];
    const buttons = [];
    for (let i = 0; i < buttonLabels.length; i++) {
        buttons.push(
        <button className="qbtn" 
        key={i}
        name={buttonName[i]}
        id={buttonName[i]}
        onClick={(e)=>fun1(e,q[i])}
        >
            {buttonLabels[i]}
        </button>
        );
    }
  
    return <div>{buttons}</div>;  
}

function funquestions()
{
    const buttonLabels = ["1", "2", "3", "4","5", "6", "7", "8","9"
        ,"10"];
    const qid= ["q1", "q2", "q3", "q4","q5", "q6", "q7", "q8","q9"
    ,"q10"];
    const qName =["op1","op2","op3","op4"];
    const buttonName =["button1","button2","button3","button4",
        "button5","button6","button7","button8","button9","button10"];
    const divs= [];
  
    for (let i = 0; i < qid.length; i++) 
        {
        divs.push(
        <div id={qid[i]}>
            <div className="questions">
                {question[currentQuestion]}
            </div>
            <div className="radio">
                <input type="radio" 
                name={qName[i]}
                id={qName[i]} 
                checked={selected === op1[currentQuestion]}
                value={op1[currentQuestion]} 
                onChange={RadioChange}/>{op1[currentQuestion]}<br/>
                <input type="radio" 
                name={qName[i]}
                checked={selected === op2[currentQuestion]}
                id={qName[i]} 
                value={op2[currentQuestion]} 
                onChange={RadioChange}/>{op2[currentQuestion]}<br/>
                <input type="radio" 
                checked={selected === op3[currentQuestion]}
                name={qName[i]}
                id={qName[i]} 
                value={op3[currentQuestion]} 
                onChange={RadioChange}/>{op3[currentQuestion]}<br/>
                <input type="radio" 
                checked={selected === op4[currentQuestion]}
                name={qName[i]}
                id={qName[i]} 
                value={op4[currentQuestion]} 
                onChange={RadioChange}/>{op4[currentQuestion]}<br/>
            </div>
            <div>
            <button type="submit" 
            name={buttonName[i]} 
            id={buttonName[i]}
            className="q1btn" 
            onClick={(e)=>fun11(e,i,buttonName[currentQuestion])}
            >SUBMIT
            </button>
            </div>
        </div>
        );
    }
    return <div>{divs}</div>; 
}
function RadioChange(e,i)
{
    setSelected(e.target.value);
    
}


function fund()
{
    document.getElementById("q1").style.display='none';
    document.getElementById("q2").style.display='none';
    document.getElementById("q3").style.display='none';
    document.getElementById("q4").style.display='none';
    document.getElementById("q5").style.display='none';
    document.getElementById("q6").style.display='none';
    document.getElementById("q7").style.display='none';
    document.getElementById("q8").style.display='none';
    document.getElementById("q9").style.display='none';
    document.getElementById("q10").style.display='none';
}
function fun1 (e,i)
{  
    fund();
    document.getElementById(i).style.display= 'block';// Show the div
}
 
    
  return (
    <>
    <div className="App">
      <header className="App-header2">
      <h1>MCQ TEST</h1>
      <h6>Click on 1 to start</h6>
      <h2>{selected}</h2>
    
    {funbutton()}
        
        <br/>
        <input 
      id="tt1"
      name="tt1"
      type="tt1"
      class="q2btn"
      value={marks}
      />
{funquestions()}

      </header>
    </div>
    </>
  );
}

export default Mcqtest;
