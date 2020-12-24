// const { Link } = ReactRouterDOM;

export function EmailDetails({ email, onDelete }) {


    return (
   
        <article  className={`details`}>
            <h4>{email.subject}  </h4>
            {email.body}
            <div  onClick={() => { onDelete(email.id) }}>
                <i className="fas fa-trash trash"></i></div>
        </article>
  );
}