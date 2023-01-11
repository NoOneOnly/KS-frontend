import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles, userId, pwd, active, email, formisuID } = decoded.UserInfo

        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { username, roles, userId, pwd, active, email, status, isManager, isAdmin, formisuID }
    }

    return { username: '', roles: [], userId: '', pwd: '', email: '', formisuID: '', isManager, isAdmin, status }
}
export default useAuth