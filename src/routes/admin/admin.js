import { h, Component } from 'preact';
import AirbaseInfoForm from '../../components/airbaseInfoForm';
import TablesList from '../../components/tablesList';
import requests from '../../utils/requests';
import airbase from '../../airbase/schema';

export default class Admin extends Component {
    constructor() {
        super();
        this.state = {
            userId: "3",
            hasData: false
        }
    }

    componentDidMount(){
        requests.getUserAirbaseInfo(this.state.userId)
            .then(function(snapshot){
                if (snapshot.val()) {
                    airbase.apiKey = snapshot.val().apiKey;
                    airbase.baseId = snapshot.val().baseId;
                    this.setHasDataState();
                }

            }.bind(this))
    }

    setHasDataState() {
        this.setState({
            hasData: true
        });
    }

    render (props, state) {
        let component = state.hasData ? <TablesList /> : <AirbaseInfoForm userId={state.userId} callback={this.setHasDataState.bind(this)} />;
        return (
            <div>
                {component}
            </div>

        )
    }
}