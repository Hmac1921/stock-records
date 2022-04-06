import { useSelector } from "react-redux"

import HerdDetails from "../Components/HerdDetails"
import style from "../pages/Herd.module.css"



export default function Herd() {
    const cows = useSelector(state => state.cows.cows)


    return (
        <section className={style.herdPage}>
            <div className={style.headerImg}><h1 className={style.headerFont}>- Herd -</h1></div>
            <HerdDetails props={cows} />
        </section>
    )
}