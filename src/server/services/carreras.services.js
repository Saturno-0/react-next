export const listCarreras = async () =>{
    const carreras = await Prisma.carrera.
    findMany()
    return carreras
}