// const { Link } = ReactRouterDOM;

export function EmailDetails({ email, onDelete }) {


    return (
   
        <article>
            <div>
            {email.subject}  
            </div>
            {email.body}
            <div  onClick={() => { onDelete(email.id) }}>
                remove</div>
        </article>
  );
}