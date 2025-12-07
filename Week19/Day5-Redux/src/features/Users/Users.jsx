import {useEffect} from 'react'
import { fetchUsers } from './usersSlice'
import {useSelector, useDispatch} from "react-redux"

export default function Users() {

    const users = useSelector((state) => state.userReduser.users)
    const status = useSelector((state) => state.userReduser.status)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchUsers());
    }, []);

if (status === 'loading') return <h2>Waiting for users...</h2>
  return (
    <div>Users
    { users && users.map(item  => {
        return <div key={item.id}> {item.name}</div>
    })}
    </div>
  )
}
