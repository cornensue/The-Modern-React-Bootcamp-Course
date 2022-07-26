class App extends React.Component {

    render() {
        return (
            <section>
                <Hello to="Masta" from="Dor"/>
                <Hello to="Djuly" from="Masta" />
                <Counter />
                <LoopsJSX 
                    name = 'Cornelio'
                    hobbies = {['Dancing', '💻', '🎥', 'Coder', '🇬🇪']}
                />
                <LoopsJSX 
                    name = 'Masta Richy'
                    hobbies = {['Sport', '🎥', 'TV Series']}
                S/>
            </section>
        )
    }
} 

ReactDOM.render(<App />, document.querySelector('#root'));