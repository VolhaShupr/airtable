import { h, Component } from 'preact';
import AirbaseInfoForm from '../../components/airbaseInfoForm';
import TablesList from '../../components/tablesList';
import requests from '../../utils/requests';

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
                    localStorage.setItem("airbaseInfo", JSON.stringify({
                        apiKey: snapshot.val().apiKey,
                        baseId: snapshot.val().baseId
                    }));
                    this.setHasDataState();
                }

            }.bind(this))
    }

    setHasDataState() {
        this.setState({
            hasData: true
        });
    }

    render() {
        const AIRTABLES = ["catalogue", "visuals", "shows"];

        let component = this.state.hasData ?
            <TablesList tables={AIRTABLES} url="/admin/"/> :
            <AirbaseInfoForm userId={this.state.userId} callback={this.setHasDataState.bind(this)} />;

        return (
            <div>
                {component}
            </div>
        )
    }
}