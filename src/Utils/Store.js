import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchGeez } from "./Middleware/Middleware";
import AuthStore from "./Store/AuthStore";
import UserStore from "./Store/UserStore";
import MediaStore from "./Store/MediaStore";
const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    AuthStore: AuthStore,
    UserStore: UserStore,
    MediaStore: MediaStore,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchGeez);

export default Store;
