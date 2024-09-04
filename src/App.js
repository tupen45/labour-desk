import logo from './logo.svg';
import   './App.css';
import React, { useEffect } from 'react'
import img2 from './assests/asian.jpg'
import wal from './assests/WAL.jpg'
import putty from './assests/wallputy.jpg'
import  texture from './assests/texture.jpg'
import { AccountBookFilled, AimOutlined, AlipayCircleFilled, ApiFilled, HomeFilled, LoginOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function App() {
  
  return(
    
  
<>
<div className='tbhcr'>
  <img src={img2} alt='tupen'/>
</div>
<h2 style={{textAlign:'center'}}>আমাদের কাজ </h2>
<div className='con2'>
<div className='sub-con'>
<img src={wal} alt='tupen'/>
<h4>wallpaper</h4>
</div>
<div className='sub-con'>
<img src={putty} alt='tupen'/>
<h4>wall puty</h4>
</div>
<div className='sub-con'>
<img src={texture} alt='tupen'/>
<h4>texture</h4>
</div>
</div>
<div className='con-2'>
  <div className='tb'>
  <div className='tb3'></div>
  <div className='tb-2'></div>
  
</div> 

<div className='tb2'>
<h4 style={{letterSpacing:'2px',display:'flex',marginBottom:10}}>আমরা যত্ন সহকারে walputty texture walpaper কাজ করে থাকি আপনার সপ্নের বাড়িটিকে 
সাজিয়ে তুলতে আমাদের সাথে যোগাযোগ করুন কম খরচে ভালো কাজ 
</h4>
</div>

</div>

<div className='footer'>
 
 <li>
  <ul > <HomeFilled /></ul>
  <ul><WhatsAppOutlined/></ul>
  <ul><Link to='/acount'> <LoginOutlined/></Link></ul>
  
 </li>
</div>
</>                                                                                                                                                                                                                                                                               




)}


export default App;
    