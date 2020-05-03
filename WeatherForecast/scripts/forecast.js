const key = "Fxw8hVSwE0MvYqeIw7As6DoEAOpgpL9w";

const getCity = async (city) => {

    const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const information = await fetch(base + query);
    const data = await information.json();

    return data[0];
};

const getWeather = async (id) => {

    const base = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const information = await fetch (base + query);
    const data = await information.json();

    return data[0];
};