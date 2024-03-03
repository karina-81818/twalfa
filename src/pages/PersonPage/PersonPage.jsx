import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { getPlanetImage } from '../../servisec/getPlanetData'
import { API_PERSON } from '../../constans/api';

import styles from './PersonPage.module.scss';
import PersonPhoto from './PersonPhoto';

function PersonPage() {
    const [personId, setPersonID] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);
    const storeDate = useSelector(state => state.favoriteReduser);

    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            const res = await getApiResource(`${API_PERSON}/${id}`);

            storeDate[id] ? setPersonFavorite(true) : setPersonFavorite(false)
            
            setPersonID(id)
            setPersonPhoto(getPlanetImage(id))
        })();
    }, []);

   

    
    return (
        <div>
           <PersonPhoto 
           personPhoto={personPhoto} 
           personId={personId} 
           personFavorite={personFavorite}
           setPersonFavorite={setPersonFavorite}
           /> 
           
        </div>
    );
}

export default withErrorApi(PersonPage);