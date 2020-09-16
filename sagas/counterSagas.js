import {INCREMENT, DECREMENT} from "../actions/actionType";
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

function* increment(){
    console.log("This is increment saga");
}
export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment)
}
export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement)
}
function* decrement(){
    console.log("This is decrement saga");
}