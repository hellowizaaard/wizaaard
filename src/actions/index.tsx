'use server';

import { signIn } from '@/utils/auth';

export async function SocialLogin(formData) {
  console.log('form data', formData);
  const action = formData.get('action');
  await signIn(action, {
    redirectTo: '/',
  });

  // console.log('action', action);
}

export async function Logout() {}
