import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, } from '@ionic/react';
import toolbox from "../img/toolbox.png";
import '../style/tab1.css';


import ExploreContainer from '../components/ExploreContainer';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader> 
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen >
            {/*my code heree*/}
        <div className='center-div'>
        <IonCard color="warning">
          <img alt="toolbox" src={toolbox} />

          <IonCardContent>
            <ul>
              <li>Predecir genero</li>
              <li>Predecir edad</li>
              <li> Universidades</li>
              <li>Clima de Republica Dominicana</li>
              <li>Contact me :D </li>
            </ul>
          </IonCardContent>
        </IonCard>

        </div>

            {/*my code heree*/}
        <ExploreContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
