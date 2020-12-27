import { NotePreviewFotter } from 'NotePreviewFotter.jsx'

export function NoteVideos(props) {
    return <section>
        <iframe width="200" height="170"
            src={props.note.info.url}>
        </iframe>
        <br />
        <NotePreviewFotter note={props} />
    </section>
}