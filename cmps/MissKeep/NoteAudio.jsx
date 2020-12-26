import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteAudio(props) {
    const audio = props.note.info.url
    return <section >
        <h1>{props.note.info.title}</h1>
        <audio src={audio} height="54" controls="controls" />
        <br/>
        <NotePreviewFotter/>
    </section>
}