import { AppHeader } from 'cmps/AppHeader.jsx';
// import { About } from './pages/About.jsx';
import { Home } from 'pages/Home.jsx';
import { MisterEmail } from 'pages/MisterEmail.jsx';
import {MissKeeperApp} from 'pages/MissKeeperApp.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class RootCmp extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    {/* <MisterEmail/> */}
                    <AppHeader />
                    <Switch>
                        {/* <Route path="/pet/edit/:petId?" component={PetEdit} />
                        <Route path="/pet/:petId" component={PetDetails} /> */}
                        <Route path="/MissKeeperApp" component={MissKeeperApp} />
                        <Route path="/MisterEmail" component={MisterEmail} />
                        {/* <Route path="/survey" component={Survey} /> */}
                        <Route path="/" component={Home} />
                    </Switch>
                    <footer className="fotter animate__animated animate__tada">coffeerights 2020</footer>
                </section>
            </Router>
        );
    }
}
