import { handler } from "./api/animals";
import { useEffect, useState } from "react";

const Home = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/animals")
      .then((response) => response.json())
      .then((animals) => setAnimals(animals));
  }, []);

  const handlePost = () => {
    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Gato Colombiano", animal: "Gato" }),
    };

    fetch("http://localhost:3000/api/animals", request)
      .then((response) => response.json())
      .then((data) => setAnimals(data));
  };

  return (
    <div>
      <h1 className="text-l font-bold">Flame Factory</h1>
      <div>
        <ul>
          {animals.map((i, key) => {
            return <li key={key}>{i.animal}</li>;
          })}
        </ul>
      </div>
      <div>
        <button onClick={handlePost}>Enviar</button>
      </div>
    </div>
  );
};

export default Home;
