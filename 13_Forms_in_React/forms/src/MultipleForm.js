import React, {useState} from 'react';

const MultipleForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = evt => setUsername(evt.target.value);
    const handleEmail = evt => setEmail(evt.target.value);
    const handlePassword = evt => setPassword(evt.target.value);

    const handleSubmit = evt => {
        evt.preventDefault();
        alert(`You typed: ${username}`);
        setUsername('');
    }

    return (
        <section>
            <h1>Form w / Multiple Inputs</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={username}
                    name='username'
                    placeholder='username'
                    onChange={handleChange}                
                />
                <input 
                    type='email'
                    value={email}
                    name='email'
                    placeholder='email'
                    onChange={handleEmail}             
                />
                <input 
                    type='password'
                    value={password}
                    name='password'
                    placeholder='password'
                    onChange={handlePassword}                
                />
                <button>Submit!</button>
            </form>
        </section>
    )

}

export default MultipleForm;