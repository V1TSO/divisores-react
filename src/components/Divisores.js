import React from 'react'

const Divisores = (props) => {
    function divisores(numero) {
        var divisores = [];
        for (var i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }
        return divisores;
    }

    return (
        <div>
            <div>Divisores</div>
            {console.log(divisores(props.numero))}
        </div>
    )
}

export default Divisores