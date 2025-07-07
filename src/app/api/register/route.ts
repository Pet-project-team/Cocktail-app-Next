import { NextResponse } from 'next/server';
import { createUser } from '@/features/queries/users';

import { hash, genSalt } from 'bcrypt';
import { dbConnect } from '@/features/lib/db';

export const POST = async (request: Request) => {
  const { name, email, password } = await request.json();

  await dbConnect();

  const salt = await genSalt(5);
  const hashedPassword = await hash(password, salt);

  const newUser = {
    name,
    password: hashedPassword,
    email,
  };

  try {
    await createUser(newUser);
  } catch (e) {
    console.log(`User isn't created`);
    return new NextResponse(e.mesage, {
      status: 500,
    });
  }
  return new NextResponse('user has been created', {
    status: 201,
  });
};
