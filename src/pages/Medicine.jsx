import { useSelector } from "react-redux"
import { useLocation } from "react-router"
import { useDispatch } from "react-redux"
import { giveMedicine } from "../actions/cowActions"
import { updateMedicine } from "../actions/medicineActions"
import style from '../pages/Medicine.module.css'
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Medicine() {
    // state to hold all medicine input updates
    const [medicineState, setMedicineState] = useState({
        nameOfMedicine: '',
        startOfTreatment: '',
        endOfTreatment: '',
        amountGivenInMls: '',
        batchNo: ''
    })
    // state to keep track of total medicine avaiable
    const [total, setTotal] = useState(0)
    //getting medicine data from state
    let medicine = useSelector(state => state.update.update)

    //using location to get individual cow data
    const location = useLocation()
    const cows = location.state
    // setting up dispatch
    const dispatch = useDispatch()

    // function that saves user input to state (extra save in the amount saved as a string so needs to be converted first)
    function updateData(id, value) {
        if (id === "medicineGiven") {
            let holder = { ...medicineState }
            holder.nameOfMedicine = value
            setMedicineState(holder)
            cows.medicine.nameOfMedicine = value
        } if (id === "startOfTreatment") {
            let holder = { ...medicineState }
            holder.startOfTreatment = value
            setMedicineState(holder)
            cows.medicine.startOfTreatment = value
        } if (id === "endOfTreatment") {
            let holder = { ...medicineState }
            holder.endOfTreatment = value
            setMedicineState(holder)
            cows.medicine.endOfTreatment = value
        } if (id === "amountGiven") {
            let holder = { ...medicineState }
            holder.amountGivenInMls = value
            setMedicineState(holder)
            cows.medicine.amountGivenInMls = value
            let convert = parseInt(cows.medicine.amountGivenInMls)
            setTotal(+ convert)
        } if (id === "medicineBatch") {
            let holder = { ...medicineState }
            holder.batchNo = value
            setMedicineState(holder)
            cows.medicine.batchNo = value
        }
    }

    // function that handles dispatch to update redux
    function addMedicine() {
        dispatch(giveMedicine(cows.id, medicineState))
        dispatch(updateMedicine(medicineState.amountGivenInMls, medicineState.batchNo))
    }


    return (
        <section>
            <div className={style.headerImg}><h1 className={style.headerFont}>- Medicine -</h1></div>
            <Link to={'/'}><input className={style.button} type="button" value="Back to the Start" /></Link>
            <section className={style.mainContainer}>
                <article className={style.cowInfo}>
                    <div>
                        <h2>Cow Number: {cows.id}</h2>
                        <h2>Full Tag: {cows.tag}</h2>
                        <h2>Breed: {cows.breed} </h2>
                        <h2>Date of Birth: {cows.DoB}</h2>
                    </div>
                    <div>
                        <h2>Medicine given: {cows.medicine.nameOfMedicine}</h2>
                        <h2>Start of Treatment: {cows.medicine.startOfTreatment} </h2>
                        <h2>End of Treatment: {cows.medicine.endOfTreatment} </h2>
                        <h2>Amount Given in mls: {cows.medicine.amountGivenInMls}</h2>
                        <h2>Medicine batch: {cows.medicine.batchNo}</h2>
                    </div>
                </article>
                <article>
                    <form className={style.form} >
                        <label htmlFor="medicineGiven">Name of medicine</label>
                        <input className={style.input} type="text" placeholder="Medicine given" id="medicineGiven" onChange={(e) => updateData("medicineGiven", e.target.value)} />

                        <label htmlFor="startOfTreatment">Start of treatment</label>
                        <input className={style.input} type="date" placeholder="yyyy-mm-dd" id="startOfTreatment" onChange={(e) => updateData("startOfTreatment", e.target.value)} />

                        <label htmlFor="endOfTreatment">End of treatment</label>
                        <input className={style.input} type="date" placeholder="yyyy-mm-dd" id="endOfTreatment" onChange={(e) => updateData("endOfTreatment", e.target.value)} />

                        <label htmlFor="amountGiven">Amount given (in mls or grams)</label>
                        <input className={style.input} type="text" placeholder="Amount given" id="amountGiven" onChange={(e) => updateData("amountGiven", e.target.value)} />

                        <label htmlFor="medicineBatch">Batch number </label>
                        <input className={style.input} type="text" placeholder="Batch number" id="medicineBatch" onChange={(e) => updateData("medicineBatch", e.target.value)} />

                        <input className={style.button} type="button" value="Add Medicine" onClick={addMedicine} />
                    </form>
                </article>
                <article>
                    {
                        medicine.map((stock, i) => (

                            <article key={i} className={style.medicineContain}>
                                <div>
                                    <h2>Name: {stock.nameOfMedicine}</h2>
                                    <h2>Qty in batch: {stock.qtyPurchasedInMl}</h2>
                                    <h2>Batch number: {stock.batchNo}</h2>
                                    <h2>Expiry date: {stock.expiry}</h2>
                                    <h2>Withdrawel period: {stock.withdrawalPeriod}</h2>
                                    <h2>Supplier: {stock.supplier}</h2>
                                    <h2>Total qty of {stock.nameOfMedicine}: {medicine[0].totalQty - total}</h2>
                                </div>
                                <div>
                                    <h2>Disposal</h2>
                                    <h2>Qty disposed of: {stock.disposal.qtyDisposedOf}</h2>
                                    <h2>How was it disposed of: {stock.disposal.howDisposedOf}</h2>
                                    <h2>Where was it disposed of: {stock.disposal.whereDisposedOf}</h2>
                                </div>
                            </article>
                        ))
                    }
                </article>
            </section>
        </section>
    )
}