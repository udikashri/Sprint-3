// const { Link } = ReactRouterDOM;

export function EmailDetails({ email, onDelete, onExpand, isExpand }) {


    return (

        <article className={`details`}>
            <h4>{email.subject}  </h4>
           <p>{email.body}</p> 
            <div onClick={() => { onExpand() }}>
                {!isExpand &&<i className="fas fa-expand expand"></i>}
                {isExpand && <i className="fas fa-compress expand"></i>}

            </div>
            <div onClick={() => { onDelete(email.id) }}>
                <i className="fas fa-trash trash"></i></div>
        </article>
    );
}