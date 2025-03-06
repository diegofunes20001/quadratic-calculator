// Este componente es un formulario que recibe los valores de a, b y c de la fórmula cuadrática y muestra el resultado de la fórmula cuadrática.
// El componente debe tener un estado local para los valores de a, b y c, el resultado de la fórmula y un mensaje de error.
import UseCalculator  from "../hooks/UseCalculator"

const Calculator  = () => {
    const {
        a,
        setA,
        b,
        setB,
        c,
        setC,
        result,
        error,
        calculateRoots,
        Limpiar
    } = UseCalculator ()

    return (
        <div className="container mt-5">
          <div className="row justify-content-center text-center">
            <div className="col-6 mb-3">
          <h1>Calculadora de Fórmula Cuadrática</h1>
          <form onSubmit={calculateRoots}>
            <div className=" row justify-content-center mb-3">
              <label className="col-6 mb-3">
              ingresa de Numero A:
                <input
                  type="number"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className=" row justify-content-center mb-3">
              <label className="col-6 mb-3">
              ingresa de Numero B:
                <input
                  type="number"
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="row justify-content-center mb-3">
              <label className="col-6 mb-3">
              ingresa de Numero C:
                <input
                  type="number"
                  value={c}
                  onChange={(e) => setC(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="row justify-content-center">
              <div className="col-3 mb-3">
                <button type="submit" className="btn btn-success" onClick={calculateRoots}>
                  Calcular
                </button>
              </div>
              <div className="col-3 mb-3">
                <button type="submit" className="btn btn-danger" onClick={Limpiar}>
                  Limpiar
                </button>
              </div>
            </div>
          </form>
          <label className="col-6 mt-3">Resultado:
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {result && <p>{result}</p>}
          </label>
          </div>
        </div>
        </div>
      );
}

export default Calculator 


 