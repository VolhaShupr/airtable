import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

class TableItem extends Component {
    render(props, state) {
        return (
            <Link href={props.href} name={props.value}>{props.value}</Link>
        )
    }
}

class TablesList extends Component {
    render({tables, url}) {
        return (
            <div>
                <h1>temp</h1>
                <p>List of tables you can choose</p>
                <ul>
                    {tables && tables.map(table => (
                        <li key={table}>
                            <TableItem value={table} href={url + table}/>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TablesList