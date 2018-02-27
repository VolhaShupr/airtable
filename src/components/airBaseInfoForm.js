import { h, Component } from 'preact';
import requests from '../utils/requests';
import airbase from '../airbase/schema';

export default class AirbaseInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKey: "",
            baseId: ""
        }
    }

    onSubmit(event) {
        event.preventDefault();
        let userData = {
            apiKey: this.state.apiKey,
            baseId: this.state.baseId
        };

        requests.sendUserData(this.props.userId, userData)
            .then(function(){
                airbase.apiKey = this.state.apiKey;
                airbase.baseId = this.state.baseId;
                this.props.callback();
            }.bind(this))
            .catch(function(error) {
                console.log(error);
            });


    }

    render (props, state) {
        const isInvalid = !state.apiKey || !state.baseId;

        return (
            <div>
                <h1> Fill airtable info </h1>
                <h1> Fill airbase info </h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div>
                        <label>API Key</label>
                        <input value={state.apiKey} onChange={event => this.setState({apiKey: event.target.value})} placeholder="Your API Key"/>
                    </div>
                    <div>
                        <label>Base Id</label>
                        <input value={state.baseId} onChange={event => this.setState({baseId: event.target.value})} placeholder="Your base Id"  />
                    </div>
                    <button type="submit" disabled={isInvalid}>Save</button>
                </form>
            </div>
        )
    }
}