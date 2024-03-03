import { useSelector } from 'react-redux';
import PlanetList from '../../components/PlanetList/PlanetList'
import styles from './FavoritePage.module.scss'
import { useEffect, useState } from 'react';

function FavoritePage () {
    const [planet, setPlanet] = useState([]);
    const storeDate = useSelector(state => state.favoriteReduser);
    
    console.log(storeDate)
    
    useEffect(()=>{
        const arr = Object.entries(storeDate);
       
        if(arr.length){
            const res = arr.map(item => {
                return{
                    id: item[0],
                    ...item[1]
                }
            })
            setPlanet(res)
        }
    }, [])

       

    return(
        <>
        <h1>FavoritePage</h1>
        {planet.length 
        ? <PlanetList planet={planet}/>
        : <h2 className={styles.comment}>No date</h2>
    }
        
        </>
    )
}
export default FavoritePage;