// import { eventBusService } from "../services/eventBusService.js";
import {EmailApp} from '../cmps/MisterEmail/EmailApp.jsx'

export class MisterEmail extends React.Component {
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
        // const color = this.state.headerStyle.color;
        const {color} = this.state.headerStyle;
        return (
            <section>
                {/* <h2> */}
                    {/* mister email </h2> */}
                    <EmailApp/>
            </section>
        )
    }
}