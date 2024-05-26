import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  firstName: string;
  lastName: string;
}

async function getData() {
  try {
    // await new Promise((r)=> setTimeout(r, 5000));
    const response = await axios.get('http://localhost:3000/api/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
}

export default async function Home() {
  
  const user = await getData();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       name is {user.firstName}
       {user.lastName} 
    </div>
  );
}
