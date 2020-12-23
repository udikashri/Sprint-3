
export class EmailFilter extends React.Component {

    state = {
        name: '',
    }

    handleChange = (ev) => {
        console.log(ev.target.value);
    };
    render(){
        return(
         <section>
            <input className="input-filter" type="text" name="name"
                // value={this.state.name}
                placeholder="filter"
                onChange={this.handleChange} />

               
        </section>
        )
    }
}


