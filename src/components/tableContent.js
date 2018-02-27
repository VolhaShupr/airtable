import { h, Component } from 'preact';
import {database} from '../components/firebase';

class TableContent extends Component {
    constructor({ type }) {
        super();
        this.state = {
            type: type,
            tableContent: ""
        }
    }

    componentDidMount(){
        database.ref('Tables/' + this.state.type).on('value', (function(snapshot){
            this.setState({
                tableContent: snapshot.val()
            })
        }.bind(this)));
    }

    render({ type }, state) {
        return (
            <div>
                <h1>temp</h1>
                <h1>Table: { type }</h1>
                <p>This is the content of chosen table { type }.</p>
                <pre>{ JSON.stringify(state.tableContent, 0, '  ') }</pre>
            </div>
        );
    }
}

export default TableContent