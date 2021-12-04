import { useState } from "react"
// function time() {
//     console.log(document.getElementById('timeClass'))
//     let date = new Date().toLocaleTimeString();
//     const timeElement = (
//         React.createElement('span', {},'time is '+ date )
//         );
//     // ReactDOM.render(React.createElement(App), document.getElementsByClassName('timeClass'));
//     ReactDOM.render(timeElement, document.getElementById('time'))
// }
// setInterval( time,1000)

// const Time =()=>{
//     let date = new Date().toLocaleTimeString();
//     return(
//         <span>{date}</span>
//     )

// }
const Time = ()=>{
  
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    
      setInterval(()=>{setDate(new Date().toLocaleTimeString())},1000)
    return(
      <div>
      time is  {date}
      </div>
    )
  }
  
export default Time