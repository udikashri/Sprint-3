// const { Link } = ReactRouterDOM;

export function EmailPreview({ email, onSelectEmail }) {


    return (
   
        <article>
            <div className="pre-info" onClick={() => { onSelectEmail(email.id) }}>
                <div className={`title  ${email.isRead ? 'read' : 'unread'}`}>{email.subject} - {email.body}</div>
               
            </div>
        </article>
  );
}