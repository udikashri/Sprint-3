
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



    render() {
       const booleanFilter = this.props.isRead? 'read':'unread'
        return (
            <section>
                <input className="input-filter" type="text" name="name"
                    placeholder="Search Mail"
                    onChange={this.handleChange} />



            </section>
        )
    }
}





