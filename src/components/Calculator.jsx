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
        calculateRoots
    } = UseCalculator ()

    return (
        <div className="container-form  mt-5">
          <h1>Calculadora de Fórmula Cuadrática</h1>
          <form onSubmit={calculateRoots}>
            <div className="col-6 mt-3">
              <label>
                a:
                <input
                  type="number"
                  value={a}
                  onChange={(e) => setA(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="col-6 mt-3">
              <label>
                b:
                <input
                  type="number"
                  value={b}
                  onChange={(e) => setB(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="col-6 mt-3">
              <label>
                c:
                <input
                  type="number"
                  value={c}
                  onChange={(e) => setC(e.target.value)}
                  required
                />
              </label>
            </div>
            <button type="submit">Calcular</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {result && <p>{result}</p>}
        </div>
      );
}

export default Calculator 


 