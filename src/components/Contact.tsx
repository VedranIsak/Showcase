import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState<{ 
        name: string;
        email: string;
        message: string;
    }>
    ({ name: "", email: "", message: "" });

    const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    //Hantera sanering av meddelanden (malware och liknande)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
    };

    return (
        <div id="contactContainer" className={styles.container}>
            <div className={styles.header}>
                <h2>Feel free to send me a message</h2>
            </div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <label>Your name</label>
                <input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='John Doe?'
                    required
                />
                <label>Your email</label>
                <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='johndoe@email.com?'
                    type='email'
                    required 
                />
                <label>Your message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleTextAreaChange}
                    placeholder="John Doe's message?"
                    required 
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