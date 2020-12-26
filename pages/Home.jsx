import {MisterEmail} from 'MisterEmail.jsx'
import {MissKeeperApp} from 'MissKeeperApp.jsx'
export class Home extends React.Component {
    state = {
        headerStyle: {
            color: 'gold',
            fontSize: 15
        }
    }
    // Getter function:
    get fontSize() {
        return this.state.headerStyle.fontSize + 'px'
    }
    componentDidMount() {}
    

    render() {
        // Destructering
        const color = this.state.headerStyle.color;
        return (
            <section className="home-container">
                <h1>
                    PegaSus app
                </h1>
                <p>welcome to our amazing app</p>
                <img src="../assets/img/home-pegasus.jpg"/>

 
            </section>
        )
    }
}

{/* <h1 style={{color:color, fontSize: this.fontSize}}> */}
