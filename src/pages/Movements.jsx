import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { newLocationNo } from '../actions/cowActions'
import styles from '../pages/Movements.module.css'

export default function Movements() {
    // getting data from location and setting up dispatch
    const location = useLocation()
    const herd = location.state
    const dispatch = useDispatch()
    //only saving two bits of info here so saved as variables
    let newLocationNum = ''
    let newAddressHere = ''

    // gets user inputs and saves to variables
    function getDetails(id, event) {
        if (id === 'locationNumber') {
            herd.movements.newLocation = event
            newLocationNum = event

        } if (id === 'newAddress') {
            herd.movements.newAddress = event
            newAddressHere = event
        }
    }
    //sends data to reducer and updates infor on screen
    function moveCow() {
        dispatch(newLocationNo(herd.id, newLocationNum, newAddressHere))
        document.querySelector('.updateNo').innerText = 'New location No: ' + herd.movements.newLocation
        document.querySelector('.updateAddress').innerText = 'New Address: ' + herd.movements.newAddress

    }


    return (
        <section>
            <div className={styles.headerImg}><h1 className={styles.headerFont}> - Movements - </h1></div>
            <article className={styles.movementCard}>

                <div >
                    <h2>Cow Number: {herd.id}</h2>
                    <h2>Full Tag: {herd.tag}</h2>
                    <h2>Breed: {herd.breed} </h2>
                    <h2>Date of Birth: {herd.DoB}</h2>
                    <h2>Dam: {herd.dam}</h2>
                    <h2>Sire: {herd.sire}</h2>
                    <h3>Description: {herd.description}</h3>
                    <h3>Notes: {herd.notes}</h3>
                </div>
                <div >
                    <h2>Movements:</h2>
                    <p> Previous location No. - {herd.movements.prevLocation}</p>
                    <p>  Previous location Address - {herd.movements.prevAddress}</p>
                    <p> Current location No. - {herd.movements.currentLocation}</p>
                    <p>  Current location Address - {herd.movements.currentAddress}</p>
                    <p className={'updateNo'}>New location no. - {herd.movements.newLocation}</p>
                    <p className={'updateAddress'}>New location address - {herd.movements.newAddress}</p>
                </div>
            </article>
            <article className={styles.inputHolder}>
                <label htmlFor="newLocation"> New location No.</label>
                <input className={styles.input} type="text" placeholder="New location number" id='newLocation' onChange={(e) => getDetails('locationNumber', e.target.value)} />

                <label htmlFor="addressNew"> New address</label>
                <input className={styles.input} type="text" placeholder="New location address" id='addressNew' onChange={(e) => getDetails('newAddress', e.target.value)} />


                <input className={styles.button} type="button" value="Move Off Farm" onClick={moveCow} />
            </article>
        </section>

    )
}

