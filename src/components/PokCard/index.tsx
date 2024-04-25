import './index.css'

interface PokCardProps {
  name: string;
  sprites: { front_default: string };
  onClick: () => void;
}


function PokCard(props: PokCardProps) {
  const { name, sprites, onClick } = props;

  return (
    <div onClick={onClick} className='pokemon-card'>
      <p className='pokemon-name'>{name.toUpperCase()}</p>
      <img className='pokemon-image' src={sprites.front_default} alt={name} />
    </div>
  );
}

export default PokCard;
