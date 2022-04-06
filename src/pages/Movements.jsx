import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { newLocationNo } from '../actions/cowActions'
import styles from '../pages/Movements.module.css'

export default function Movements() {

    const location = useLocation()
    const herd = location.state
    const dispatch = useDispatch()

    let newLocationNum = ''
    let newAddressHere = ''


    function getDetails(id, event) {
        if (id === 'locationNumber') {
            herd.movements.newLocation = event
            newLocationNum = event

        } if (id === 'newAddress') {
            herd.movements.newAddress = event
            newAddressHere = event
        }
    }

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

/*  <div >
            Medicine:
            <p>Medicine given: {herd.medicine.nameOfMedicine}</p>
            <p>Start of Treatment: {herd.medicine.startOfTreatment} </p>
            <p>End of Treatment: {herd.medicine.endOfTreatment} </p>
            <p>Amount Given in mls: {herd.medicine.amountGivenInMls}</p>
            <p>Medicine batch: {herd.medicine.batchNo}</p>
        </div>
        <div>
            Offspring:
            <p>id: {herd.offspring.id}</p>
            <p>tag: {herd.offspring.tag}</p>
            <p>breed: {herd.offspring.breed}</p>
            <p>sex: {herd.offspring.sex}</p>
            <p>Date Calved: {herd.offspring.DoB}</p>
        </div>*/