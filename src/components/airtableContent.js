import { h, Component } from 'preact';
import NavButton from './navButton';
import requests from '../utils/requests';
import helpers from '../utils/helpers';
import { Link } from 'preact-router/match';

class AirtableContent extends Component {
    constructor({ tableId }) {
        super();
        this.state = {
            tableId: tableId,
            tableContent: "",
            isSent: false
        }
    }

    componentDidMount(){
        requests.getTableContent(this.state.tableId)
            .then(function(response){
                this.setState({
                    tableContent: response.data
                })
            }.bind(this))
    }

    sendDataToFirebase(){
        if (this.state.tableContent) {
            requests.sendTableContent(this.state.tableId, this.state.tableContent)
                .then(function(response){
                    this.setState({
                        isSent: true
                    })
                }.bind(this));
        }
    }

    render({ tableId }, state) {
        let nameId = helpers.getTableName(tableId);

        return (
            <div>
                <h1>Table: { nameId }</h1>
                <h1>Table: { nameId }</h1>
                <p>This is the content of chosen table #{ nameId }.</p>
                <pre>{ JSON.stringify(state.tableContent, 0, '  ') }</pre>
                <NavButton href={state.isSent ? "/" : null} value="Publish" disabled={!state.tableContent} onClick={() => this.sendDataToFirebase()}/>
            </div>
        );
    }
}

export default AirtableContent