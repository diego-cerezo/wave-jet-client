import FlightCard from "../FlightCard/FlightCard"
import { Row, Col } from "react-bootstrap"

const FlightsList = ({ flights }) => {

    return (

        <>

            <Row>
                {
                    flights.map(elm => {
                        return (
                            <Col lg={{ span: 6 }} md={{ span: 6 }} key={elm._id}>
                                <FlightCard {...elm} />
                            </Col>
                        )
                    })
                }
            </Row>

        </>


    )
}

export default FlightsList