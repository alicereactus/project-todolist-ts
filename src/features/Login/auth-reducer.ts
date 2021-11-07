import { Dispatch } from 'redux'
import { setAppStatusAC } from '../../app/app-reducer'
import { authAPI, FieldErrorType, LoginParamsType } from '../../api/todolists-api'
import { handleServerAppError, handleServerNetworkError } from '../../utils/error-utils'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export const loginTC = createAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType, { rejectValue: { errors: Array<string>, fieldsErrors?: Array<FieldErrorType> } }>(
    "auth/login",
    async (param, thunkApi) => {
        thunkApi.dispatch(setAppStatusAC({ status: 'loading' }))
        try {
            const res = await authAPI.login(param)
            if (res.data.resultCode === 0) {
                thunkApi.dispatch(setAppStatusAC({ status: 'succeeded' }))

                return { isLoggedIn: true } 
            } else {
                handleServerAppError(res.data, thunkApi.dispatch)

                return thunkApi.rejectWithValue({ errors: res.data.messages, fieldsErrors: res.data.fieldsErrors })
            }
        } catch (error: any) {
            handleServerNetworkError(error, thunkApi.dispatch)

            return thunkApi.rejectWithValue({ errors: [error.message], fieldsErrors: undefined })
        }
    })

const slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        setIsLoggedInAC(state, action: PayloadAction<{ value: boolean }>) {
            state.isLoggedIn = action.payload.value
        }
    },
    extraReducers: builder => {
        builder.addCase(loginTC.fulfilled, (state, action) => {
            state.isLoggedIn = action.payload?.isLoggedIn
        })
    }
})

export const authReducer = slice.reducer
export const { setIsLoggedInAC } = slice.actions

// thunks
export const logoutTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({ status: 'loading' }))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC({ value: false }))
                dispatch(setAppStatusAC({ status: 'succeeded' }))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}
