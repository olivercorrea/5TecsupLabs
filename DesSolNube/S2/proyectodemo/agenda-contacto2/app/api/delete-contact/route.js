import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const contName = searchParams.get('contName'); // Nombre del contacto a eliminar

  try {
    if (!contName) throw new Error('El nombre del contacto es necesario');
    
    // Buscar el contacto por su nombre
    const existingContact = await sql`SELECT * FROM Contact WHERE Name = ${contName};`;

    // Verificar si se encontró el contacto
    if (existingContact.length === 0) {
      throw new Error('No se encontró ningún contacto con ese nombre');
    }
    
    // Eliminar el contacto de la base de datos
    await sql`DELETE FROM Contact WHERE Name = ${contName};`;

    // Devolver una respuesta exitosa
    return NextResponse.json({ message: `Contacto ${contName} eliminado exitosamente` }, { status: 200 });
  } catch (error) {
    // Manejar cualquier error y devolver una respuesta de error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
