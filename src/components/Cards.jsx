import Card from './Card';
export default function Cards(props) {
   const { characters } = props;
   return (
      <div style={{display:'flex'}}>
         { characters && characters.map(character => (
            <Card
               key={character.name}
               name={character.name}
               species={character.species}
               gender={character.gender}
               image={character.image}
               onClose={() => props.onClose(character.id)}
               detailId={character.id}
            />
         ))}
      </div>
   );
}
