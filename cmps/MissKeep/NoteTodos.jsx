import {NotePreviewFotter} from 'NotePreviewFotter.jsx'

export function NoteTodos(props) {
    var x = props.note.info.todos.map((todo, idx) => {
        // console.log(todo.txt);
        return todo.txt
    })
    // console.log(x);
    // console.log('props', props);
    return <div>
        <h1>{props.note.info.label}</h1>
        <br/>
        <NotePreviewFotter/>
    </div>

}