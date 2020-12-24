import { emailService } from '../../services/emaillService.js'
import { EmailList } from 'EmailList.jsx'
import { EmailFilter } from "EmailFilter.jsx";
import { EmailStatus } from "EmailStatus.jsx";
import { EmailCompose } from "EmailCompose.jsx";


export class EmailApp extends React.Component {


    state = {
        emails: [],
        filterBy: {
            string: '',
            boolean: null
        },
        selected: null,
        isList: true,
        string: "",
        isComposeClose: true
    }

    componentDidMount() {
        this.loadEmails()


    }
    loadEmails = () => {
        emailService.query().then(emails => {
            this.setState({
                emails: emails,
            })
        })
    }

    onSelectEmail = (emailId) => {

        var email = this.state.emails.find(email => {
            return email.id === emailId
        })
        if (email === this.state.selected) {
            email = null
        }
        const copyEmails = this.state.emails.map(email => {
            if (email.id === emailId) email.isRead = true
            return email
        })

        this.setState({
            selected: email,
            emails: copyEmails,
        })
    }


    onDelete = (emailId) => {
        const copyEmails = emailService.deleteEmail(emailId)
        this.setState({ emails: copyEmails })
    }



    onSetFilter = (filterBy) => {
        var copyFilterBy = this.state.filterBy;
        copyFilterBy[typeof filterBy] = filterBy;
        this.setState({ filterBy: copyFilterBy });
    };
    //subject: 'Wassap?', body:
    getEmailForDisplay = () => {
        const { filterBy } = this.state;
        if (filterBy.string || filterBy.boolean !== null) {
            return this.state.emails.filter(email => {
                return (email.subject.toLowerCase().includes(filterBy.string.toLowerCase()) ||
                    email.body.toLowerCase().includes(filterBy.string.toLowerCase())) &&
                    (email.isRead === filterBy.boolean || filterBy.boolean === null);
            });

        } else {
            return this.state.emails
        }
    };

    onNewEmail = () => {
        console.log(this.state.isComposeClose);
        this.setState({isComposeClose:!this.state.isComposeClose})
    }

    render() {

        const { emails ,isComposeClose} = this.state
        return (
            <section className={'email-app'}>


                <EmailStatus emails={emails} />
                <div className="email-filter">
                    <EmailFilter setFilter={this.onSetFilter} isRead={this.state.filterBy.boolean} />
                </div>
                <div className='compose-btn' onClick={() => { this.onNewEmail() }}><i className="fas fa-plus"></i> Compose</div>
               {!isComposeClose &&  <EmailCompose renderEmails={this.loadEmails} onNewEmail={this.onNewEmail}/>} 
                <EmailList emails={this.getEmailForDisplay()} openEmail={this.state.selected}
                    onSelectEmail={this.onSelectEmail} onDelete={this.onDelete} />
            </section>
        )
    }
}