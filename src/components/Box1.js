import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import * as box1Actoun from "./../actions/box1.action";
export default function Box1() {

     const appReducer = useSelector(({appReducer})=>appReducer)  //เรียก gobal state มาลงในตัวแปร
     const box1Reducer = useSelector(({box1Reducer})=>box1Reducer)
    const dispatch = useDispatch()
    return (
        <div>
            <h1 onClick={()=>dispatch(box1Actoun.add())} >Box1 ,B1({box1Reducer.counter1})  </h1>
            <span>{JSON.stringify(appReducer.account)}</span>
        </div>
    )
}
