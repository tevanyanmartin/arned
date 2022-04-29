import Vaccine from "./Vaccine"
import { useState } from 'react'
import '../css/vaccine.css'
const VaccineList = () => {
    const vaccineDates = ['01.10.2021', '30.10.2021'];
    const [listIndex, setListIndex] = useState(0)
    const handleListIndex = (e) => {
        let target = e.currentTarget.attributes.list_index.value
        e.preventDefault()
        setListIndex(Number(target))
    }
    return (
        <div className="vaccine-list">
            <div className="vaccine-list-content">
                {vaccineDates.map((date, i) => (
                    <div key={date[i] + i} onClick={handleListIndex} list_index={i} className={(i === listIndex ? 'active-vaccine' : '')}>
                        <Vaccine value={i} listIndex={listIndex} date={date} />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default VaccineList;