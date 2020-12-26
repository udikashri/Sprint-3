export class NoteFilter extends React.Component {

    state = {
        name: '',
    }
    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.name);
            console.log(this.props.setFilter(this.state.name));
        };

        this.setState({ name: ev.target.value }, callback);
    };

    // setIsReadFilter = (boolean) => {
    //     this.props.setFilter(boolean);
    //     this.setState({ isRead: boolean })
    // }

    render() {
        return (
            <section className="section-filter">
                <input className="input-filter" type="text" name="name"
                    placeholder="filterByText"
                    autoComplete="off"
                    onChange={this.handleChange} />
                {/* <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(true);
                }}>Read</button>
                <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(false);
                }}>Unread</button> */}



            </section>
        )
    }
}
