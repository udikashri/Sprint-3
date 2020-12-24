import { emailService } from '../../services/emaillService.js'

export class EmailCompose extends React.Component {


    state = {
        email: {
            subject: 'subject',
            date: `${new Date().getFullYear()}-${(new Date().getMonth() + 1)}-${new Date().getDate()} `,
            body: ''
        },
        bodyVisibility:'block'
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
    onMinimize = ()=>{
        var {bodyVisibility} = this.state
        console.log(bodyVisibility);
        if(bodyVisibility==='none') bodyVisibility='block'
        else bodyVisibility='none'
        this.setState({bodyVisibility:bodyVisibility})
    }

    render() {
        const color ='pink'
        return (
            <form className='input-email' onSubmit={this.onSaveEmail}>
                <div className='form-header'>new mail
                <i onClick={() => { this.onMinimize()}} className="minimize fas fa-window-minimize"></i>
                <i onClick={() => { this.props.onNewEmail() }} className="close fas fa-times"></i></div>
                <div style={{display: this.state.bodyVisibility}}  className='form-body'>
                    <div><input placeholder="Name" type="text" name="subject"
                        value={this.state.email.subject} onChange={this.onInputChange} />
                    </div>
                    <div>
                        <input value={this.state.email.date} type="date" id="date" name="date"
                            onChange={this.onInputChange} />
                    </div>
                    <div>
                        <textarea className='input-text' rows="4" cols="50" name="body" form="usrform"
                            onChange={this.onInputChange} />
                    </div>

                    <button type="submit" className="email-form-button">Send <i className="fas fa-caret-down"></i></button>
                </div>
            </form>)
    }
}