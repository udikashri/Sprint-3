// const { Link } = ReactRouterDOM;

export function EmailPreview({ email, onSelectEmail, isSelectEmail }) {


    return (
   
        <article className={`email-header ${isSelectEmail && 'select-email'}`} onClick={() => { onSelectEmail(email.id) }}>
            <div className="pre-info"  >
                <div className={`title  ${email.isRead ? 'read' : 'unread'}`}>{email.subject} - {email.body}</div>
               
            </div>
        </article>
  );
}