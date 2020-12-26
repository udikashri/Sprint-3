export class NotePreviewFotter extends React.Component {

    state = {
        toggleIcons: false
    }

    handleFotterClick = (ev) => {
        var elIcons = ev.currentTarget.children
        const noteType = ev.target.name
        var elIcons = ev.currentTarget.children
        for (var i = 0; i < elIcons.length; i++) {
            const iconColor = elIcons[i].src.substring(33, 38)
            if (elIcons[i].name === noteType) {
                (elIcons[i].name + 'C' === iconColor) ? elIcons[i].src = `assets/img/${elIcons[i].name.substring(0, elIcons[i].name.length)}.png` : elIcons[i].src = `assets/img/${elIcons[i].name}C.png`
                const copy = this.state
                copy.typeSelected = noteType
                this.setState({ copy })
            }
        }
    }

    render() {
        return (
            <section className="icons" onClick={(event) => this.handleFotterClick(event, this)}>
                <img name="tack" src="assets/img/tack.png" />
                <img name="chec" src="assets/img/chec.png" />
                <img name="pain" src="assets/img/pain.png" />
                <img name="edit" src="assets/img/edit.png" />
                <img name="copy" src="assets/img/copy.png" />
                <img name="tras" src="assets/img/tras.png" />
            </section>)
    }

}