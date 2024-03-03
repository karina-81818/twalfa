import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { removePlanetList } from '../../store/action';
import styles from './PlanetList.module.scss'


function PlanetList({setPlanet, planet, id,name, img}) {
    const dispatch = useDispatch();

    const deleteItem=(id)=>{
        
        const updateList = planet.filter((item)=> item.id !== id)
        setPlanet(updateList)
        dispatch(removePlanetList(updateList))
    }
    return (
        <ul className={styles.listContainer}>
        {planet.map(({id, name, img}) => 
            <li className={styles.listItem} key={id} >
                <Link to={`/Planet/${id}`} >
               <img className={styles.planetImg} src={img} alt={name} />
               <p>{name}</p>
               </Link>
               <button onClick={deleteItem}>Delete</button>
            </li>
        )} 
    </ul>
    );
}

export default PlanetList;