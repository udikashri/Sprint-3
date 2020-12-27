import { NotePreviewFotter } from 'NotePreviewFotter.jsx'

export function NoteTodos(props) {
    return <div>
        <h2>{props.note.info.label}</h2>
        {props.note.info.todos.map((txt, idx) => {
            return <h3 onClick={
                (ev) => {
                if (ev.target.style.color === 'lightgray') {ev.target.style.color = 'black'}else {ev.target.style.color = 'lightgray'} }}
                className={'todos-txt' + idx} key={props.note.info.id && idx}>{txt.txt}</h3>
        })}
        <br />
        <NotePreviewFotter note={props} />
    </div>

}