import React from 'react';
import Card from '../cards/card'; 

import '../protolio/portfolio.css'; 

export default function Portfolio() {
  return (
    <div className='container mt-3'>
      <h1 className='text-secondary'>Portfolio</h1>
      <div className='row cards mt-3'>
        <Card title='Web Design' color='#40403f' />
        <Card title='Mobile Design' color='#ae926d' />
        <Card title='Logo Design' color='#40403f' />
        <Card title='Web Application Development' color='#ae926d' />
        <Card title='Mobile Application Development' color='#40403f' />
        <Card title='PWA Development' color='#ae926d' />
      </div>
    </div>
  );
}
