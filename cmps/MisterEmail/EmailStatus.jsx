
export function EmailStatus({ emails }) {
    const readEmails = emails.filter(email => { return email.isRead })
    const unReadEmails = emails.filter(email => { return !email.isRead })

    return (

        <section className="book-app">
            <h2>email status {Math.floor(100*readEmails.length/(readEmails.length+unReadEmails.length))}%</h2>
            {/* {readEmails.map(email => {
                return <div key={1 + email.id}> 0
                    </div>
            })}
            {unReadEmails.map(email => {
                return <div key={1 + email.id}> 1
                    </div>
            })} */}

        </section>
    );
}
