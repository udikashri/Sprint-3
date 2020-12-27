import { NotePreviewFotter } from 'NotePreviewFotter.jsx'

export function NoteTodos(props) {
    props.note.info.todos.map((txt) => {
        console.log(txt)
    })
    console.log(props.note.info.todos)
    return <div>
        <h1>{props.note.info.label}</h1>
        {props.note.info.todos.map((txt, idx) => {
            console.log(txt[idx]);
            return <h2 onClick={
                () => {var elToggle =  document.querySelector(`${'.todos-txt' + idx}`)
                if (elToggle.style.color === 'lightgray') {elToggle.style.color = 'black'}else {elToggle.style.color = 'lightgray'} }}
                className={'todos-txt' + idx} key={idx}>{txt.txt}</h2>

        })}
        <br />
        <NotePreviewFotter note={props} />
    </div>

}