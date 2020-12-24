export function NoteTodos(props) {
    var x = props.note.info.todos.map((todo, idx) => {
        console.log(todo);
        return todo
    })
    console.log(x);
    console.log('props', props);
    return <div>
        <h1>{props.note.info.label}</h1>
        <h1> {props.note.info.todos.map((todo) => {
        todo
        })}</h1>
    </div>

}