export class NotePreviewFotter extends React.Component {

    state = {
        toggleIcons: false
    }

    componentDidMount() {
        console.log(this.props)
        // document.querySelector('.7DYSTW').style.order = -1

    }


    handleFotterClick = (ev, el) => {
        // console.log(el.props.note.note.info.id);
        console.log(this.props);
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
                // const stateX = this.props
                // console.log(stateX);
                // this.setState({note:stateX})
                var elId = el.props.note.note.info.id
                var elCard
                // console.log(elId);
                switch (noteType) {
                    case 'tack':
                        
                        // console.log(this.props.note.note.info.id)
                        if (elId && (elIcons[i].name + 'C' === iconColor)) {
                            document.querySelector(`.${elId}`).style.order = null
                        } else { document.querySelector(`.${elId}`).style.order = -1 }
                        return
                        case 'chec':
                            if (!elCard && elId && (elIcons[i].name + 'C' === iconColor)) {
                            // console.log('helllllo');
                            console.log(elCard);
                            elCard = document.querySelector(`.${elId}`).style.border = null
                            console.log(elCard);
                        } else {console.log('helllllo'); document.querySelector(`.${elId}`).style.border = 3 + 'px solid' }
                        return
                    //     case 'pain':
                    //         return
                    //     case 'edit':
                    //         return
                    //     case 'copy':
                    //         return
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