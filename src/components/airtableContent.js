import { h, Component } from 'preact';
import Button from './navButton';
import requests from '../utils/requests';
import helpers from '../utils/helpers';

class AirtableContent extends Component {
    constructor({ type }) {
        super();
        this.state = {
            type: type,
            tableContent: "",
            isSent: false
        }
    }

    componentDidMount(){
        requests.getTableContent(this.state.type)
            .then(function(response){
                this.setState({
                    tableContent: response.data
                })
            }.bind(this))
    }

    sendDataToFirebase(){
        if (this.state.tableContent) {
            requests.sendTableContent(this.state.type, this.state.tableContent)
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

    render({ type }, state) {
        return (
            <div>
                <h1>Table: { type }</h1>
                <h1>Table: { type }</h1>
                <p>This is the content of chosen table { type }.</p>
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