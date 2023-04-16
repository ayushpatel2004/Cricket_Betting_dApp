import "./faqs.css";
import React, { useState } from 'react';
import { Navbar } from '../../containers';
import { IoIosArrowDown } from 'react-icons/io';


function FAQs() {
  const [isDisplayOpen1, setIsDisplayOpen1] = useState(false);
  const [isDisplayOpen2, setIsDisplayOpen2] = useState(false);
  const [isDisplayOpen3, setIsDisplayOpen3] = useState(false);
  const [isDisplayOpen4, setIsDisplayOpen4] = useState(false);
  const [isDisplayOpen5, setIsDisplayOpen5] = useState(false);
  const [isDisplayOpen6, setIsDisplayOpen6] = useState(false);


  const toggleDisplay1 = () => {
    setIsDisplayOpen1(!isDisplayOpen1);
  }
  const toggleDisplay2 = () => {
    setIsDisplayOpen2(!isDisplayOpen2);
  }
  const toggleDisplay3 = () => {
    setIsDisplayOpen3(!isDisplayOpen3);
  }
  const toggleDisplay4 = () => {
    setIsDisplayOpen4(!isDisplayOpen4);
  }
  const toggleDisplay5 = () => {
    setIsDisplayOpen5(!isDisplayOpen5);
  }
  const toggleDisplay6 = () => {
    setIsDisplayOpen6(!isDisplayOpen6);
  }

  return (
    <div >
        
        <Navbar></Navbar>
        <div className="title">FAQs</div>
        <div className="flexbox">  
        
        <button className="question-button" onClick={toggleDisplay1}><div className="match-card12" > <div className="question"> What are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jat are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen1 && (
            
            <div className="answer" > <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay2}><div className="match-card12" > <div className="question"> What are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen2 && (
            
            <div className="answer" > <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay3}><div className="match-card12" > <div className="question"> What are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen3 && (
            
            <div className="answer" >
            <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay4}><div className="match-card12" > <div className="question"> What are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen4 && (
            
            <div className="answer" >
             <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay5}><div className="match-card12" > <div className="question"> What are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen5 && (
            
            <div className="answer" ><div className="answermessage">This is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the slidinghis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidihis is the sliding display. This is the slidi display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        <button className="question-button" onClick={toggleDisplay6}><div className="match-card12" ><div className="question"> What are the isusoau jaj fisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsfisusoau jaj ddd ss ddsf ? </div><div><IoIosArrowDown/> </div></div></button>
        {isDisplayOpen6 && (
            
            <div className="answer" > <div className="answermessage">This is the sliding display. This is the sliding display.This is the sliding display.This is the sliding display.This is the sliding display.</div>
            
            </div>
            
        )}
        
        
        </div>
    </div>
  );
}

export default FAQs;

// const FAQs = () =>{
//     return(
//         <>

//         <div className="flexbox">
//             <div className="question">
//                 Q1 lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//             <div className="question">
//                 Q1
//             </div>
//         </div>
//         </>
//     );
// };

// export default FAQs;