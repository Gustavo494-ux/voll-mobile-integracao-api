import api from "./api"

export async function agendarConsulta(data: Date, especialistaId: string, pacienteId: string){
    try {    
        const resultado = await api.post('/consulta',{
            especialista: especialistaId,
            paciente: pacienteId,
            data
        })
        return resultado.data
    } catch (error) {
        console.error(error)
        return null
    }
}