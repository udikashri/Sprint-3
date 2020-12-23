import {NoteList} from '../cmps/MissKeep/NoteList.jsx'

import { noteService } from '../services/noteService.js'
export class MissKeeperApp extends React.Component {

    state = {
        notes: [],
        filterBy: {
            name: '',
            power: null
        },
        newNote : {
            txt : ''
        }
    };

    componentDidMount() {
        this.loadNotes();
        // console.log(noteService);
    }

    componentWillUnmount() {
    }

    loadNotes = () => {
        noteService.query().then(notes => {
            this.setState({ notes });
        });
    }


    // onRemovePet = (noteId) => {
    //     notesService.remove(noteId).then(() => {
    //         this.loadNotes()
    //     })
    // }

    // getPetsForDisplay = () => {
    //     const { filterBy } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i');
    //     return this.state.pets.filter(pet => filterRegex.test(pet.name));

    //     // Another way of doing filter
    //     // const txt = filterBy.name.toLowerCase()
    //     // return this.state.pets.filter(pet => {
    //     //     return pet.name.toLowerCase().includes(txt);
    //     // });
    // }

    // get petsForDisplay() {
    //     const { filterBy } = this.state;
    //     const filterRegex = new RegExp(filterBy.name, 'i');
    //     return this.state.pets.filter(pet => filterRegex.test(pet.name));
    // }

    // onSetFilter = (filterBy) => {
    //     console.log('filterBy:', filterBy);
    //     this.setState({ filterBy });
    // }


    handleChange = (ev) => {
        const callback = () => {
        // console.log(props);
        // this.props.noteService.CreateNote(this.state.newNote.txt);
            // 
        };
        
        const newNoteTxt = ({...this.state.newNote.info})
        newNoteTxt[ev.target.userTxt] = ev.target.value;
console.log(newNoteTxt);
        this.setState({newNote:newNotetxt}, callback);
    };


    render() {

        return (
            <section className="missKeep-app">
           <h1>notes</h1>
           <NoteList notes = {this.state.notes}/>
           <div>

           <input type="text" name="userTxt"
                // value=''
                placeholder="What's in your Mind"
                autoComplete="off"
                onChange={this.handleChange} />
           </div>
            </section>
        );
    }
}