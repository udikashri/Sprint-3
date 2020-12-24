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
                <h2 style={{color:color, fontSize: this.fontSize}}>
                    Home Sweet Home
                </h2>
                <section>
                    <MissKeeperApp/>
                </section>

                <section className="home-mister-email">
                    <MisterEmail/>
                    </section>
            </section>
        )
    }
}