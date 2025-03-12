import { auth } from '@/utils/auth';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async () => {
  const session = await auth();
  //   console.log('session', session);

  if (!session?.user) redirect('/login');
  return <div>this is Dashboard page</div>;
};

export default DashboardPage;
