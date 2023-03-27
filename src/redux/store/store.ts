import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { usersAPI } from "../../services/usersService";

const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer,
})

// т.к дефолтный useSelector плохо дружит с типами, напишем свой собственный

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat([
                usersAPI.middleware,
            ])
    })
}

export type RootState = ReturnType<typeof rootReducer> // вытащили тип селектора
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']