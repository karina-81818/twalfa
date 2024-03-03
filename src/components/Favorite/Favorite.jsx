import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import icon from './img/bookmark.png'
import styles from '../Favorite/Favorite.module.scss'
import { useEffect, useState } from 'react';
import { set } from 'lodash';

function Favorite() {
    const [count, setCount] = useState();
    const storeDate = useSelector(state => state.favoriteReduser)
    console.log(storeDate)

    useEffect(()=>{
        const length = Object.keys(storeDate).length;
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })

    return (
        <div className={styles.container}>
            <Link to='/favorites'>
                <span className={styles.counter}>{count}</span>
            <img className={styles.icon} src={icon} alt="" />
            </Link>
        </div>
    );
}

export default Favorite;