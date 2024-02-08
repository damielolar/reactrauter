import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    releaseYear: "",
});

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    addMovie(formData);
    setFormData({
        title: "",
        description: "",
        genre: "",
        releaseYear: "",
    });
};

return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        placeholder="Enter movie title here"
        value={formData.title}
        onChange={handleInputChange}
        />
    <button type="submit">Add Movie</button>
    </form>
);
};

const AddMovie = () => {
const [movies, setMovies] = useState([]);

const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
};

return (
    <div className='form'>
        <h1 className='add'>ADD NEW MOVIES</h1>
        <MovieForm addMovie={addMovie} />
        <div>
            {movies.map((movie, index) => (
                <div className='movie-details' key={index}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </div>
            ))}
        </div>
    </div>
);
};

export default AddMovie;