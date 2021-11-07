import React, { useCallback, useEffect } from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { initializeAppTC, RequestStatusType } from './app-reducer'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../features/Login/Login'
import { logoutTC } from '../features/Login/auth-reducer'
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'

type PropsType = {
    demo?: boolean
}

function App({ demo = false }: PropsType) {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
            <CircularProgress />
        </div>
    }

    return (
        <div className="App">
            <ErrorSnackbar />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Log out</Button>}
                </Toolbar>
                {status === 'loading' && <LinearProgress />}
            </AppBar>
            <Container fixed>
                <Switch>
                    <Route exact path={'/'} render={() => <TodolistsList demo={demo} />} />
                    <Route path={'/login'} render={() => <Login />} />
                    <Route path={'*'} render={() => <Login /> } />
                    <Redirect from={'*'} to={'/login'} />
                </Switch>
            </Container>
        </div>
    )
}

export default App