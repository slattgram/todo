import React from "react";
import './Todo.css'

const Todo = ({head,body,urgency,deadline}) =>{
    return(
        <> 
            <div className="card">
                <div className="card-head">
                    {head}
                </div>
                <div>
                    {body}
                </div>
                <div>
                    {deadline}
                </div>
                <div>
                    {urgency}
                </div>
            </div>
            
        </>
    )
}

export default Todo;