import '../css/vaccine.css'
const Vaccine = (props)=>{
    const {value,listIndex,date} = props
    return (
        <div className="vaccine" >
            <div className="vaccine-content" >
                <div className="vaccine-info"disabled='trur'>
                    <div className={(value===listIndex?'active-vaccine vaccine-date':'vaccine-date')} ><p>{date}</p></div>
                    <div className="syringe"></div>
                    <div className={(value===listIndex?'active-vaccine vaccine-name':'vaccine-name') }><p>Sinopharm</p></div>
                </div>
                <div className="vaccine-icons">
                    <div className="europan-union"></div>
                    <div className="qr-code"></div>
                </div>
            </div>
        </div>
    )
}
export default Vaccine;