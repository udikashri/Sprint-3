import { emailService } from '../../services/emaillService.js'

export class EmailCompose extends React.Component {


    state = {
        email: {
            subject: 'subject',
            date: `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()} `,
            body: ''
        }
    };

    onSaveEmail = (ev) => {//on submit
        ev.preventDefault();
        emailService.saveEmail(this.state.email);
        this.props.renderEmails()

    };

    onInputChange = (ev) => {//on input change 
        const value = ev.target.value
        if (ev.target.type === 'number' && (value > 5 || value < 0)) return
        const emailCopy = { ...this.state.email };
        emailCopy[ev.target.name] = value; 
        this.setState({
            email: emailCopy
        });

    };

    render() {
        return (
            <form  onSubmit={this.onSaveEmail}>

                <input placeholder="Name" type="text" name="subject"
                    value={this.state.email.subject} onChange={this.onInputChange} />


                <input value={this.state.email.date} type="date" id="date" name="date"
                    onChange={this.onInputChange} />
                <textarea className='input-text' rows="4" cols="50" name="body" form="usrform"
                    onChange={this.onInputChange} />

                <button type="submit">compose</button>
            </form>)
    }
}