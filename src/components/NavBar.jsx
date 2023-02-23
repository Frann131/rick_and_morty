import SearchBar from "./SearchBar"
import styles from '../cssModulesStyles/NavBar.module.css'
import { NavLink } from "react-router-dom"

export default function NavBar(props) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <NavLink to={'/home'} style={{height: 1}}>
                    <li className={styles.items}>Home</li>
                </NavLink>
                <NavLink to={'/about'} style={{height: 1}}>
                    <li className={styles.items}>About</li>
                </NavLink>
                <li style={{paddingLeft: 20}}><SearchBar onSearch={props.onSearch}/></li> 
            </ul>
        </nav>
        
    )
}