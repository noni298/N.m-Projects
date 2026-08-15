import Header from './components/Header';
import Tuwaiq from './components/Tuwaiq';
import Sample from './components/Sample';
import Products from './components/Products';
import Footer from './components/Footer';

function App()
{         
   const Message="Welcom Iam Parent";
  const studentlist=[ 
      {id:"1" , name:"Mohammed" , age:20},
      {id:"2" , name:"Yahya" , age:29},
      {id:"3" , name:"Ali" , age:23},
      {id:"4" , name:"Raed" , age:27},
    
    ]

    const item=[
      {id:"1",name:"Yaris" , price:20000 , KM:66000,img:"car3.png"},

      {id:"2",name:"Mazda" , price:50000 , KM:39000,img:"car1.png"},

      {id:"3",name:"GMC" , price:120000 , KM:180000,img:"car4.png"},

      {id:"4",name:"Corilla" , price:300000 , KM:190000,img:"car7.png"}
    ]
  return(

        <>   
       <Header />         
        <Tuwaiq  student={studentlist} />   
        <Sample  msg={Message}/>
            <Products car={item} />
        
      <Footer />
        </>

  );

}
export default App;