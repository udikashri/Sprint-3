export function NoteImg(props){
console.log(props);
return <img src={props.note.info.url}/>
}