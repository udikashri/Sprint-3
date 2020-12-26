// const { Link } = ReactRouterDOM;

export function EmailPreview({ email, onSelectEmail, isSelectEmail }) {

    return (
   
        <article className={` ${email.isRead ? 'read' : 'unread'} email-header ${isSelectEmail && 'select-email'}`} onClick={() => { onSelectEmail(email.id) }}>
         
                <div className={`title`}>{email.subject} - {email.body}</div>
               <div className='sent-at'>{ `${(new Date().getMonth() + 1)}-${new Date().getDate()}`=== email.sentAt.date ?
                `${email.sentAt.time }`:
                 email.sentAt.date}</div>
        
        </article>
  );
}
