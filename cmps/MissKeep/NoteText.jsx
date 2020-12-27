import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteText(props){
return <section>
    <h2>{props.note.info.txt}</h2>
    <br/>
    <NotePreviewFotter noteSelected={props.typeSelected} note={props}/>
    </section> 
}