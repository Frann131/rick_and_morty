import styles from '../cssModulesStyles/Form.module.css'
import { useState } from 'react'
import validate from '../validate.js';

export default function Form(props) {
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validate(({
                ...userData,
                [name]: value
            }))
        )
    }

    const handleSubmit = () => {
        props.login(userData);
    }

    return (
        <div>
            <form className={styles.box} onSubmit={handleSubmit}>
                <div className={styles.user}>
                    <label className={styles.logLabel}>Usuario:</label>
                    <input
                        className={styles.inputLog}
                        name='username'
                        type='text'
                        value={userData.username}
                        onChange={handleInputChange} />
                </div>
                <div className={styles.error}>
                        {errors.username ? errors.username : null}
                </div>
                <div className={styles.pass}>
                    <label className={styles.logLabel}>Contraseña:</label>
                    <input
                        className={styles.inputLog}
                        name='password'
                        type='password'
                        value={userData.password}
                        onChange={handleInputChange} />
                </div>
                <div className={styles.error}>
                        {errors.password ? errors.password : null}
                </div>
                <div className={styles.loggBtn}>
                    <button className={styles.logBtn} type='submit'>Ingresar</button>
                </div>
            </form>
        </div>
    )
}