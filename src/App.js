import { useState } from "react";

const App = () => {
  const [images, setImages] = useState(null);
  const [value, setValue] = useState(null);
  const surpriseOptions = [
    "yellow red star",
    "life in colors",
    "nether animal rabbit blue",
  ];
  const getImages = async () => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          message: "BLUGH",
        }),
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await fetch("http://localhost:8000/images", options);
      const data = await response.json();
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(value);
  return (
    <div className="app">
      <section className="search-section">
        <p>
          Start with detailed description
          <span className="surprise">Surprise!</span>
        </p>
        <div className="input-container">
          <input placeholder="Some text" onChange={(e) => setValue(e.target.value)}/>
          <button onClick={getImages}>Generate</button>
        </div>
      </section>
      <section className="image-section">
        {images?.map((image, _index) => (
          <img key={_index} src={image.url} alt={`Generated image of${value}`}/>
        ))} 
      </section>
    </div>
  );
};

export default App;
