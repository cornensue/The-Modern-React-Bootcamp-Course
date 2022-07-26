class App extends React.Component {

    render() {
        return (
            <section>
                <h1>Slot Machines!</h1>
                <Machine s1="🍇" s2="🍇" s3="🍇" />
                <Machine s1="🍊" s2="💟" s3="🍇" />
                <Machine s1="🍤" s2="🍤" s3="🍤" />
                <Machine s1="🌖" s2="👎" s3="🏇" />
                <Machine s1="🍊" s2="💟" s3="🍇" />
                <Machine s1=" 🦝" s2=" 🦝" s3=" 🦝" />
                <Machine s1="🥉 " s2="🏝️" s3="🍇" />
                <Machine s1="🥉 " s2="🥉 " s3="🥉 " />
                <Machine s1="🐭" s2="🦟 " s3="🌽" />
                <Machine s1="🍏" s2="🍏" s3="🍏" />
                <Machine s1="🍷" s2="🍷" s3="🍷" />
                <Machine s1="🐎" s2="🍤" s3="🐇" /> 
            </section>
        )
    }
} 

ReactDOM.render(<App />, document.querySelector("#root"));