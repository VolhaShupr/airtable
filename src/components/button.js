import { h, Component } from 'preact';

export default class Button extends Component {
    render(props) {
        return (
            <div>
                <button onClick={props.onClick} disabled={props.disabled}>{props.value}</button>
            </div>
        )
    }
}