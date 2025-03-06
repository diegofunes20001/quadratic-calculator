import { useState } from 'react';

const UseCalculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

    const calculateRoots = (e) => {
        e.preventDefault();
        setError('');
        setResult(null);

        const aNum = parseFloat(a);
        const bNum = parseFloat(b);
        const cNum = parseFloat(c);

        if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
        setError('Por favor, ingresa valores numéricos válidos.');
        return;
        }

        if (aNum === 0) {
        setError('El valor de "a" no puede ser cero.');
        return;
        }

        const discriminant = bNum ** 2 - 4 * aNum * cNum;

        if (discriminant > 0) {
        const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
        const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
        setResult(`Las raíces son: ${root1} y ${root2}`);
        } else if (discriminant === 0) {
        const root = -bNum / (2 * aNum);
        setResult(`La raíz doble es: ${root}`);
        } else {
        setResult('No hay raíces reales.');
        }
    };

    return { a, setA, b, setB, c, setC, result, error, calculateRoots };
}

export default UseCalculator