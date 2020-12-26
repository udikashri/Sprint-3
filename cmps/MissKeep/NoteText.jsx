import {NotePreviewFotter} from 'NotePreviewFotter.jsx'
export function NoteText(props){
return <section>
    <h1>{props.note.info.txt}</h1>
    <br/>
    <NotePreviewFotter noteSelected={props.typeSelected} note={props.note}/>
    </section> 
}