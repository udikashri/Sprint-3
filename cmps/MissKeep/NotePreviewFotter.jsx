export class NotePreviewFotter extends React.Component {

    state = {
        toggleIcons: true
    }

    handleFotterClick = (ev, el) => {
        var elIcons = ev.currentTarget.children
        const noteType = ev.target.name
        var elIcons = ev.currentTarget.children
        for (var i = 0; i < elIcons.length; i++) {
            const iconColor = elIcons[i].src.substring(33, 38)
            console.log(iconColor);
            if (elIcons[i].name === noteType) {
                (elIcons[i].name + 'C' === iconColor ) ? elIcons[i].src = `assets/img/${elIcons[i].name.substring(0, elIcons[i].name.length)}.png` : elIcons[i].src = `assets/img/${elIcons[i].name}C.png`
                const copy = this.state
                copy.typeSelected = noteType
                this.setState({ copy })
                var elId = el.props.note.note.info.id
                switch (noteType) {
                    case 'tack': 
                        if (elId && this.state.toggleIcons) {
                            const {toggleIcons} = this.state
                            console.log(this.state);
                            this.setState({toggleIcons:false})
                            document.querySelector(`.${elId}`).style.order = -1 
                        } else { 
                            document.querySelector(`.${elId}`).style.order = null
                        const {toggleIcons} = this.state
                            this.setState({toggleIcons:true})
                    }
                        return
                        case 'chec':
                            if (elIcons[i].name + 'C' === iconColor) {
                                document.querySelector(`.${elId}`).style.border = null
                            } else {
                                document.querySelector(`.${elId}`).style.border = 3 + 'px solid' 
                        }
                        return
                        case 'tras':
                            document.querySelector(`.${elId}`).style.display = 'none'
                            return

                }
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