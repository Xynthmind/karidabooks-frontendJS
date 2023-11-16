//Importación de estilos de bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';




//Importación de Router

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




//Importaciones de las paginas

import Login from './views/ClienteAnonimo/Login';

import Register from './views/ClienteAnonimo/Register';

import Home from './views/Home';

import Book from './views/Devoluciones/Book';

import BooksList from './views/BooksList';

import HomeInventary from './views/Inventario/HomeInventary';

import FormBook from './views/Inventario/FormBook';

import Cart from './views/Devoluciones/Cart';

import Payment from './views/ClienteRegistrado/Payment';

import Account from './views/Devoluciones/Account';

import VerDetallePedido from './views/ClienteRegistrado/VerDetallePedido';

import Ordenes from './views/ClienteRegistrado/Ordenes';





//Importaciones de Paqueteria

import HomePaq from './views/Paqueteria/HomePaqueteria';

import OrdenesNoEnviadas from './views/Paqueteria/OrdenesNoEnviadas';

import EnvioOrden from './views/Paqueteria/EnvioOrden';

import EntregaOrden from './views/Paqueteria/EntregaOrden';

import OrdenesEnviadas from './views/Paqueteria/OrdenesEnviadas';

import ViewPaq from './views/Paqueteria/ViewPaqueterias';

import UpPaq from './views/Paqueteria/UpPaqueterias';

import ModPaq from './views/Paqueteria/ModPaqueterias';
import AccountPaq from './views/Paqueteria/AccountAdminPaq';




//Importaciones de Administrador de Empleados

import HomeAdmin from './views/Administrador/HomeAdmin';

import ViewEmp from './views/Administrador/ViewEmployees';

import UpEmp from './views/Administrador/UpEmployees';

import ModEmp from './views/Administrador/ModEmployees';
import AccountAdminEmp from './views/Administrador/AccountAdminEmp';




import NoRes from './views/ClienteAnonimo/NoRes';





// All imports for Compras

import PurchaseHome from './views/Compras/PurchaseHome';




import ModProducts from './views/Compras/Products/ModProducts';




import ViewProduct from './views/Compras/Products/ViewProduct';

// Emd imports for Compras




// All imports for Customer Support Client

import CustomerSuppHome from './views/CustomerSupp/ClientViews/CSHome';

import CallForm from './views/CustomerSupp/ClientViews/CallForm';

import EmailForm from './views/CustomerSupp/ClientViews/EmailForm';

import Terms from './views/CustomerSupp/ClientViews/Terms';

import Privacity from './views/CustomerSupp/ClientViews/Privacity';

// End imports for Customer Support Client




// All imports for Customer Support Admon

import CSAdmonHome from './views/CustomerSupp/AdmonViews/CSAdmonHome';

import AllCalls from './views/CustomerSupp/AdmonViews/AllCalls';

import AllMails from './views/CustomerSupp/AdmonViews/AllMails';

import CallsView from './views/CustomerSupp/AdmonViews/CallsView';

import EmailsView from './views/CustomerSupp/AdmonViews/EmailsView';

// End imports for Customer Support Admon




import { UserProvider } from './models/UserContext';

import Devoluciones from './views/Devoluciones/DevolucionesCliente';

import DevolucionesHome from './views/Devoluciones/DevolucionesHome';

import Atenderdev from './views/Devoluciones/AtenderDev';



import DevProcesadas from './views/Devoluciones/DevProcesadas';

import HomeAlmacen from './views/Devoluciones/HomeAlmacen';

import DevProcAdmin from './views/Devoluciones/DevProcAdmin';

import EditarPerfil from './views/ClienteRegistrado/EditarPerfil';

import FormasPago from './views/ClienteRegistrado/FormasPago';

import EditarMetodoPago from './views/ClienteRegistrado/EditarMetodoPago';

import DevolucionesAtendidos from './views/Devoluciones/DevolucionesAtendidos';






