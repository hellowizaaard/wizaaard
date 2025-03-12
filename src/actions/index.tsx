'use server';

import { signIn, signOut } from '@/utils/auth';

export async function SocialLogin(formData: FormData) {
  const action = formData.get('action') as string;
  await signIn(action, {
    redirectTo: '/dashboard',
  });

  // console.log('action', action);
}

export async function Logout() {
  await signOut({ redirectTo: '/' });
}
