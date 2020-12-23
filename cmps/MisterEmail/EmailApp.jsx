import { emailService } from '../../services/emaillService.js'
import { EmailList } from './EmailList.jsx'
import { EmailFilter } from "./EmailFilter.jsx";

export class EmailApp extends React.Component {


    state = {
        emails: [],
        filterBy: '',
        selected: null,
        isList: true
        
    }

    componentDidMount() {
        this.loadEmails()


    }
    onSelectEmail = (emailId) => {
        const email = this.state.emails.find(email => {
            return email.id === emailId
        })
        const copyEmails = this.state.emails.map(email => {
            if (email.id === emailId) email.isRead = true
            return email
        })

        this.setState({
            selected: email,
            emails: copyEmails
        })
    }
    onDelete = (emailId) =>{
        const copyEmails = emailService.deleteEmail(emailId)
        this.setState({ emails: copyEmails })
    }

    loadEmails = () => {
        emailService.query().then(emails => {
            this.setState({ emails: emails })
        })
    }

    onSetFilter = (filterBy) => {
        console.log(filterBy);
        this.setState({ filterBy });
    };

    getEmailForDisplay = () => {
        const { filterBy } = this.state;
        if (filterBy) {
            console.log('in');
            return this.state.books.filter(book => {
                return book.title.toLowerCase().includes(filterBy.toLowerCase());
            });

        } else {
            console.log('else');
            return this.state.emails
        }
    };

    render() {

        const { emails } = this.state
        return (
            <section>

                <h1>email app</h1>
                <EmailFilter setFilter={this.onSetFilter} />
                <EmailList emails={this.getEmailForDisplay()} openEmail={this.state.selected}
                    onSelectEmail={this.onSelectEmail} onDelete={this.onDelete}/>
            </section>
        )
    }
}