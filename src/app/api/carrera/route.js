import { NextResponse } from "next/server"

export const GET = async () =>{
 try {
    return NextResponse.json({data: 
    await listCarreras() },
    {status:200})
 } catch (error) {
    return NextResponse.json({},{status500})
    
 }
    
}