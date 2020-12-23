// import {MissKeeperApp} from '../pages/MissKeeperApp.jsx'
// import {MisterEmail} from '../pages/MisterEmail.jsx'


const { NavLink, withRouter } = ReactRouterDOM;



class _AppHeader extends React.Component {

    state = {
        msg : ''
    }

    // componentDidMount() {
    //     this.unsubscribe = eventBusService.on('showMsg', (msg) => {
    //         this.setState({ msg });
    //     });
    // }
    // componentWillUnmount() {
    //     this.unsubscribe();
    // }
    goToAbout = () => {
        this.props.history.push('/about');
    }        

    render() {
        const {msg} = this.state; 
        return <header className="app-header">
            <nav>
                <ul>
                    <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                    <li><NavLink to="/MissKeeperApp">Miss Keeper App</NavLink></li>
                    <li><NavLink to="/MisterEmail">Mister Email</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                <div className="center">
                    <h1>My App</h1>
                    <a className="small" onClick={this.goToAbout}>
                        Meet the team
                    </a>
                </div>
            </nav>
            {msg && <div className="user-msg">
                {msg}
            </div>}
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader);