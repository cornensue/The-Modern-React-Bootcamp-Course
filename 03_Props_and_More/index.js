class App extends React.Component {

    render() {
        return (
            <section>
                <Hello to="Masta" from="Dor"/>
                <Hello to="Djuly" from="Masta" />
            </section>
        )
    }
} 

ReactDOM.render(<App />, document.querySelector('#root'));