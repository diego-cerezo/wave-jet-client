import HomePage from "../pages/HomePage/HomePage"
import AircraftsPage from "../pages/Aircrafts/AircraftsPage/AircraftsPage"
import AircraftDetailsPage from "../pages/Aircrafts/AircraftDetailsPage/AircraftDetailsPage"
import FlightsPage from "../pages/Flights/FlightsPage/FlightsPage"
import FlightDetailsPage from "../pages/Flights/FlightDetailsPage/FlightDetailsPage"
import AddFlightFormPage from "../pages/Flights/AddFlightFormPage/AddFlightFormPage"
import EditAircraftFormPage from "../pages/Aircrafts/EditAircraftFormPage/EditAircraftFormPage"
import AddAircraftFormPage from "../pages/Aircrafts/AddAircraftFormPage/AddAircraftFormPage"
import EditFlightFormPage from "../pages/Flights/EditFlightFormPage/EditFlightFormPage"
import AboutPage from "../pages/AboutPage/AboutPage"
import SignupPage from "../pages/Users/SignUpPage/SignUpPage"
import LoginPage from "../pages/Users/LoginPage/LoginPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage"
import PrivateRoute from "./PrivateRoute"
import UsersPage from "../pages/Users/UsersPage/UsersPage"
import { Route, Routes } from "react-router-dom"
import BookingsPage from "../pages/Bookings/BookingsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"




const Approutes = () => {



    return (

        <Routes>
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/fleet'} element={<AircraftsPage />} />
            <Route path={'/fleet/:aircraftId'} element={<AircraftDetailsPage />} />


            {/* NEW BOOKING ROUTES TO BE REVISED*/}

            <Route path={'/bookings'} element={<BookingsPage />} />
            {/* <Route path={'/explore'} element={<ExplorePage />} /> */}



            {/* USER RIGHTS */}

            <Route element={<PrivateRoute onlyAdmin={false} />}>

                <Route path={'/profile'} element={<ProfilePage />} />

            </Route>

            {/* ADMIN RIGHTS */}

            <Route element={<PrivateRoute onlyAdmin={true} />}>

                <Route path={'/users'} element={<UsersPage />} />
                <Route path={'/routes'} element={<FlightsPage />} />
                <Route path={'/routes/:flightId'} element={<FlightDetailsPage />} />
                <Route path={'/routes/add'} element={<AddFlightFormPage />} />
                <Route path={'/routes/edit/:flightId'} element={<EditFlightFormPage />} />
                <Route path={'/fleet/edit/:aircraftId'} element={<EditAircraftFormPage />} />
                <Route path={'/fleet/add'} element={<AddAircraftFormPage />} />
            </Route>


            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    )

}
export default Approutes