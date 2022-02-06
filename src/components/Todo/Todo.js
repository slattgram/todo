import React from "react";
import './Todo.css'
import imgUrgency from './img-urgency.svg'
import imgDone from './img-done.svg'

const Todo = ({head,body,urgency,deadline,marginRight}) =>{






    let style = {

    }
    if (marginRight){
        style={
            marginRight: '0px'
        }
    }else{
        style={
            marginRight: '30px'
        }
    }

    return(
        <> 
            <div className="card" style={style}>
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
                        
                    >
                        <img src={imgDone} alt="" />
                    </button>
                </div>
                
            </div>
            
        </>
    )
}

export default Todo;