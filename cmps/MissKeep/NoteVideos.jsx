import { NotePreviewFotter } from 'NotePreviewFotter.jsx'
export function NoteVideos(props) {
    // console.log(props);
    // const video = props.note.info.url
    console.log(props.note.info.url);
        // var x = 'tgbNymZ7vqY'
    return <section>
        <h1>{props.note.info.title}</h1>
        {/* <video src="https://www.youtube.com/watch?v=VvU27gvAK40"></video> */}
        <iframe width="200" height="170"
            src={props.note.info.url}>
        </iframe>
        {/* <video src={video} width="200" height="170" controls="controls" /> */}
        <br />
        <NotePreviewFotter note={props.note} />
    </section>
}