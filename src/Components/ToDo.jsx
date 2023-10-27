import React from 'react'
import { useState } from 'react'
function ToDo(props) {
   
  return (
    <div>

        {
            props.items.map((ele)=>{
                return(                <p>{ele}</p>
)

            })
        }
    </div>
  )
}

export default ToDo