import React, { useEffect, useState } from 'react';
// import Navbar from '../components/navbar/navbar.jsx';
// import Banner from '../components/banner_film/banner_film.jsx';
// import Slider from '../components/sliders/slider.jsx';
// import { fetchMovies } from '../api';

// const UserProfilePage = () => {
//   const [toWatchMovies, setToWatchMovies] = useState([]);
//   const [favoriteMovies, setFavoriteMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       const movies = await fetchMovies();
//       setToWatchMovies(movies.slice(0, 5)); // Films à voir
//       setFavoriteMovies(movies.slice(0, 5)); // Films aimés
//     };
//     getMovies();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Banner />
//       <div className="content">
//         <Slider title="Favorite Movies" movies={favoriteMovies} />
//         <Slider title="To Watch Movies" movies={toWatchMovies} />
//       </div>
//     </div>
//   );
// };

const UserProfilePage = () => {
  return (
    console.log("page user fixe")
  );
};


export default UserProfilePage;