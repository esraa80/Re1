// /* eslint-disable jsx-a11y/img-redundant-alt */



// import React from 'react';
// // import headerimg from '../../assets/safy.webp'
//  export default class Navbar extends React.Component{

// // eslint-disable-next-line no-useless-constructor
// constructor(){ //1
//     super()
//     this.state={
//         // changable Data
//     }
// }

// componentDidMount(){} //3 ngoniti
// componentDidUpdate(){} // updating
// componentWillUnmount(){} //clean up method

// render(){ //2
//     return <React.Fragment>
//            {/* <h1>Hello from My Website</h1> */}
//            {/* <img src={headerimg} alt="Header Image" /> */}
//            <div className='header'>
//            <h1>Safynaz Abdelraheem</h1>
//            <p>Front End Developer</p>
//            <button>Contact Me</button>
//            </div>
         

//     </React.Fragment>
  
// }


// }



import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {


  return (
    <header>
     

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://imagess.net/wp-content/uploads/2017/05/1200.jpg')", height: '400px' }}
      >
          <div className='d-flex justify-content-center align-items-center h-100 '>
            <div className='text-white'>
              <h1 className='mb-3'>Esraa Mohamed</h1>
              <h4 className='mb-3'>Front End</h4>
           
              <button type="button" className="btn btn-primary">Contact Me</button>
            </div>
          </div>
   
      </div>
    </header>
    
  );
}