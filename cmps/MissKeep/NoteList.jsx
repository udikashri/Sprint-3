import {NotePerview} from 'NotePerview.jsx'

export function NoteList(props){
    console.log(props);
    return (
        <section className="note-list">
            {props.notes.map((note,idx) => {
                return <NotePerview note ={note} key={idx} NoteSelected={props.noteSelected} props={props}/> 
            })
            }
        </section>
    );
}
