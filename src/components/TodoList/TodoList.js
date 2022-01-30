import React from "react";

import Todo from '../Todo/Todo'
import './TodoList.css'



const TodoList = ({data}) =>{
    return(
        <>
            <div className="cards-container">
                {
                    data.map((e)=>{
                        return(
                        <Todo 
                            key={e.id}
                            body={e.body}
                            head={e.head}
                            deadline={e.deadline}
                            urgency={e.urgency}
                            marginRight={e.id % 3 === 0 ? true : false}
                        />
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default TodoList;