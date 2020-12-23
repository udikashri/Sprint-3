import { EmailPreview } from "./EmailPreview.jsx";
import { EmailDetails } from "./EmailDetails.jsx";

export function EmailList({ emails, openEmail, onSelectEmail, onDelete }) {

    return (

        <section className="book-app">
            <h2>book list</h2>
            <div className='books-contaner'>
                {emails.map(email => {
                    // { selected && <BookDetails book={selected} switchBook={this.onSwitchBook} /> }

                    return <div key={email.id}>
                        <EmailPreview email={email} onSelectEmail={onSelectEmail} />
                        {email === openEmail && <EmailDetails email={openEmail} onDelete={onDelete}/>}
                    </div>
                })}
            </div>
        </section>
    );

}




//        
