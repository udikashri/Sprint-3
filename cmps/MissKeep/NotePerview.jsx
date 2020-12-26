import { NoteText } from 'NoteText.jsx'
import { NoteImg } from 'NoteImg.jsx'
import { NoteTodos } from 'NoteTodos.jsx'
import { NoteVideos } from 'NoteVideos.jsx'
import { NoteAudio } from 'NoteAudio.jsx'

export function NotePerview(props) {
    switch (props.note.type) {
        case 'NoteText':
            return <NoteText {...props} />
        case 'NoteImg':
            return <NoteImg {...props} />
        case 'NoteTodos':
            return <NoteTodos {...props} />
        case 'NoteVideos':
            return <NoteVideos {...props} />
        case 'NoteAudio':
            return <NoteAudio {...props} />
        default:
            return <h1>Default</h1>//...some default error view
    }
}