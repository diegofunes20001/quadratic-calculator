import UseCalculator  from '../hooks/UseCalculator'

const Calculator  = () => {
    const {
        NumeroA,
        setNumeroA,
        NumeroB,
        setNumeroB,
        NumeroC,
        setNumeroC,
        resultado,
        Sumar,
        Limpiar
    } = useCalculator ()

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese primer número A :</label>
                    <input type="number" className="form-control" value={NumeroA} onChange={(e) => setNumeroA(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese segundo número B :</label>
                    <input type="number" className="form-control" value={NumeroB} onChange={(e) => setNumeroB(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Ingrese tercer número C :</label>    
                    <input type="number" className="form-control" value={NumeroC} onChange={(e) => setNumeroC(e.target.value)} />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="form-label">Resultado:</label>
                    <input type="number" className="form-control" value={resultado} readOnly />
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-3 mb-3">
                    <button className="btn btn-success" onClick={Sumar} >Sumar</button>
                </div>
                <div className="col-3 mb-3">
                    <button className="btn btn-danger" onClick={Limpiar} >Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default UseCalculator 


 