function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/book/:book' element={<Book />} />
          <Route path='/books' element={<BooksList />} />

          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/payment' element={<Payment />} />
          <Route path='/account' element={<Account />}/>
          <Route path='/devoluciones' element={<Devoluciones/>}/>
          <Route path='/devolucionesHome' element={<DevolucionesHome/>}/>
          <Route path='/atenderDev' element={<Atenderdev/>}/>
          <Route path='/devprocesadas' element={<DevProcesadas/>}/>
          <Route path='/homealmacen' element={<HomeAlmacen/>}/>
          <Route path= '/NoRes' element={<NoRes/>}/>


      //Routes for Compras 
          <Route path='/purchasehome' element={<PurchaseHome />} />

          <Route path='/homeInventary' element={<HomeInventary />} />
          <Route path='/formBook' element={<FormBook />} />

          <Route path='/modproducts' element={<ModProducts />} />
          <Route path='/viewproducts' element={<ViewProduct />} />
        //End routes for Compras

        //Rutas para paqueteria
        <Route path='/homepaq' element={<HomePaq />} />
        <Route path='/ordenesnoenv' element={<OrdenesNoEnviadas />} />
        <Route path='/envioorden' element={<EnvioOrden />} />
        <Route path='/ordenesenv' element={<OrdenesEnviadas />} />
        <Route path='/entregaorden' element={<EntregaOrden />} />
        <Route path='/viewpaq' element={<ViewPaq />} />
        <Route path='/uppaq' element={<UpPaq />} />
        <Route path='/modpaq' element={<ModPaq />} />
        <Route path='/accountpaq' element={<AccountPaq />} />

        //Rutas para Administrador de Empleados
        <Route path='/homeadmin' element={<HomeAdmin />} />
        <Route path='/viewemp' element={<ViewEmp />} />
        <Route path='/upemp' element={<UpEmp />} />
        <Route path='/modemp' element={<ModEmp />} />
        <Route path='/accountadminemp' element={<AccountAdminEmp />} />


        //Routes for Customer Support Client
          <Route path='/cshome' element={<CustomerSuppHome />} />
          <Route path='/callform' element={<CallForm />} />
          <Route path='/emailform' element={<EmailForm />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacity' element={<Privacity />} />
        //End routes for Customer Support Client

        // Routes for Customer Support Admon
        <Route path='/csadmonhome' element={<CSAdmonHome />} />
        <Route path='/allcalls' element={<AllCalls />} />
        <Route path='/allmails' element={<AllMails />} />
        <Route path='/callsview' element={<CallsView />} />
        <Route path='/emailsview' element={<EmailsView />} />
        // Routes for Customer Support Admon 

        </Routes>
      </Router>
    </UserProvider>
  );


  return (

    <UserProvider>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path='/book/:book' element={<Book />} />

          <Route path='/books' element={<BooksList />} />




          <Route path='/cart' element={<Cart />}></Route>

          <Route path='/payment' element={<Payment />} />

          <Route path='/account' element={<Account />}/>

          <Route path='/devoluciones' element={<Devoluciones/>}/>

          <Route path='/devolucionesHome' element={<DevolucionesHome/>}/>

          <Route path='/atenderDev' element={<Atenderdev/>}/>

          <Route path='/devprocesadas' element={<DevProcesadas/>}/>

          <Route path='/homealmacen' element={<HomeAlmacen/>}/>

          <Route path='/editarPerfil'element={<EditarPerfil/>}/>

          <Route path='/formasDePago' element={<FormasPago/>}/>

          <Route path='/editarMetodoPago' element={<EditarMetodoPago/>}/>

          <Route path='/devolucionesAtendidos' element={<DevolucionesAtendidos/>}/>




          <Route path='/devprocadmin' element={<DevProcAdmin/>}/>




          <Route path='/verDetallePedido' element={<VerDetallePedido />} />

          <Route path='/ordenes' element={<Ordenes />}></Route>

          <Route path= '/NoRes' element={<NoRes/>}/>






      //Routes for Compras

          <Route path='/purchasehome' element={<PurchaseHome />} />




          <Route path='/homeInventary' element={<HomeInventary />} />

          <Route path='/formBook' element={<FormBook />} />




          <Route path='/modproducts' element={<ModProducts />} />

          <Route path='/viewproducts' element={<ViewProduct />} />

        //End routes for Compras




        //Rutas para paqueteria

        <Route path='/homepaq' element={<HomePaq />} />

        <Route path='/ordenesnoenv' element={<OrdenesNoEnviadas />} />

        <Route path='/envioorden' element={<EnvioOrden />} />

        <Route path='/ordenesenv' element={<OrdenesEnviadas />} />

        <Route path='/entregaorden' element={<EntregaOrden />} />

        <Route path='/viewpaq' element={<ViewPaq />} />

        <Route path='/uppaq' element={<UpPaq />} />

        <Route path='/modpaq' element={<ModPaq />} />




        //Rutas para Administrador de Empleados

        <Route path='/homeadmin' element={<HomeAdmin />} />

        <Route path='/viewemp' element={<ViewEmp />} />

        <Route path='/upemp' element={<UpEmp />} />

        <Route path='/modemp' element={<ModEmp />} />





        //Routes for Customer Support Client

          <Route path='/cshome' element={<CustomerSuppHome />} />

          <Route path='/callform' element={<CallForm />} />

          <Route path='/emailform' element={<EmailForm />} />

          <Route path='/terms' element={<Terms />} />

          <Route path='/privacity' element={<Privacity />} />

        //End routes for Customer Support Client




        // Routes for Customer Support Admon

        <Route path='/csadmonhome' element={<CSAdmonHome />} />

        <Route path='/allcalls' element={<AllCalls />} />

        <Route path='/allmails' element={<AllMails />} />

        <Route path='/callsview' element={<CallsView />} />

        <Route path='/emailsview' element={<EmailsView />} />

        // Routes for Customer Support Admon




        </Routes>

      </Router>

    </UserProvider>

  );

}




export default App;