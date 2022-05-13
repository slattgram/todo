import React,{useState} from "react";
import './Todo.css'
import imgUrgency from './img-urgency.svg'
import imgDone from './img-done.svg'
import TodoOpen from "../TodoOpen/TodoOpen";

const Todo = ({head,body,urgency,deadline,marginRight}) =>{

    const [isOpen, setIsOpen] = useState(false)



    return(
        <> 
            <div className="card">
                <div className="card-head">
                    {head}
                </div>
                <div className="card-body">
                    {body}
                </div>
                <div className="card-footer">
                    <div className="card-footer-deadline-container">
                        <img className="card-footer-deadline-icon" src={imgUrgency} alt=""/>
                        <div className="card-footer-deadline-text">
                            {deadline}
                        </div>
                    </div>
                    <div className="card-footer-urgency-container">
                        <div className="card-footer-urgency-icon">

                        </div>
                        <div className="card-footer-urgency-text">
                            {urgency}
                        </div>
                    </div>
                    <button 
                        className="card-footer-button-complete"
                        onClick={()=>setIsOpen(!isOpen)}
                    >
                        <img src={imgDone} alt="" />
                    </button>
                </div>
                
            </div>
            
            {isOpen ? 
            <TodoOpen 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                name={head}
                description={body}
                deadline={deadline}
                priority={urgency}
                status="pending"
            />
             : null}
        </>
    )
}

export default Todo;