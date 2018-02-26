import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class NavButton extends Component {
    render(props) {
        return (
            <nav>
                <Link href={props.href}>
                    <button onClick={props.onClick} disabled={props.disabled}>{props.value}</button>
                </Link>
            </nav>
        )
    }
}