import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/fields')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);
    const [fields, setFields] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/reports/fields?technician_id=1')
            .then(response => response.json())
            .then(json => setFields(json))
            .catch(error => console.error(error));
    }, []);
    const [tasks, setTasks] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/reports/tasks?technician_id=1')
            .then(response => response.json())
            .then(json => setTasks(json))
            .catch(error => console.error(error));
    }, []);
    const test = null;

    return (
        <div className="App">
            <div>
                <h1>Lista Obszarów i Serwisantów</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Identyfikator Obszaru</th>
                        <th>Nazwa</th>
                        <th>Aktywny</th>
                        <th>Identyfikator Serwisanta</th>
                        <th>Nazwisko Serwisanta</th>
                        <th>Czy Serwisant Jest Aktywny</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => (
                        <tr key={index}>

                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.active}</td>
                            <td>{item.technicianId}</td>
                            <td>{item.technicianSurname}</td>
                            <td>{item.technicianActive}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h1>Edycja Działania</h1>
                <form action="/tasks">
                   <label for="TaskID">Identyfikator Działania </label>
                    <input type="number" id="TaskID" name="TaskID"/>
                    <label htmlFor="FieldID">Identyfikator Obszaru </label>
                    <input type="number" id="FieldID" name="FieldID"/>
                    <button onClick={test}>Wyślij</button>
                </form>
            </div>
            <div>
                <h1>Edycja Obszaru</h1>
                <form action="/fields">
                    <label htmlFor="FieldID">Identyfikator Obszaru </label>
                    <input type="number" id="FieldID" name="FieldID"/>
                    <label htmlFor="TechnicianID">Identyfikator Serwisanta </label>
                    <input type="number" id="TechnicianID" name="TechnicianID"/>
                    <button onClick={test}>Wyślij</button>
                </form>
            </div>
            <div>
                <h1>Obszary Serwisanta</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Identyfikator Obszaru</th>
                        <th>Nazwa</th>
                        <th>Aktywny</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fields?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.active}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h1>Działania Serwisanta</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Identyfikator Działania</th>
                        <th>Opis</th>
                        <th>Czas Wykonania</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.taskDescription}</td>
                            <td>{item.executionTime}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default App;