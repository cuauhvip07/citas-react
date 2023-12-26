import Paciente from "./Paciente";


function ListadoPacientes({pacientes, setPaciente}){

    

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? ( /* Condicional saber si hay pacientes */
                <>
                    <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                    <p className="text-xl text-center mt-5 mb-10 ">Administra tus {' '}<span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>
                </>
            ) 
            : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl text-center mt-5 mb-10 ">Los pacientes apareceran {' '}<span className="text-indigo-600 font-bold uppercase">aqui</span></p>
                </>
            )} 
            

            {
                pacientes.map( paciente => {
                    return(
                        <Paciente
                            key = {paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                        />
                    )
                })
            }


        </div>
    )
}

export default ListadoPacientes;