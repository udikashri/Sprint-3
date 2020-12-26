import { NoteList } from '../cmps/MissKeep/NoteList.jsx'
import { NoteFilter } from '../cmps/MissKeep/NoteFilter.jsx'
import { noteService } from '../services/noteService.js'
export class MissKeeperApp extends React.Component {

    state = {
        notes: [],
        typeSelected: 'NoteText',
        filterBy: {
            name: '',
        },
        newNote: {
            txt: ''
        },
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

    onAddNote = (ans) => {
        const copy = this.state.newNote
        console.log(ans);
        copy.txt = ans;
        console.log(copy);
        this.setState({ newNote: copy })

    }

    get notesForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.name, 'i');
        return this.state.notes.filter(note => filterRegex.test(note.info.txt));
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
    }

    // getTypeSelcted(type) {
    //     console.log(type);
    //     this.state({noteTypeSelected:type})
    // } 
    handleClick = (ev) => {
        const noteType = ev.target.name
        var elIcons = ev.currentTarget.children
        for (var i = 0 ; i<elIcons.length;i++){
            console.log(elIcons[i]);
            if(elIcons[i].name !== noteType) {
                elIcons[i].src = `assets/img/${elIcons[i].name}.png`
            }else {
                elIcons[i].src = `assets/img/${elIcons[i].name}B.png` 
                const copy = this.state
                copy.typeSelected = noteType
                this.setState({ copy })}
        }
    }

    render() {
    
        const notesForDisplay = this.notesForDisplay;
        return (
            <section className="missKeep-app">
                <form className="miss-keeper-form">
                    <label>
                        Create A Note
                        <input placeholder={this.state.newNote.txt} onChange={(ev) => {
                            ev.preventDefault()
                            console.log(ev.target.value);
                            this.onAddNote(ev.target.value)

                        }} />
                        <div className="icons" onClick={(event) => this.handleClick(event)}>
                            <img name="NoteText" src="assets/img/NoteText.png"  />
                            <img name="NoteImg" src="assets/img/NoteImg.png" />
                            <img name="NoteVideos" src="assets/img/NoteVideos.png" />
                            <img name="NoteAudio" src="assets/img/NoteAudio.png" />
                            <img name="NoteTodos" src="assets/img/NoteTodos.png" />
                        
                        </div>
                    </label>
                    <button className={"form-button"} onClick={(ev) => {
                        noteService.createNote(this.state.newNote.txt, this.state.typeSelected)
                        const copy = this.state.newNote.txt
                        this.setState({ txt: copy })

                    }}>Add</button>
                </form>
                <NoteFilter setFilter={this.onSetFilter} />
                <NoteList notes={notesForDisplay} noteSelected={this.state.typeSelected} />
            </section>
        );
    }
}