import { NoteText } from 'NoteText.jsx'
import { NoteImg } from 'NoteImg.jsx'
import { NoteTodos } from 'NoteTodos.jsx'

export function NotePerview(props) {


    switch (props.note.type) {
        case 'NoteText':
            return <div><NoteText {...props} /><div className="trash-icon"><img src="assets/img/trash.png" alt=""/></div></div> 
        case 'NoteImg':
            return <NoteImg {...props} />
        case 'NoteTodos':
            return <NoteTodos {...props} />

        default:
            return <h1>Default</h1>//...some default error view
    }


}