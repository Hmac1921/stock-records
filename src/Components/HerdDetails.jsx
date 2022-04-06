import { useState, useEffect } from "react"
import style from "../pages/Herd.module.css"
import { Link } from "react-router-dom"

export default function HerdDetails(props) {
    //state sent down as props from page
    let herdList = props.props

    console.log(herdList);
    //local states for search input
    const [searchTerms, setSearchTerms] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [stockOnFarm, setStockOnFarm] = useState([])

    //filters herd list to only the cows that are on the farm, 
    useEffect(() => {
        let holder = herdList.filter((cow) => cow.movements.onFarm == true)
        console.log(holder);
        setStockOnFarm(holder)
    }, [herdList])


    // gets user input and saves to local state
    function getSearch(e) {
        let userInput = e.target.value
        setSearchTerms(userInput)
    }

    //adds matching results to a second state, object so using a foreach also searches cows which are no longer on the farm 
    function checkResults() {
        herdList.forEach(cow => {

            if (searchTerms.includes(cow.id)) {
                let holderList = [...searchResults]
                holderList.push(cow)
                setSearchResults(holderList)
            }
        });
    }

    //listens to the input box so it updates
    useEffect((checkResults), [searchTerms])

    // Clears search results, allows multiple cows to be searched at one time. 
    function clearResults() {
        setSearchResults([])
    }
    //contitionally renders if there arent any results in the search results state
    if (searchResults.length < 1) {
        return (
            <section>
                <section className={style.searchContainer}>
                    <input type="text" placeholder="search" onChange={(e) => getSearch(e)} />
                </section>
                <div>
                    {
                        stockOnFarm.map((herd, i) => (

                            <article key={i} className={style.cowCard}>
                                <div className={style.cowInfoOne}>
                                    <div>
                                        <h2>Cow Number: {herd.id}</h2>
                                        <h2>Full Tag: {herd.tag}</h2>
                                        <h2>Breed: {herd.breed} </h2>
                                        <h2>Date of Birth: {herd.DoB}</h2>
                                    </div>
                                    <div>
                                        <h2>Dam: {herd.dam}</h2>
                                        <h2>Sire: {herd.sire}</h2>
                                        <h3>Description: {herd.description}</h3>
                                        <h3>Notes: {herd.notes}</h3>
                                    </div>
                                    <div className={style.cowImg}></div>
                                </div>
                                <div className={style.cowInfoTwo}>Movements:
                                    <p> Previous location No. - {herd.movements.prevLocation}</p>
                                    <p>  Previous location Address - {herd.movements.prevAddress}</p>
                                    <p> Current location No. - {herd.movements.currentLocation}</p>
                                    <p>  Current location Address - {herd.movements.currentAddress}</p>
                                </div>
                                <div className={style.cowInfoTwo}>
                                    Medicine:
                                    <p>Medicine given: {herd.medicine.nameOfMedicine}</p>
                                    <p>Start of Treatment: {herd.medicine.startOfTreatment} </p>
                                    <p>End of Treatment: {herd.medicine.endOfTreatment} </p>
                                    <p>Amount Given in mls: {herd.medicine.amountGivenInMls}</p>
                                    <p>Medicine batch: {herd.medicine.batchNo}</p>
                                </div>
                                <div className={style.cowInfoTwo}>
                                    Offspring:
                                    <p>id: {herd.offspring.id}</p>
                                    <p>tag: {herd.offspring.tag}</p>
                                    <p>breed: {herd.offspring.breed}</p>
                                    <p>sex: {herd.offspring.sex}</p>
                                    <p>Date Calved: {herd.offspring.DoB}</p>
                                </div>
                                <div className={style.buttonContainer}>
                                    <Link to={'/movements'} state={herd}> <input className={style.button} type="button" value="Update a Movement" /> </Link>
                                    <Link to={'/medicine'} state={herd}>  <input className={style.button} type="button" value="Update Medicine Record" /></Link>
                                    <Link to={'/birthsAndDeaths'} state={herd}> <input className={style.button} type="button" value="Update a Birth or a Death" /> </Link>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </section>
        )
        // if there are results in the search results state this id rendered instead
    } else if (searchResults.length >= 1) {
        return (
            <section>
                <section className={style.searchContainer}>
                    <input type="text" placeholder="search" onChange={(e) => getSearch(e)} />
                </section>
                <div>
                    {
                        searchResults.map((herd, i) => (
                            <article key={i} className={style.cowCard}>
                                <div className={style.cowInfoOne}>
                                    <div>
                                        <h2>Cow Number: {herd.id}</h2>
                                        <h2>Full Tag: {herd.tag}</h2>
                                        <h2>Breed: {herd.breed} </h2>
                                        <h2>Date of Birth: {herd.DoB}</h2>
                                    </div>
                                    <div>
                                        <h2>Dam: {herd.dam}</h2>
                                        <h2>Sire: {herd.sire}</h2>
                                        <h3>Description: {herd.description}</h3>
                                        <h3>Notes: {herd.notes}</h3>

                                    </div>
                                    <div className={style.cowImg}></div>
                                </div>

                                <div className={style.cowInfoTwo}>Movements:
                                    <p> Previous location No. - {herd.movements.prevLocation}</p>
                                    <p>  Previous location Address - {herd.movements.prevAddress}</p>
                                    <p> Current location No. - {herd.movements.currentLocation}</p>
                                    <p>  Current location Address - {herd.movements.currentAddress}</p>
                                    <p> New location No. - {herd.movements.newLocation}</p>
                                    <p> New location Address - {herd.movements.newAddress}</p>
                                </div>
                                <div className={style.cowInfoTwo}>
                                    Medicine:
                                    <p>Medicine given: {herd.medicine.nameOfMedicine}</p>
                                    <p>Start of Treatment: {herd.medicine.startOfTreatment} </p>
                                    <p>End of Treatment: {herd.medicine.endOfTreatment} </p>
                                    <p>Amount Given in mls: {herd.medicine.amountGivenInMls}</p>
                                    <p>Medicine batch: {herd.medicine.batchNo}</p>
                                </div>
                                <div className={style.cowInfoTwo}>
                                    Offspring:
                                    <p>id: {herd.offspring.id}</p>
                                    <p>tag: {herd.offspring.tag}</p>
                                    <p>breed: {herd.offspring.breed}</p>
                                    <p>sex: {herd.offspring.sex}</p>
                                    <p>Date Calved: {herd.offspring.DoB}</p>
                                </div>
                                <div className={style.buttonContainer}>
                                    <Link to={'/movements'} state={herd}> <input className={style.button} type="button" value="Update a Movement" /> </Link>
                                    <Link to={'/medicine'} state={herd}>  <input className={style.button} type="button" value="Update Medicine Record" /></Link>
                                    <Link to={'/birthsAndDeaths'} state={herd}> <input className={style.button} type="button" value="Update a Birth or a Death" /> </Link>
                                </div>
                            </article>
                        ))
                    }
                </div>
                <input className={style.button} type="button" value="Clear Search Results" onClick={clearResults} />
            </section>
        )
    }
}