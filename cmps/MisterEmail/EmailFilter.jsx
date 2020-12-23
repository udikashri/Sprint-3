
export class EmailFilter extends React.Component {

    state = {
        name: '',
        isRead: null
    }
    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.name);
        };

        this.setState({ name: ev.target.value }, callback);
    };

    setIsReadFilter = (boolean) => {
        this.props.setFilter(boolean);
        this.setState({ isRead: boolean })
    }

    render() {
        return (
            <section>
                <input className="input-filter" type="text" name="name"
                    placeholder="filter"
                    onChange={this.handleChange} />
                <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(true);
                }}>Read</button>
                <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(false);
                }}>Unread</button>



            </section>
        )
    }
}





