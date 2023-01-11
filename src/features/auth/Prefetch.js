import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice';
import { formisusApiSlice } from '../formisu/formisusApiSlice';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Prefetch = () => {

    useEffect(() => {
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true }))
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
        store.dispatch(formisusApiSlice.util.prefetch('getFormisus', 'fomisusList', { force: true }))




    }, [])

    return <Outlet />
}
export default Prefetch
