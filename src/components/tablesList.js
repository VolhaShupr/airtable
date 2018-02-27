import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import airbase from '../airbase/schema';

class TableItem extends Component {
    render(props, state) {
        return (
            <Link href={props.href} name={props.value}>{props.value}</Link>
        )
    }
}

class TablesList extends Component {
    render() {
        let airtables = airbase.tables;
        return (
            <div>
                <h1>d</h1>
                <p>List of tables you can choose</p>
                <ul>
                    {airtables.map(table => (
                        <li key={table.name}>
                            <TableItem value={table.name} href={"/admin/" + table.name}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TablesList