
export function EmailStatus({ emails }) {
    const readEmails = emails.filter(email => { return email.isRead })
    const unReadEmails = emails.filter(email => { return !email.isRead })
    const prcent = Math.floor(100 * readEmails.length / (readEmails.length + unReadEmails.length))
    return (

        <section className='email-status'>

            <div className="w3-border">{prcent}%
                <div className="w3-orange" style={{height:`24px`,width:`${prcent}%`}}></div>
            </div>

        </section>
    );
}
