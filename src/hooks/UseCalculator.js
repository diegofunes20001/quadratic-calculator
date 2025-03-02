import { useState } from "react"
import useCalculator from "../components/Calculator"

const  useCalculator = () => {
  const [NumeroA = setNumeroA] = useState(A)
  const [NumeroB = setNumeroB] = useState(B)
  const [NumeroC = setNumeroC] = useState(C)
  const [resultado = setResultado] = useState("")

    const Sumar = () => {
        if (NumA  === "" || NumB === "" || NumC === "") {
            Alerta("Todos los campos son obligatorios")
            return
        }

        if (isNaN(NumeroA) || isNaN(NumeroB) || isNaN(NumeroC)) {
            Alerta("Todos los campos deben ser números")
            return
        }

        setResultado(parseInt(NumeroA) + parseInt(NumeroB) + parseInt(NumeroC))
    }
    
    const Limpiar = () => {
        setNumeroA('')
        setNumeroB('')
        setNumeroC('')
        setResultado('')
    }

    const Alerta = (mensaje) => {
        Swal.fire({
            title: "Advertencia",
            text: mensaje,
            icon: "warning"
        })
    }

    return {
        NumeroA,
        setNumeroA,
        Numerob,
        setNumeroB,
        NumeroC,
        setNumeroC,
        resultado,
        Sumar,
        Limpiar
    }
}

export default useCalculator