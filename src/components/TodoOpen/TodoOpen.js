import react from "react";
import "./TodoOpen.css"
import clipboard from "./clipboard.svg"
import clock from"./clock.svg"
import refresh from "./refresh.svg"
import stopwatch from "./stopwatch.svg"
import close from "./close.svg"

function TodoOpen(props){
    const {
        isOpen, setIsOpen,
        name,priority,status,deadline,
        description
     } = props
    return(
    <div onClick={()=>{setIsOpen(!isOpen)}} className="todo-open-overlay">
        <div onClick={(e)=>{e.stopPropagation()}} className="todo-open-container" >
            <div className="todo-open-header-container">
                <div className="todo-open-header-container-name">
                    <img src={clipboard} alt="taskname" className="todo-open-header-clipboard" />
                    <div className="todo-open-header-name">
                        {name}
                    </div>
                    <img 
                        src={close} 
                        alt="close" 
                        className="todo-open-header-close"
                        onClick={()=>{setIsOpen(!isOpen)}}
                    />
                </div>
                <div className="todo-open-header-container-minis">
                    <div className="todo-open-header-container-priority">
                            <img src={stopwatch} alt="" />
                        Priority {priority}
                    </div>
                    <div className="todo-open-header-container-status">
                        <img src={refresh} alt="" />
                        Status {status}
                    </div>
                    <div className="todo-open-header-container-deadline">
                        <img src={clock} alt="" />
                        Time {deadline}
                    </div>
                </div>
                
                
            </div>
            <div className="todo-open-description-container">
                
            </div>
            <div className="todo-open-attached-container"></div>
        </div>
    </div>
    
    )
    
    
}

export default TodoOpen