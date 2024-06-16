import React from 'react'

 const CompoAxio = (props) => {
  return (
   <>
   <div>
    <img src={props.url}/>
    <br></br>
    Name: {props.n}
    <br></br>
    CreatedAt: {props.c}
    <br></br>
    id: {props.id}
   </div>
   </>
  )
}
export default CompoAxio;
