'use server';
import { signIn } from '@/features/auth';

export async function googleAuth() {
  await signIn('google');
}
