export const noteService = {
    query,
    createNote
}

var gNotes = [{
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        type: "NoteImg",
        info: {
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
];

function query() {
    return Promise.resolve(gNotes)
}

function createNote(noteTxt) {
    console.log(noteTxt);
    var newNote = {
        type: "NoteText",
        isPinned: true,
        info: {
            txt: noteTxt
        }
    }
    return gNotes.push(newNote)
}

window.theNotes = gNotes