import { SideBarMenu } from "./components/SideBarMenu";
import { SideBarMenuCard, SideBarMenuItem } from "./types/types.d";
import { FcAdvertising } from 'react-icons/fc';
import profileImage from './images/anton.jpg';
function App() {
  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Hola',
      icon : FcAdvertising,
      url: '/',
    },
    {
      id: '2',
      label: 'Hola',
      icon : FcAdvertising,
      url: '/',
    },
    {
      id: '3',
      label: 'Hola',
      icon : FcAdvertising,
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
