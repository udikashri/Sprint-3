import { emailService } from '../../services/emaillService.js'
import { EmailList } from 'EmailList.jsx'
import { EmailFilter } from "EmailFilter.jsx";
import { EmailStatus } from "EmailStatus.jsx";
import { EmailCompose } from "EmailCompose.jsx";
import { EmailDetails } from "EmailDetails.jsx";


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
        isComposeMinimize: true,
        isSelectExpand: false
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
        console.log(this.state.isComposeMinimize);
        this.setState({ isComposeMinimize: !this.state.isComposeMinimize })
    }

    onSelectExpand = () => {
        console.log(this.state.isSelectExpand);
        this.setState({ isSelectExpand: !this.state.isSelectExpand })
    }

    render() {

        const { emails, isComposeMinimize, isSelectExpand } = this.state
        console.log(this.state.filterBy.boolean);
        return (
            <section className={'email-app'}>


                <EmailStatus emails={emails} />
                <div className="email-filter">
                    <EmailFilter setFilter={this.onSetFilter} isRead={this.state.filterBy.boolean} />
                </div>
                <div className='email-menu'>
                    <div className='compose-btn' onClick={() => { this.onNewEmail() }}><i className="fas fa-plus"></i> Compose</div>

                    <ul>
                        <li className={this.state.filterBy.boolean && 'active-filter'} onClick={(ev) => {
                            ev.preventDefault();
                            this.onSetFilter(true);
                        }}>< i className="far fa-envelope-open"></i> {this.state.filterBy.boolean}Read Mail</li>
                        <li className={(!this.state.filterBy.boolean && this.state.filterBy.boolean!==null) && 'active-filter'} onClick={(ev) => {
                            ev.preventDefault();
                            this.onSetFilter(false);
                        }}><i className="far fa-envelope"></i> Unread Mail</li>
                        <li  onClick={(ev) => {
                            ev.preventDefault();
                            this.onSetFilter(null);
                        }}><i className="fas fa-inbox"></i> Inbox</li>
                        <li><i className="far fa-paper-plane"></i> Sent Mail</li>
                        <li><i className="fab fa-firstdraft"></i> Drafts</li>

                    </ul>
                </div>
                { !isComposeMinimize && <EmailCompose renderEmails={this.loadEmails} onNewEmail={this.onNewEmail} />}
                {
                    !isSelectExpand && <EmailList emails={this.getEmailForDisplay()} openEmail={this.state.selected}
                        onSelectEmail={this.onSelectEmail} onDelete={this.onDelete} onExpand={this.onSelectExpand} isExpand={isSelectExpand} />
                }
                { isSelectExpand && <EmailDetails email={this.state.selected} onDelete={this.onDelete} onExpand={this.onSelectExpand} isExpand={isSelectExpand} />}
            </section >
        )
    }
}