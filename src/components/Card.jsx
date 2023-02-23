import { Link } from 'react-router-dom';
import styles from '../cssModulesStyles/Card.module.css'

export default function Card(props) {
   return (
      <div className={styles.indCard}>
         <button className={styles.closeBtn} onClick={props.onClose}>×</button>
         <Link to={`/detail/${props.detailId}`} className={styles.link}>
            <h1><a>{props.name}</a></h1>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="Foto de Rick Sanchez" style={{borderRadius: 20}}/>
      </div>
   );
}
