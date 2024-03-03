import { useDispatch } from 'react-redux';
import { setPersonTofavorite, removePersonTofavorite} from '../../store/action'
import iconFavorite from './img/heart_red.png'
import iconNotFavorite from './img/heart_black.png'
import styles from './PersonPage.module.scss'


const PersonPhoto = ({personPhoto, personId, personFavorite, setPersonFavorite}) => {
    const dispatch = useDispatch();

    const removeSet = () =>{
        if(personFavorite){
            dispatch(removePersonTofavorite(personId))
            setPersonFavorite(false)
        } else{
            dispatch(setPersonTofavorite({
                [personId]: {
                    img: personPhoto,
                    id: personId
                },
            }));
            setPersonFavorite(true)
        }
    }

    return(
        <>
        <div className={styles.container}> 
        <img className={styles.photo} src={personPhoto}/>
        <img 
        onClick={removeSet}
        className={styles.favorite}
        src={personFavorite 
            ? iconFavorite
            : iconNotFavorite
            } 
        alt="like" 
        />
        </div>
        </>
    )
}
export default PersonPhoto;