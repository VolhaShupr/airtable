import { h, Component } from 'preact';
import Button from './navButton';
import requests from '../utils/requests';
import helpers from '../utils/helpers';

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
                }.bind(this))
                .catch(function(error) {
                   console.log(error);
                    this.setState({
                        isSent: false
                    })
                });
        }
    }

    render({ tableId }, state) {
        let name = helpers.getTableName(tableId);

        return (
            <div>
                <h1>Table: { name }</h1>
                <h1>Table: { name }</h1>
                <p>This is the content of chosen table { name }.</p>
                <pre>{ JSON.stringify(state.tableContent, 0, '  ') }</pre>
                <Button value="Publish" disabled={!state.tableContent} onClick={() => this.sendDataToFirebase()}/>
                {state.isSent &&
                    <p>Data was published successfully</p>
                }
            </div>
        );
    }
}

export default AirtableContent