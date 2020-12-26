import { utilService } from 'utilService.js';
import { storageService } from 'storageService.js';
export const noteService = {
    query,
    createNote
}

const KEY = 'NoteDB'
var gNotes
_createNotes()

function query() {
    return Promise.resolve(gNotes)
}

function createNote(noteTxt, type) {
    switch (type) {
        case 'NoteText':
            var newNote = {
                type: type,
                isPinned: true,
                info: {
                    txt: noteTxt
                }
            }
            gNotes.push(newNote)
            return _saveNotesToStorage()
        case 'NoteImg':
            var newNote = {
                type: type,
                info: {
                    url: `${noteTxt}`,
                    title: ''
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            gNotes.push(newNote)
            return _saveNotesToStorage()
        case 'NoteVideos':
            var url = noteTxt.replace('watch', 'embed')
            console.log(url);
            var newNote = {
                type: type,
                info: {
                    url: `${url}`,
                    title: ''
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            console.log(newNote);
            gNotes.push(newNote)
            return _saveNotesToStorage()
        case 'NoteTodos':
            console.log('hello');
            var newNote = {
                type: type,
                info: {
                    id: utilService.makeId(),
                    sentAt: Date.now(),
                    label: "How was it:",
                    todos: [
                            { txt: "Do that!", doneAt: null },
                            { txt: "Do this", doneAt: 187111111 }
                        ]
                        // 
                }
            }
            gNotes.push(newNote)
            return _saveNotesToStorage()
        case 'NoteAudio':
            console.log('hello');
            var newNote = {
                type: type,
                info: {
                    url: `${noteTxt}`,
                    title: ''
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            gNotes.push(newNote)
            return _saveNotesToStorage()
    }
}

function _createNotes() {
    gNotes = storageService.load(KEY);
    if (!gNotes || !gNotes.length) {
        gNotes = _getDemoNotes()
        _saveNotesToStorage();
    }
}

function _saveNotesToStorage() {
    storageService.save(KEY, gNotes)
}

function _getDemoNotes() {
    var notes = [{
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!",
                id: utilService.makeId(),
                sentAt: Date.now(),
            }
        },
        {
            type: "NoteImg",
            info: {
                url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
                title: "Me playing Mi",
                id: utilService.makeId(),
                sentAt: Date.now(),
            },

            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
            info: {
                id: utilService.makeId(),
                sentAt: Date.now(),
                label: "How was it:",
                todos: [
                    { txt: "Do that!", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        },
        {
            type: "NoteVideos",
            info: {
                id: utilService.makeId(),
                sentAt: Date.now(),
                url: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                title: "I'm Video !!!"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteAudio",
            info: {
                id: utilService.makeId(),
                sentAt: Date.now(),
                url: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
                title: "I'm Audio !!!"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
    ];
    return notes
}
window.theNotes = gNotes