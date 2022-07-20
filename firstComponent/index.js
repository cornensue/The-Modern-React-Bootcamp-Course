function Hello(props) {
    console.log(props);
    return (
        <section>
            <h1>Hello there!</h1>
            <h2>Another one</h2>
        </section>
    );

}

ReactDOM.render(<Hello />, document.querySelector('#root'));

