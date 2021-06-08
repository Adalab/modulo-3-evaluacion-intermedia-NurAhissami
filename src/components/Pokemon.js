function Pokemon({image, name, types}) {
  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <ul className="ulTypes">
        {types.map((type, idx) => (
          <li className="PokemonTypes" key={idx}>
            {type}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Pokemon;
