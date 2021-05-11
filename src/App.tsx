
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

//Styles
import './styles/global.scss';
import { Header } from './components/Header';

export function App() {
  

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     <SideBar /> 

      <div className="container">
      {/* <Header /> */}

        <main>
            <Content />  
        </main>
      </div>
    </div>
  )
}