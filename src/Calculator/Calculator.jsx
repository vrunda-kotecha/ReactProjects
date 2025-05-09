import './calculator.css';
import React,{useState}from'react';
const Calculator=()=>{
const [txt,setTxt]=useState("");
const [num1,setNum1]=useState(0);
const [op,setOp]=useState(0);
  return(
    <>
    <div className="App">
      <header className="App-header">
      <h1>Calculator</h1>
    <div class="calc">
        <input 
        type="text" 
        class="txt1" 
        value={txt}/>
        <input 
        type="submit" 
        class="btn1" 
        value="AC"
        onClick={()=> {setTxt("");}}/>
        <input 
        type="submit" 
        class="btn1" 
        value="+/-"
        onClick={()=> {setTxt(-txt);}}/>
        <input 
        type="submit" 
        class="btn1" 
        value="%"/>
        <input 
        type="submit" 
        class="btn2" 
        value="/"
        onClick={()=>{setNum1(txt);setTxt("");setOp(4);}}/>
        <br/>
        <input 
        type="submit" 
        class="btn3" 
        value="7"
        onClick={()=> {setTxt(txt+"7");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="8"
        onClick={()=> {setTxt(txt+"8");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="9"
        onClick={()=> {setTxt(txt+"9");}}/>
        <input 
        type="submit" 
        class="btn2" 
        value="x"
        onClick={()=>{setNum1(txt);setTxt("");setOp(3);}}/>
        <br/>
        <input 
        type="submit" 
        class="btn3" 
        value="4"
        onClick={()=> {setTxt(txt+"4");}}/>
        <input 
        type="submit"
         class="btn3" 
         value="5"
         onClick={()=> {setTxt(txt+"5");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="6"
        onClick={()=> {setTxt(txt+"1");}}/>
        <input 
        type="submit" 
        class="btn2" 
        value="-"
        onClick={()=>{setNum1(txt);setTxt("");setOp(2);}}/>
        <br/>
        <input 
        type="submit" 
        class="btn3" 
        value="1"
        onClick={()=> {setTxt(txt+"1");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="2"
        onClick={()=> {setTxt(txt+"2");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="3"
        onClick={()=> {setTxt(txt+"3");}}/>
        <input 
        type="submit" 
        class="btn2" 
        value="+"
        onClick={()=>{setNum1(txt);setTxt("");setOp("1");}}/>
        <br/>
        <input 
        type="submit" 
        class="btn3"
        value="."
        onClick={()=> {setTxt(txt+".");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value="0"
        onClick={()=> {setTxt(txt+"0");}}/>
        <input 
        type="submit" 
        class="btn3" 
        value=","
        onClick={()=> {setTxt(txt+",");}}/>
        <input 
        type="submit" 
        class="btn2" 
        value="="
        onClick={()=>{
          let ans=0;
          if (op==1)
          {
            ans=parseFloat(num1)+parseFloat(txt);
          }
          else if (op==2)
          {
            ans=parseFloat(num1)-parseFloat(txt);
          }
          else if (op==3)
          {
            ans=parseFloat(num1)*parseFloat(txt);
          }
          else if (op==4)
          {
            ans=parseFloat(num1)/parseFloat(txt);
          }
          setTxt(ans);
        }}/>
    </div>
         
      </header>
    </div>
    </>
  );
}

export default Calculator;
