import React from 'react'

const Button = (props) => {
    console.log(props);
  return (

    <div className="bg-emerald-500 text-white border-0 rounded-sm px-8 py-2  w-fit my-2 mx-2 cursor-pointer">
      <h1>this iis {props.name}</h1>
    </div>
  )
}

export default Button
