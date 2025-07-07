import { User } from '@/features/model/user-model';

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}
