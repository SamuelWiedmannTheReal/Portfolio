// pages/index.js
import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <main className='bg-slate-300 dark:bg-gray-700'>
     <Navbar />
    </main>
  );
}

export default App;