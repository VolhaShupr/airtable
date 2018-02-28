import { h, Component } from 'preact';
import Button from './navButton';
import requests from '../utils/requests';

class AirtableContent extends Component {
    constructor({ type }) {
        super();
        this.state = {
            type: type,
            tableContent: "",
            isSent: false
        }
    }

    componentWillMount() {
        this.fetchDataWithInterval();
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    fetchData() {
        requests.getAirtableContent(this.state.type)
            .then(function(response){
                this.setState({
                    tableContent: response.data
                })
            }.bind(this))
            .catch(function(error){
                console.log(error);
            });
    }

    fetchDataWithInterval() {
        this.timeout = setInterval(() => this.fetchData(), 15000);
    }

    setIsSentState(value) {
        this.setState({
            isSent: value
        })
    }

    sendDataToFirebase(){
        if (this.state.tableContent) {
            requests.sendTableContent(this.state.type, this.state.tableContent)
                .then(function(){
                    this.setIsSentState(true);
                }.bind(this))
                .catch(function(error) {
                    console.log(error);
                    this.setIsSentState(false);
                });
        }
    }

    render({ type }, state) {
        return (
            <div>
                <h1>temp</h1>
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