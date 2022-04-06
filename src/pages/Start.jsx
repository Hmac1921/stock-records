import style from '../pages/Start.module.css'
import { Link } from 'react-router-dom'

export default function Start() {

    return (
        <section className={style.startPage}>
            <h1 className={style.welcome}> - Welcome - </h1>
            <div>
                <Link to={"/herd"}> <input type="button" value="Herd" className={style.button} /> </Link>
                <Link to={"/newStock"}><input type="button" value="Add a New Cow" className={style.button} /></Link>
            </div>
        </section>
    )
}