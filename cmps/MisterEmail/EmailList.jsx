import { EmailPreview } from "EmailPreview.jsx";
import { EmailDetails } from "EmailDetails.jsx";

export function EmailList({ emails, openEmail, onSelectEmail, onDelete, onExpand, isExpand}) {

    return (

        <section className="email-list">

            
            <div className='emails-contaner'>
                {emails.map(email => {
                    // { selected && <BookDetails book={selected} switchBook={this.onSwitchBook} /> }

                    return <div className='email' key={email.id}>
                        <EmailPreview email={email} onSelectEmail={onSelectEmail} isSelectEmail={email === openEmail}/>
                        {email === openEmail && <EmailDetails email={openEmail} onDelete={onDelete}  onExpand={onExpand} isExpand={isExpand}/>}
                    </div>
                })}
            </div>
        </section>
    );

}