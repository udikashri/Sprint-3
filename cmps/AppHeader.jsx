// import {MissKeeperApp} from '../pages/MissKeeperApp.jsx'
// import {MisterEmail} from '../pages/MisterEmail.jsx'


const { NavLink, withRouter } = ReactRouterDOM;



class _AppHeader extends React.Component {

    state = {
        msg: ''
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
        const { msg } = this.state;
        return <header className="app-header">
            <nav>
                <div className="center">
                    <h1 className="animate__animated animate__flip">PegaSusApp</h1>

                </div>
                <ul>
                    <li className="animate__animated animate__zoomInDown"><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
                    <li className="animate__animated animate__zoomInDown"><NavLink to="/MissKeeperApp">Miss Keeper</NavLink></li>
                    <li className="animate__animated animate__zoomInDown"><NavLink to="/MisterEmail">Mister Email</NavLink></li>
                    <li className="animate__animated animate__zoomInDown"><NavLink to="/about">About</NavLink></li>
                </ul>

            </nav>
            {msg && <div className="user-msg">
                {msg}
            </div>}
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader);