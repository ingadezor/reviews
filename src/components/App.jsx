import React from 'react'
import data from "../data"
import { GrPrevious, GrNext} from "react-icons/gr"
import {BsChatRightQuote} from "react-icons/bs"


function App() {
  //setting which review is shown now:
  const [displayedReviewIndex, setDisplayedReviewIndex] = React.useState(0);

  //review's info:
   const {name, job, image, text} =  data[displayedReviewIndex];


   function handlePrev(){
    if(displayedReviewIndex != 0){
      setDisplayedReviewIndex( (prevIndexValue) =>{
      return prevIndexValue-1;
    })
    }
    
   }
   
   function handleNext(){
    if(displayedReviewIndex != data.length-1)
      setDisplayedReviewIndex( (prevIndexValue) =>{
        return prevIndexValue + 1;
    })
  }
  
  
  function handleRandom(){
    let randNum = Math.floor(Math.random() * data.length);
    //console.log(randNum);
    setDisplayedReviewIndex(randNum);
  }




  return <main>
      

      <section className="review">
          {/* image part */}
          <div className="img-container">
            <BsChatRightQuote className="quote-icon"/>
            <img className="person-img" src={image}/>
            
          </div>

        {/* rest of the info */}
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        {/* buttons: */}
        <div className="btn-container">
          <button onClick={handlePrev} className="prev-btn"><GrPrevious /></button>
          <button onClick={handleNext} className="next-btn"><GrNext /></button>
        </div>

        <button onClick={handleRandom} className="btn">Random Review</button>

      </section>
  </main>
}

export default App
