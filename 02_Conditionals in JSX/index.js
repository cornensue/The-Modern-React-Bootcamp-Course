function getNum () {
    return Math.floor(Math.random() * 10) +1 ;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg; 
        if (num === 8 || num === 3) {
            msg = 
                <section>
                    <h2>CONGRATS!!</h2>
                    <img src="https://media.giphy.com/media/z95UnKH3Rgdm1V9Y4f/giphy.gif"/>
                </section>;
        } else {
            msg = <h3>Sorry, You lose! 😢</h3>;
        }
        
        return (
            <section>
                <h1>Your number is: {num}</h1>
                {msg}
            </section>
        )
    }
} 

ReactDOM.render(<NumPicker />, document.querySelector('#root'));