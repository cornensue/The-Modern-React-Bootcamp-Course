class Hello extends React.Component {
    render () {
        const props = this.props;
        return   <h2>Hello {props.to} from {props.from}</h2>      
    }
}