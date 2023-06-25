import { watchHomeSaga } from "./homeSaga";
import { call, all } from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
        // call cac saga khac o day
    ]);
}