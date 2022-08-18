import React, {useState} from 'react';

const Form = () => {

    const [form, setForm] = useState('');

    const handleChange = evt => setForm(evt.target.value);

    const handleSubmit = evt => {
        evt.preventDefault();
        alert(`You typed: ${form}`);
        setForm('');
    }

    return (
        <section>
            <h1>Form Demo</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='user'>UserName</label>
                <input 
                    type='text'
                    value={form}
                    id='user'
                    onChange={handleChange}                
                />
                <button>Submit!</button>
            </form>
        </section>
    )

}

export default Form;