
const getMood = () => {
    const moods = ['😠', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

function JSXDemo (props) {
    console.log(props);
    return (
        <section>
            <h1>My current mood is: {getMood()}</h1>
        </section>
    );

}

ReactDOM.render(<JSXDemo />, document.querySelector('#root'));

