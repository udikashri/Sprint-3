import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteImg(props){
return <section>
    <h1>{props.note.info.title}</h1>
    <img src={props.note.info.url}/>
    <br/>
    <NotePreviewFotter/>
    </section> 
}