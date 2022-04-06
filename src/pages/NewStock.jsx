import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from '../pages/NewStock.module.css'
import { getHerd } from "../actions/cowActions"

export default function NewStock() {
    const dispatch = useDispatch()

    const [addcow, setAddCow] = useState({
        id: 0,
        tag: "",
        breed: "",
        sex: "",
        DoB: "",
        dam: "",
        sire: "",
        movements: {
            prevLocation: 0,
            prevAddress: "",
            currentLocation: 0,
            currentAddress: "",
            newLocation: 0,
            newAddress: "",
            onFarm: false
        },
        medicine: {
            startOfTreatment: "",
            endOfTreatment: "",
            nameOfMedicine: "",
            amountGivenInMls: 0,
            batchNo: "",
            hadMedicine: false
        },
        offspring: {
            id: 0,
            tag: "",
            breed: "",
            sex: "",
            DoB: "",
            hasOffspring: false
        },
        description: "",
        notes: ""
    })

    function saveData(category, newVal) {
        if (category === 'id') {
            let holderList = { ...addcow }
            holderList.id = newVal
            setAddCow(holderList)
        }
        if (category === 'tag') {
            let holderList = { ...addcow }
            holderList.tag = newVal
            setAddCow(holderList)
        }
        if (category === 'breed') {
            let holderList = { ...addcow }
            holderList.breed = newVal
            setAddCow(holderList)
        }
        if (category === 'sex') {
            let holderList = { ...addcow }
            holderList.sex = newVal
            setAddCow(holderList)
        }
        if (category === 'dob') {
            let holderList = { ...addcow }
            holderList.DoB = newVal
            setAddCow(holderList)
        }
        if (category === 'dam') {
            let holderList = { ...addcow }
            holderList.dam = newVal
            setAddCow(holderList)
        }
        if (category === 'sire') {
            let holderList = { ...addcow }
            holderList.sire = newVal
            setAddCow(holderList)
        }
        if (category === 'prevLocation') {
            let holderList = { ...addcow }
            holderList.prevLocation = newVal
            setAddCow(holderList)
        }
        if (category === 'prevAddress') {
            let holderList = { ...addcow }
            holderList.prevAddress = newVal
            setAddCow(holderList)
        }
        if (category === 'currentLocation') {
            let holderList = { ...addcow }
            holderList.currentLocation = newVal
            setAddCow(holderList)
        }
        if (category === 'currentAddress') {
            let holderList = { ...addcow }
            holderList.currentAddress = newVal
            setAddCow(holderList)
        }

    }

    function postTest() {

        fetch('http://localhost:5001/api_post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addcow)
        })
            .then(response => response.json())
            .then(data => dispatch(getHerd(data)));
    }


    function addStock() {
        dispatch({ type: "ADD_STOCK", payload: addcow })
        dispatch({ type: "UPDATE_API", payload: addcow })
    }
    let updatedCows = useSelector(state => state.payload)
    console.log(updatedCows);

    return (
        <article className={styles.container}>
            <div className={styles.headerImg}><h1 className={styles.headerFont}> - New Stock - </h1></div>
            <form className={styles.form}>
                <label htmlFor="id"> Last six tag numbers </label>
                <input className={styles.standardInput} type="number" placeholder="individuel id" id="id" onChange={(e) => saveData('id', e.target.value)} />

                <label htmlFor="tag">Full tag number</label>
                <input className={styles.standardInput} type="text" placeholder="full tag" id="tag" onChange={(e) => saveData('tag', e.target.value)} />

                <label htmlFor="breed">Breed</label>
                <input className={styles.standardInput} type="text" placeholder="breed" id="breed" onChange={(e) => saveData('breed', e.target.value)} />

                <label htmlFor="sex">Sex</label>
                <input className={styles.standardInput} type="text" placeholder="sex" id="sex" onChange={(e) => saveData('sex', e.target.value)} />

                <label htmlFor="dob">Date of Birth</label>
                <input className={styles.standardInput} type="text" placeholder="date of birth" id="dob" onChange={(e) => saveData('dob', e.target.value)} />

                <label htmlFor="dam">Dam </label>
                <input className={styles.standardInput} type="text" placeholder="dam" id="dam" onChange={(e) => saveData('dam', e.target.value)} />

                <label htmlFor="sire">Sire</label>
                <input className={styles.standardInput} type="text" placeholder="sire" id="sire" onChange={(e) => saveData('sire', e.target.value)} />

                <label htmlFor="prevLocation">Previous location number </label>
                <input className={styles.standardInput} type="text" placeholder="previous location" id="prevLocation" onChange={(e) => saveData('prevLocation', e.target.value)} />

                <label htmlFor="prevAddress">Previous Address </label>
                <input className={styles.standardInput} type="text" placeholder="previous address" id="prevAddress" onChange={(e) => saveData('prevAddress', e.target.value)} />

                <label htmlFor="currentLocation">Add your location number  </label>
                <input className={styles.standardInput} type="text" placeholder="current Location" id="currentLocation" onChange={(e) => saveData('currentLocation', e.target.value)} />

                <label htmlFor="currentAddress">Add your address </label>
                <input className={styles.standardInput} type="text" placeholder="current address" id="currentAddress" onChange={(e) => saveData('currentAddress', e.target.value)} />



                <input className={styles.buttonAddStock} type="button" value="Add Stock" onClick={addStock} />
                <input className={styles.buttonTester} type="button" value="tester" onClick={postTest} />

            </form>
        </article>
    )
}