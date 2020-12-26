import { NotePreviewFotter } from 'NotePreviewFotter.jsx'

export function NoteTodos(props) {
    props.note.info.todos.map((txt) => {
        console.log(txt)
    })
    console.log(props.note.info.todos)
    return <div>
        <h1>{props.note.info.label}</h1>
        <h2>{props.note.info.todos.map((txt,idx) => {
            console.log(txt[idx]);
            return txt.txt

        })}</h2>
        <br />
        <NotePreviewFotter note={props} />
    </div>

}