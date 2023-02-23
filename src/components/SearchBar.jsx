import { useState } from 'react';
import styles from '../cssModulesStyles/SearchBar.module.css'
export default function SearchBar(props) {
   const [id, setId] = useState('');
   const handleChange = e => {
      const {value} = e.target;
      setId(value);
   }
   return (
      <div className={styles.search}>
         <input className={styles.addInput} autocomplete="off" type='search' name='search' onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)} className={styles.addButton}>Agregar</button>
      </div>
   );
}
