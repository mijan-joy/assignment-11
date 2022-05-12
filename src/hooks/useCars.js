import { useEffect, useState } from 'react';

const useCars = () => {

const [cars, setCars] = useState([]);

useEffect( () =>{
    fetch('https://fathomless-hollows-57666.herokuapp.com/cars')
    .then(response => response.json())
    .then(data => setCars(data));
}, []);

    return[cars]
};

export default useCars;