import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteImg(props){
return <section>
    <img src={props.note.info.url}/>
    <br/>
    <NotePreviewFotter note={props}/>
    </section> 
}