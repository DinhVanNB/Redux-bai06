import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';
import { 
        DELETE_BY_ID,
        FETCH_USER, 
        DELETE_BY_ID_SUCCESS,
        FETCH_USER_SUCCESS
    } from '../redux/action';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
    try {
        const reponse = yield axios.get(baseURL);
        yield put ({type: FETCH_USER_SUCCESS, payload:reponse.data })
    }
    catch(err){
        console.log('err - getUser: ', err);
    }
}

function* deleteById(action) {
        try {
            const reponse = yield axios.delete(`${baseURL}/${action.payload}`);
            yield put({
                    type: DELETE_BY_ID_SUCCESS, payload: action.payload
            })
            alert(` reponse status ${reponse.status}`);
        }  
        catch(err){
            console.log('err - deleteById: ', err);  
        }  
}

export default function* rootSaga(){
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETE_BY_ID, deleteById);
}