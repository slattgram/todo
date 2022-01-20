import React,{useState} from 'react';

import Header from './Header'
import Search from './Search'
import TodoList from './TodoList/TodoList'
import data from './data.json'

const App = () =>{

    const [input, setInput] = useState('');

    const filteredTodos = data.filter( todo => todo.head.toLowerCase().includes(input.toLowerCase()) )

    return(
        <>  
            <Header />
            <Search input={input} setInput={setInput}/>
            <TodoList data={filteredTodos}/>
        </>
    )
    
}

export default App;