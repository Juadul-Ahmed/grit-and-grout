'use client'
import { UpdateUserProfile } from '@/components/UpdateUserProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const profilePage = () => {
  const userData = authClient.useSession();
    const user = userData.data?.user;
    console.log(user)
  return (
    <div className='mt-8'>
      <Card className='max-w-96 mx-auto flex flex-col items-center border'>
           <Avatar className="w-20 h-20 text-large">
                      <Avatar.Image
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                       
                      />
                      <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <h2 className='text-xl font-bold'>{user?.name}</h2>
                    <p className='text-muted'>{user?.email}</p>
                    <UpdateUserProfile/>
      </Card>
    </div>
  );
};

export default profilePage;