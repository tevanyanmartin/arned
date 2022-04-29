import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import '../css/person.css';
import {db,auth} from '../index';
import {doc, getDoc} from 'firebase/firestore';
import { SET_USER } from '../reducer/reducer';
const Person = () =>{
    const dispatch = useDispatch();
    const [armenian,setArmenian] = useState('Loading')
    const [english,setEnglish] = useState('Loading')
    const [image,setImage] = useState('Loading')
    useEffect(()=>{

        onAuthStateChanged(auth,(user)=>{
            if(user){
                getDoc(doc(db,'users',user.uid))
                .then((doc)=>{
                    console.log(doc.data().nameOnArmenian)
                    if(doc.exists){
                        setArmenian(doc.data().nameOnArmenian)
                        setEnglish(doc.data().nameOnEnglish)
                        setImage(doc.data().image)
                        dispatch({
                            type:SET_USER,
                            payload:{
                                data:doc.data(),
                                uid:user.uid
                            }
                        })
                    }
                })
            }
        })
        
    },[])

    
    return(
        <div className="person">
            <div className="person-content">
                <div className="person-image">
                    <div className="avatar" ><img alt="img" src={image} /></div>
                </div>
                <div className="person-name">
                    <p className="on-armenian">{armenian}</p>
                    <p className="on-english">{english}</p>
                </div>
            </div>
        </div>
    )
}
export default Person;