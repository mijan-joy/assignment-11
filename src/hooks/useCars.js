import { useEffect, useState } from 'react';

const useCars = () => {

const [cars, setCars] = useState([]);

useEffect( () =>{
    fetch('http://localhost:5000/cars')
    .then(response => response.json())
    .then(data => setCars(data));
}, []);

    return[cars]
};

export default useCars;