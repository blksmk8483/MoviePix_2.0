require("dotenv").config();

const options3 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.API_BEARER,
  },
};

const getAPIcall = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=Marvel%20Endgame&include_adult=false&language=en-US&page=1&append_to_response=images?include_image_language=299534",
      options3
    );

    const data = await response.json();
    // console.log(data);

    const hereWeGo = {
      id: data.results["0"].id,
      title: data.results["0"].original_title,
      overview: data.results["0"].overview,
      image: data.results["0"].poster_path,
    };
    // console.log(hereWeGo);

    const testData = document.querySelector("#testData");

    const letsTryThis = function () {
      return `
        <h2>${hereWeGo.title}</h2>
        <img class="movieImage" src="https://image.tmdb.org/t/p/original${hereWeGo.image}" alt="${hereWeGo.title}" />
        <p>${hereWeGo.overview}</p>
        <p>${hereWeGo.id}</p>
    `;
    };
    testData.insertAdjacentHTML("afterbegin", letsTryThis());
  } catch (error) {
    console.log(error);
  }
};

getAPIcall();
