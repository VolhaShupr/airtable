import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import airbase from '../../airbase/schema';


class TableItem extends Component {
	render(props, state) {
		return (
			<Link activeClassName={style.active} href={props.href} name={props.value}>{props.value}</Link>
		)
	}
}

class TablesList extends Component {
    render() {
    	let airtables = airbase.tables;
        return (
			<div class={style.item}>
				<ul>
					{airtables.map(table => (
						<li key={table.id}>
							<TableItem value={table.name} href={"/" + table.id}/>
						</li>
					))}
				</ul>
			</div>
        )
    }
}

class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>List of tables you can choose</p>
				<TablesList />
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
