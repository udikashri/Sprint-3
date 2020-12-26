export class NoteFilter extends React.Component {

    state = {
        name: '',
    }
    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.name);
        };

        this.setState({ name: ev.target.value }, callback);
    };



    render() {
        return (
            <section>
                <input className="input-filter" type="text" name="name"
                    placeholder="Search Note"
                    onChange={this.handleChange} />



            </section>
        )
    }
}
