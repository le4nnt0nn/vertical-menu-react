import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from "./types/types.d";
import { 
  FcAdvertising, 
  FcEngineering, 
  FcIdea,
  FcHome,
  FcInfo,
} from 'react-icons/fc';
import profileImage from './images/anton.jpg';
function App() {
  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Inicio',
      icon : FcHome,
      url: '/',
    },
    {
      id: '2',
      label: 'Proyectos',
      icon : FcIdea,
      url: '/',
    },
    {
      id: '3',
      label: 'Novedades',
      icon : FcAdvertising,
      url: '/',
    },
    {
      id: '4',
      label: 'Información',
      icon : FcInfo,
      url: '/',
    },
    {
      id: '5',
      label: 'Ajustes',
      icon : FcEngineering,
      url: '/',
    },
  ];

  const card:SideBarMenuCard = {
    id: 'card01',
    displayName: 'Antonio Cortés',
    title: 'Desarrollador',
    photoUrl: profileImage,
    url: '/',
  }
  return (
    <div>
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
