import { NoteList } from '../cmps/MissKeep/NoteList.jsx'

import { noteService } from '../services/noteService.js'
export class MissKeeperApp extends React.Component {

    state = {
        notes: [],
        filterBy: {
            name: '',
            power: null
        },
        newNote: {
            txt: ''
        }
    };

    componentDidMount() {
        this.loadNotes();
    }

    componentWillUnmount() {
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes });
        });
    }

    onAns = (ans) => {
        const copy = this.state.newNote
        console.log(ans);
        copy.txt = ans;
        console.log(copy);
        this.setState({ newNote: copy })
    }
    render() {

        return (
            <section className="missKeep-app">
                <h1>notes</h1>
                <NoteList notes={this.state.notes} />
                <form>
                    <label>
                        Create A Note
                        <input placeholder={this.state.newNote.txt} onChange={(ev) => {
                            ev.preventDefault()
                            console.log(ev.target.value);
                            this.onAns(ev.target.value)
                        }} />
                    </label>
                    <button onClick={() => {
                        noteService.createNote(this.state.newNote.txt)
                        const copy = this.state.newNote.txt
                        this.setState({ txt: copy })
                    }}>Add</button>
                </form>
            </section>
        );
    }
}