import { NoteText } from 'NoteText.jsx'
import { NoteImg } from 'NoteImg.jsx'

export function NotePerview(props) {
    switch (props.note.type) {
        case 'NoteText':
            return <NoteText {...props} />
        case 'NoteImg':
            return <NoteImg {...props} />

        default:
            return <h1>hsahdakj</h1>//...some default error view
    }
}