
import { Header } from './Common/Component/Header/Header';
import './App.css';
import { Mobile } from './Component/Mobile/Mobile';
import { DeliciousFood } from './Constant/DeliciousFood/DeliciousFood';
import { MenuChart } from './Component/MenuChart/MenuChart';
// import { useStore1 } from './store';
import { ShowCart } from './Common/Component/Cart/Cart';

function App() {

  return (
    <div className='bodyimg'>
     
      <Header />

      <DeliciousFood />

      {/* <ShowCart /> */}

      <div className='secondrow'>
        <Mobile />
        <MenuChart />
       
      </div>

      

    </div>
  )
}

export default App;
