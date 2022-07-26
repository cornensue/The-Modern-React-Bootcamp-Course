const Machine = (props)  => {

    const {s1, s2, s3}  = props;
    const winner = (s1 === s2) & (s2 === s3);

    return (
        <section className="Machine">
            <p>{s1} {s2} {s3}</p>
            <h4 className={winner ? "win" : "lose"}>
                {winner ? "You win!" : "You lose!"}
            </h4>
        </section>
    )
}
