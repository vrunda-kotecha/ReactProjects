import './multiplex.css'
import React,{useState}from'react'

function Multiplex() {
  const [seat,setSeat]=useState(["1","2","3","4","5","6",
    "7","8","9","10","11","12","13","14","15","16","17","18",
    "19","20","21","22","23","24","25","26","27","28","29",
    "30","31","32","33","34","35","36","37","38","39","40",
    "41","42","43","44","45","46","47","48","49","50","51","52",
    "53","54","55","56","57","58","59","60","61","62","63","64","65"
    ,"66","67","68","69","70","71","72","73","74","75","76",
    "77","78","79","80","81","82","83","84","85","86","87","88",
    "89","90","91","92","93","94","95","96","97","98"]);
    const [total, settotal]=useState(0);
    
    function fun (e,i)
    {
        if (seat[i]=="o")
        {
            settotal(total-280);
            e.target.style.backgroundColor="white";
            e.target.style.color="rgb(8, 183, 8)";
            seat[i]=i+1;
        }
        else 
        {
            seat[i]="o";
            settotal(total+280);
            e.target.style.backgroundColor="rgb(8, 183, 8)";
            e.target.style.color="white";
        }
    }
    function fun1 (f,g)
    {
        if (seat[g]=="o")
        {
            settotal(total-130);
            f.target.style.backgroundColor="white";
            f.target.style.color="rgb(8, 183, 8)";
            seat[g]=g+1;
        }
        else 
        {
            seat[g]="o";
            settotal(total+130);
            f.target.style.backgroundColor="rgb(8, 183, 8)";
            f.target.style.color="white";
        }
    }

  return (
    <>
    <div className="App">
      <header className="App-header1">
      <h1>Cineplex</h1>
      <div className="mul">
      <h5>Rs. 280 Recliner</h5>
      <hr/>
        <button type="submit" name="button1" id="button1"
        className="m1btn" onClick={(e)=>fun(e,0)}>{seat[0]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,1)}>{seat[1]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,2)}>{seat[2]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,3)}>{seat[3]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,4)}>{seat[4]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,5)}>{seat[5]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,6)}>{seat[6]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(e)=>fun(e,7)}>{seat[7]}
        </button>
        <h5>Rs. 130 Premium</h5>
      <hr/>
        <button type="submit" name="button1" id="button1"
        className="m2btn" onClick={(f)=>fun1(f,8)}>{seat[8]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(f)=>fun1(f,9)}>{seat[9]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn" onClick={(f)=>fun1(f,10)}>{seat[10]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn" onClick={(f)=>fun1(f,11)}>{seat[11]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,12)}>{seat[12]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,13)}>{seat[13]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,14)}>{seat[14]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,15)}>{seat[15]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,16)}>{seat[16]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,17)}>{seat[17]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,18)}>{seat[18]}
        </button><button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,19)}>{seat[19]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,20)}>{seat[20]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,21)}>{seat[21]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,22)}>{seat[22]}
        </button>
        <br/>
        <button type="submit" name="button1" id="button1"
        className="m2btn"onClick={(f)=>fun1(f,23)}>{seat[23]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,24)}>{seat[24]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn"onClick={(f)=>fun1(f,25)}>{seat[25]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,26)}>{seat[26]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,27)}>{seat[27]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,28)}>{seat[28]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,29)}>{seat[29]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,30)}>{seat[30]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,31)}>{seat[31]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,32)}>{seat[32]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,33)}>{seat[33]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,34)}>{seat[34]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,35)}>{seat[35]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,36)}>{seat[36]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,37)}>{seat[37]}
        </button>
        <br/>
        <button type="submit" name="button1" id="button1"
        className="m2btn"onClick={(f)=>fun1(f,38)}>{seat[38]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,39)}>{seat[39]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn"onClick={(f)=>fun1(f,40)}>{seat[40]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,41)}>{seat[41]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,42)}>{seat[42]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,43)}>{seat[43]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,44)}>{seat[44]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,45)}>{seat[45]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,46)}>{seat[46]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,47)}>{seat[47]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,48)}>{seat[48]}
        </button><button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,49)}>{seat[49]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,50)}>{seat[50]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,51)}>{seat[51]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,52)}>{seat[52]}
        </button>
        <br/>
        <button type="submit" name="button1" id="button1"
        className="m2btn"onClick={(f)=>fun1(f,53)}>{seat[53]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,54)}>{seat[54]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn"onClick={(f)=>fun1(f,55)}>{seat[55]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,56)}>{seat[56]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,57)}>{seat[57]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,58)}>{seat[58]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,59)}>{seat[59]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,60)}>{seat[60]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,61)}>{seat[61]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,62)}>{seat[62]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,63)}>{seat[63]}
        </button><button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,64)}>{seat[64]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,65)}>{seat[65]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,66)}>{seat[66]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,67)}>{seat[67]}
        </button>
        <br/>
        <button type="submit" name="button1" id="button1"
        className="m2btn"onClick={(f)=>fun1(f,68)}>{seat[68]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,69)}>{seat[69]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn"onClick={(f)=>fun1(f,70)}>{seat[70]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,71)}>{seat[71]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,72)}>{seat[72]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,73)}>{seat[73]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,74)}>{seat[74]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,75)}>{seat[75]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,76)}>{seat[76]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,77)}>{seat[77]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,78)}>{seat[78]}
        </button><button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,79)}>{seat[79]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,80)}>{seat[80]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,81)}>{seat[81]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,82)}>{seat[82]}
        </button>
        <br/>
        <button type="submit" name="button1" id="button1"
        className="m2btn"onClick={(f)=>fun1(f,83)}>{seat[83]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,84)}>{seat[84]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="m3btn"onClick={(f)=>fun1(f,85)}>{seat[85]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,86)}>{seat[86]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,87)}>{seat[87]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,88)}>{seat[88]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,89)}>{seat[89]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,90)}>{seat[90]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,91)}>{seat[91]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,92)}>{seat[92]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,93)}>{seat[93]}
        </button><button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,94)}>{seat[94]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,95)}>{seat[95]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,96)}>{seat[96]}
        </button>
        <button type="submit" name="button1" id="button1"
        className="mbtn"onClick={(f)=>fun1(f,97)}>{seat[97]}
        </button>
        <div>
         <input 
      id="tt1"
      name="tt1"
      type="tt1"
      class="tt1" 
      value={total}
      />
      </div>
        <hr className="screen"/>
        <h3 className="sn">All eyes this way please!</h3>
        </div>
         </header>
    </div>
    </>
  );
}

export default Multiplex;
