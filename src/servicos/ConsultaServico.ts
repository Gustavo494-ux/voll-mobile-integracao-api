import api from "./api"

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string){
    try {    
        console.log(especialistaId)
        console.log(data)
        const resultado = await api.post('/consulta',
        {
            especialista: especialistaId,
            paciente: pacienteId,
            data: data
        })
        return resultado.data
    } catch (error) {
        console.error(error)
        return null
    }
}