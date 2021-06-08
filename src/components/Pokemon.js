function Pokemon({image, name, types}) {
  return (
    <>
      <div>
        <img src={image} alt="" />
      </div>
      <h3>{name}</h3>
      <ul>
        {types.map((type, idx) => (
          <li key={idx}>{type}</li>
        ))}
      </ul>
    </>
  );
}

export default Pokemon;
