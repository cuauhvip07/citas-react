

function Formulario(){

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
            <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''}<span className="text-indigo-600 font-bold">Administralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="paciente">Nombre:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Ingrese su nombre" id="paciente"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="apellido">Apellido:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Ingrese su apellido" id="apellido"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email" id="email"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Fecha:</label>
                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" id="fecha"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas:</label>
                    <textarea id="sintomas" placeholder="Descripción" className="w-full border-2 p-2 placeholder-gray-400 rounded-md"></textarea>
                </div>

                <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente" />


            </form>
        </div>
    )
}

export default Formulario;

