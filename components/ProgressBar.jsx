import React from 'react'

const ProgressBar = ({width: inputWidth}) => {
  return (
    <div className="container">
      {inputWidth <= 100 && inputWidth >= 0 ? <div className="innerContainer" style={{width: `${inputWidth}`+"%"}}></div> : alert("Please input a number between 0-100")}
      {/*if input is withing range of 0 - 100, insert the progress slider with a width matching input value that is sent in to the component as a parameter - if not, give an alert*/}
    </div>
  )
}

export default ProgressBar
