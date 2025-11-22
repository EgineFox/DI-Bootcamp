import React , { useState } from "react";

export default function Calculator() {
    const [ num1, setNum1] = useState('');
    const [ num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [ result, setResult] = useState(null);

 
    const calculate = () => {
        const a = Number(num1);
        const b = Number(num2);

        switch (operation) {
            case "add":
                setResult(a+b);
                break;
            case "substruct":
                 setResult(a-b);
                break;
            case "multiply":
                 setResult(a*b);
                break;
            case "divide":
                 setResult(b!=0 ? a/b : "Error: division by 0");
                break;
            default:
                setResult('Invalid operation');
        }
    }

    return (
        <div style={{ padding: '20px'}}>
            <h2>React Calculator</h2>
            <input 
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />
            <input 
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Addition</option>
                <option value="substruct">Substruction</option>
                <option value="multiply">Multiplication</option>
                <option value="divide">Division</option>
            </select>


            <button onClick={calculate}>Calculate</button>
            {result != null && <h3>Result: {result}</h3>}

        </div>
    )

}