import React from 'react'
import { Alert } from 'react-bootstrap';

const SuccessAlert = (props) => {


    if (isNaN(props.element)) {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>
                        No es un numero
                    </p>
                </Alert>
            </div>
        )
    }

    else if (props.element > 10_000_000) {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>
                        El numero ingresado supera el máximo permitido (10.000.000)
                    </p>
                </Alert>
            </div>
        )
    }

    else if (props.show)
        return (
            <div>
                <Alert variant="secondary" onClose={() => props.setShow(false)} dismissible>Se han calculado los divisores!</Alert>
            </div>
        )
    else
        return null
}

export default SuccessAlert