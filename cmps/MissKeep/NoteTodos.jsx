export function NoteTodos(props) {
    var x = props.note.info.todos.map((todo, idx) => {
        console.log(todo.txt);
        return todo.txt
    })
    console.log(x);
    console.log('props', props);
    return <div>
        <h1>{props.note.info.label}</h1>
        {/* <h1> {props.note.info.todos.map((todo) => {
        todo.txt
        })}</h1> */}
        <h1>{x}</h1>
        {/* <ul className="todo-list">
    </ul>
    <input type="text" placeholder="What Todo?" name="todoTxt" />
    <input type="number" placeholder="importance?" className="importance" />
    <button onClick="onAddTodo()">Add</button> */}

    {/* <div className="stats">
        Total todos:
        <span className="todo-total">4</span> Active:
        <span className="todo-active">2</span>
    </div> */}
    </div>

}