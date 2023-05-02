
// ! Keyboard shortcut for making a functional component
// use the sfc [tab]
// ! Keyboard shortcut for using useState
// import statement at the top: imrs
// inside the function before the return: usf

import React, { useState } from 'react';
import PresidentTable from './Presidents/president-data/PresidentTable';
import { presidentsArray } from './Presidents/president-data/presidents';



const ButtonClick = (props) => {
    // let clickCount = 0
    //      read only   setterFunction
    const [clickCount, setClickCount] = useState(0);
    const [tableTitle, setTableTitle] = useState("");
    const [presidentData, setPresidentData] = useState([]);
    
    function handleClick() {
        console.log("click works");
        // clickCount = clickCount + 1;
        // console.log(clickCount)
        setClickCount(clickCount + 1);
    }

    function getAllPresidents() {
        setTableTitle("All Presidents");
        setPresidentData(presidentsArray);
    }

    function getAlivePresidents() {
        setTableTitle("Alive Presidents");
        let alivePresidents = presidentsArray.filter(
          (president) => president.passed === undefined
        );
        setPresidentData(alivePresidents)
      }
    
      function getPassedPresidents() {
        setTableTitle("Passed Presidents");
        let passedPresidents = presidentsArray.filter(
          (president) => president.passed !== undefined
        );
        setPresidentData(passedPresidents)
      }

    return ( 
        <>
        <h2>Hello from ButtonClick</h2>
        <button onClick={handleClick}>Click To Increase</button>
        <button onClick={() => setClickCount(0)}>Reset</button>
        <p>The button was clicked {clickCount}</p>
        {clickCount === 10 ? <p>WOW you clicked it 10 times</p> : null}

        <button onClick={getAllPresidents}>All Presidents</button>
        <button onClick={getAlivePresidents}>All Alive Presidents</button>
        <button onClick={getPassedPresidents}>All Passed Presidents</button>
        <PresidentTable tableTitle={tableTitle} presidentData={presidentData} />
        </>
     );
}
 
export default ButtonClick;
