import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contName = searchParams.get('contName');
  const number = searchParams.get('number');
 
  try {
    if (!contName || !number) throw new Error('Nombre y el numero son necesarios');
    await sql`INSERT INTO Contact (Name, Number) VALUES (${contName}, ${number});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const cont = await sql`SELECT * FROM Contact;`;
  return NextResponse.json({ cont }, { status: 200 });
}
