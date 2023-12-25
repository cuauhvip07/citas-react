import Error from "./Error";
import { useState,useEffect } from "react";

function Formulario({pacientes,setPacientes}){

    const [nombre,setNombre] = useState(''); /* Hook -> Guardar y modificar valores */
    const [apellido,setApellido] = useState(''); /* Hook -> Guardar y modificar valores */
    const [email,setEmail] = useState(''); /* Hook -> Guardar y modificar valores */
    const [fecha,setFecha] = useState(''); /* Hook -> Guardar y modificar valores */
    const [sintomas,setSintomas] = useState(''); /* Hook -> Guardar y modificar valores */
    const [error,setError] = useState(false);

    const generaId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now()
        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion del formulario 
        if([nombre,apellido,email,fecha,sintomas].includes('')){
            setError(true)
            return
        }
        setError(false)
        
        // Objeto de paciente
        const objetoPaciente = {
            nombre,
            apellido,
            email,
            fecha,
            sintomas,
            id: generaId()
        }
        
        setPacientes([...pacientes,objetoPaciente])

        // Reiniciar formulario 
        setNombre('');
        setApellido('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}<span className="text-indigo-600 font-bold">Administralos</span></p>

            <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && 
                    <Error>
                        <p>Todos los campos son obligatorios</p>
                    </Error>
                }
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="paciente">Nombre:</label>
                    <input 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" 
                    placeholder="Ingrese su nombre" 
                    id="paciente" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)} /*Cada vez que haya un cambio manda una alerta*/   />
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="apellido">Apellido:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Ingrese su apellido" id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Fecha:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas:</label>
                    <textarea id="sintomas" placeholder="Descripción" className="w-full border-2 p-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}></textarea>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente" />


            </form>
        </div>
    )
}

export default Formulario;

