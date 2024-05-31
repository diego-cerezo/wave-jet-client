import { useContext, useEffect, useState } from "react"
import UsersList from "../../../components/Users/UsersList/UsersList"
import { AuthContext } from "../../../contexts/auth.context"
import { Link } from 'react-router-dom'
import { Container } from "react-bootstrap"
import Loader from "../../../components/Loader/Loader"
import authServices from "../../../services/auth.services"



const UsersPage = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {

        authServices
            .getAllUsers()
            .then(({ data }) => {
                setUsers(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="FlightsPage">
            <Container>


                {
                    isLoading ? <Loader /> : <UsersList users={users} />
                }

                <hr />

            </Container>
        </div>


    )
}

export default UsersPage