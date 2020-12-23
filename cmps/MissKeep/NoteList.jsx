import {NotePerview} from 'NotePerview.jsx'

export function NoteList(props){
    return (
        <section className="note-list">
            {props.notes.map((note,idx) => {
                return <NotePerview note ={note}/> 
            })
            }
        </section>
    );
}
