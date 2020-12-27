import {NotePerview} from 'NotePerview.jsx'

export function NoteList(props){
    return (
        <section className="note-list">
            {props.notes.map((note,idx) => {
                return <section className={note.info.id} key={idx}><NotePerview note ={note} key={idx} NoteSelected={props.noteSelected} props={props}/></section>  
            })
            }
        </section>
    );
}
