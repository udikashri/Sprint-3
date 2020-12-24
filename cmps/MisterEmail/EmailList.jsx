import { EmailPreview } from "EmailPreview.jsx";
import { EmailDetails } from "EmailDetails.jsx";

export function EmailList({ emails, openEmail, onSelectEmail, onDelete }) {

    return (

        <section className="email-list">
            <h2>Email list</h2>
            <div className='emails-contaner'>
                {emails.map(email => {
                    // { selected && <BookDetails book={selected} switchBook={this.onSwitchBook} /> }

                    return <div className='email' key={email.id}>
                        <EmailPreview email={email} onSelectEmail={onSelectEmail} />
                        {email === openEmail && <EmailDetails email={openEmail} onDelete={onDelete}/>}
                    </div>
                })}
            </div>
        </section>
    );

}