import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteAudio(props) {
    const audio = props.note.info.url
    return <section >
        <audio controls>
        <source src={audio} type="audio/mpeg"/>
        <source src={audio} type="audio/ogg"/>
        <source src={audio} type="audio/wav"/>
        </audio>
        <br/>
        <NotePreviewFotter note={props}/>
    </section>
}