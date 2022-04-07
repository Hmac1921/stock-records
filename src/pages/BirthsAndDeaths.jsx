import { useLocation, Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCalf } from '../actions/cowActions'
import style from '../pages/BirthsAndDeaths.module.css'


export default function BirthsAndDeaths() {
    //getting right cow from herd page
    const location = useLocation()
    const cows = location.state
    const dispatch = useDispatch()
    const [offspringState, setOffspringState] = useState({
        id: '',
        tag: '',
        breed: '',
        sex: '',
        DoB: ''
    })

    function updateData(idNo, value) {
        if (idNo === "calfId") {
            let holder = { ...offspringState }
            holder.id = value
            setOffspringState(holder)

        } if (idNo === "calfTag") {
            let holder = { ...offspringState }
            holder.tag = value
            setOffspringState(holder)

        } if (idNo === "calfBreed") {
            let holder = { ...offspringState }
            holder.breed = value
            setOffspringState(holder)

        } if (idNo === "calfSex") {
            let holder = { ...offspringState }
            holder.sex = value
            setOffspringState(holder)

        } if (idNo === "calfDoB") {
            let holder = { ...offspringState }
            holder.DoB = value
            setOffspringState(holder)

        }
    }
    function addOffspring() {
        cows.offspring.unshift(offspringState)
        dispatch(addCalf(cows.id, offspringState))
    }


    //map out all calves in here so i can have a full record of offspring
    return (
        <section>
            <div className={style.headerImg}><h1 className={style.headerFont}>- Births and Deaths -</h1></div>
            <Link to={'/'}><input className={style.button} type="button" value="Back to the Start" /></Link>
            <article className={style.cowCard}>
                <div className={style.cowInfoOne}>
                    <h2>Cow Number: {cows.id}</h2>
                    <h2>Full Tag: {cows.tag}</h2>
                    <h2>Breed: {cows.breed} </h2>
                    <h2>Date of Birth: {cows.DoB}</h2>
                </div>
                {
                    cows.offspring.map((calf, i) => (
                        <div key={i} className={style.cowInfoTwo}>
                            <h2>Offspring: </h2>
                            <h2>Offspring id: {calf.id}</h2>
                            <h2>Offspring tag: {calf.tag}</h2>
                            <h2>Offspring breed: {calf.breed}</h2>
                            <h2>Offspring sex: {calf.sex}</h2>
                            <h2>Offspring date of birth: {calf.DoB}</h2>
                            <input className={style.button} type="button" value="Create full record" />

                        </div>
                    ))

                }

            </article>
            <article>
                <form className={style.form}>
                    <label htmlFor="calfId">Calf id:</label>
                    <input className={style.input} type="text" placeholder="Calf id" id="calfId" onChange={(e) => updateData("calfId", e.target.value)} />

                    <label htmlFor="calfTag">Calf tag:</label>
                    <input className={style.input} type="text" placeholder="Calf tag" id="calfTag" onChange={(e) => updateData("calfTag", e.target.value)} />

                    <label htmlFor="calfBreed">Calf breed: </label>
                    <input className={style.input} type="text" placeholder="Calf breed" id="calfBreed" onChange={(e) => updateData("calfBreed", e.target.value)} />

                    <label htmlFor="calfSex">Calf sex:</label>
                    <input className={style.input} type="text" placeholder="Calf sex" id="calfSex" onChange={(e) => updateData("calfSex", e.target.value)} />

                    <label htmlFor="calfDoB">Calf date of birth: </label>
                    <input className={style.input} type="text" placeholder="Calf date of birth" id="calfDoB" onChange={(e) => updateData("calfDoB", e.target.value)} />

                    <input className={style.button} type="button" value="Add Calf" onClick={addOffspring} />

                </form>
            </article>
        </section>
    )
}

