import { h, Component } from 'preact';
import TablesList from '../../components/tablesList';
import helpers from '../../utils/helpers';
import {database} from '../../components/firebase';
import style from './style';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tables: ""
        }
    }

    componentDidMount(){
        database.ref('Tables').on('value', (function(snapshot){
            this.setState({
                tables: snapshot.val()
            })
        }.bind(this)));
    }

	render(props, {tables}) {
        let tablesName = helpers.getDbTablesName(tables);
		return (

			<div class={style.home}>
				<TablesList tables={tablesName} url="/"/>
			</div>
		);
	}
}

export default Home



{/* to get names of all tables past the following into the browser console of the API documentation page
console.log(JSON.stringify(_.mapValues(application.tablesById, table => _.set(
  _.omit(table, ['sampleRows']),
  'columns',
  _.map(table.columns, item => _.set(item, 'foreignTable', _.get(item, 'foreignTable.id')))
))))
*/}
