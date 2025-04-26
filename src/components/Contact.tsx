import styles from './Contact.module.css';

const Contact = () => {
    const onSubmit = () => {
        
    }

    return (
        <div id="contactContainer" className={styles.container}>
            <div className={styles.header}>
                <h2>Feel free to send me a message</h2>
            </div>
            <form className={styles.formContainer}>
                <label>Your name</label>
                <input 
                    name='nameInput' 
                    placeholder='John Doe?'
                />
                <label>Your email</label>
                <input
                    name='emailInput'
                    placeholder='johndoe@email.com?'
                    type='email' 
                />
                <label>Your message</label>
                <textarea
                    name='messageInput'
                    placeholder='John Doe sends a message?' 
                />
                <input 
                    type='submit' 
                    value="Send" 
                />
            </form>
        </div>
    )
}

export default Contact;