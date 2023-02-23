import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from '../cssModulesStyles/Detail.module.css'

export default function Detail(props) {
   const { detailId }   = useParams();
   const [ character, setCharacter] = useState({});
   

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);


   return (
      <div>
         <div>
            <Link to='/home'>
               <button className={styles.backBtn}>Volver</button>
            </Link>
         </div>
         <h1>{character.name}</h1>
         <img className={styles.imagen} src={character.image} alt="foto del personaje"/>
         <h2>Especie: {character.species}</h2>
         <h2>Género: {character.gender}</h2>
         <h2>Especie: {character.species}</h2>
         <h2>Estado: {character.status}</h2>
         <h2>Origen: {character.origin?.name}</h2>
         <h2>Ubicación: {character.location?.name}</h2>
      </div>
   )
}