import { h, Component } from 'preact';
import AirbaseInfoForm from '../../components/airbaseInfoForm';
import TablesList from '../../components/tablesList';
import requests from '../../utils/requests';
import airbase from '../../airbase/schema';

export default class Admin extends Component {
    constructor() {
        super();
        this.state = {
            userId: "4"
        }
    }

    componentDidMount(){
        requests.getUserAirbaseInfo(this.state.userId)
            .then(function(snapshot){
                if (snapshot.val()) {
                    airbase.apiKey = snapshot.val().apiKey;
                    airbase.baseId = snapshot.val().baseId;
                }
            }.bind(this))
    }

    render (props, state) {

        return (
            <div>
                <AirbaseInfoForm userId={state.userId} />
                <TablesList />
            </div>

        )
    }
}