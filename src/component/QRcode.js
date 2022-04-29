import '../css/qrcode.css'
import Dialog from './Dialog'
import { useDispatch,useSelector } from 'react-redux'
import { SET_DIALOG } from '../reducer/reducer';
import { selectDialog } from '../selectors/selectors';
const QRcode = ()=>{
    const dispatch = useDispatch();
    const dialog = useSelector(selectDialog)
    function handleDialog(){
        if(!dialog.dialogState)
        dispatch({
            type:SET_DIALOG,
            payload:{
                dialogState:true
            }
        })
    }
    return(
        <div className="qr-main">
            
            <div className="qr-content">
                <div className="vaccine-info">
                    <p className="vaccine-name" onClick={handleDialog}>Sinopharm (15.09.2021)<span>i</span></p>
                   
                </div>
                <div className="qr-code">
                   
                </div>
            </div>
            <Dialog dialogState={dialog}/>    
        </div>
        
    )
}
export default QRcode;