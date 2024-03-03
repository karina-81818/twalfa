import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import {API_PLANETS} from '../../constans/api';
import { getPlanetId, getPlanetImage } from '../../servisec/getPlanetData'
import PlanetList from '../../components/PlanetList/PlanetList';
import { useParams } from 'react-router';

import styles from './PlanetPage.module.scss';
import { removePlanetList, setPlanetList } from '../../store/action';

function PlanetPage({setErrorApi}) {
    const [planet, setPlanet] = useState(null);
    const dispatch = useDispatch();
    const storeDate = useSelector(state => state.planetReduser);
    console.log(storeDate)

    const getResource = async (url) => {
        const res = await getApiResource(url);
        
        if(res){
            const planetList = res.results.map(({ name, url }) => {
                const id = getPlanetId(url)
                const img = getPlanetImage(id)
                
                 return{
                     id,
                     name,
                     img
                 }
                 
             })
             setPlanet(planetList)
             dispatch(setPlanetList(planetList))
             setErrorApi(false)
         }else{
            setErrorApi(true)
         }
    }
   
    const deleteItem=(id)=>{
        
        const updateList = planet.filter((item)=> item.id !== id)
        console.log(updateList)
        setPlanet(updateList)
        dispatch(removePlanetList(planetList))
    }

    useEffect(()=>{
        getResource(API_PLANETS);
    },[])

    return (
        <>
            <h1 className='header_text'>Navigation</h1>
            {planet && <PlanetList planet={planet} setPlanet={setPlanet} deleteItem={deleteItem}/>}
        </>
       
    )
}
export default withErrorApi(PlanetPage);