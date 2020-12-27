import {MisterEmail} from 'MisterEmail.jsx'
import {MissKeeperApp} from 'MissKeeperApp.jsx'
export class Home extends React.Component {
    state = {
        headerStyle: {
            color: 'gold',
            fontSize: 15
        }
    }
    get fontSize() {
        return this.state.headerStyle.fontSize + 'px'
    }
    
    render() {
        const color = this.state.headerStyle.color;
        return (
            <section className="home-container">
                <h1>
                    PegaSus app
                </h1>
                <p>welcome to our amazing app</p>
                <img className={"home-img"} src="../assets/img/home-pegasus.png"/>

 
            </section>
        )
    }
}
