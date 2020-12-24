
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
       const booleanFilter = this.props.isRead? 'read':'unread'
        return (
            <section>
                <i className="fas fa-search"></i><input className="input-filter" type="text" name="name"
                    placeholder="Search Mail"
                    onChange={this.handleChange} />
                <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(true);
                }}>Read</button>
                <button onClick={(ev) => {
                    ev.preventDefault(); //stops navigation
                    this.setIsReadFilter(false);
                }}>Unreas</button>



            </section>
        )
    }
}





