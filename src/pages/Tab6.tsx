import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import me from "../img/me.jpg";
import '../style/tab6.css';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact me - 2019/8915</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  color="medium" fullscreen>
            {/*my code heree*/}
            <div className='center-div'>
            <IonCard className='card' color="warning">
              <img alt="Silhouette of mountains" src={me} />
              <IonCardHeader>
                <IonCardTitle>Software Developer (itla)</IonCardTitle>
                <IonCardSubtitle>Randy Jose Espinal Madrigal</IonCardSubtitle>
               </IonCardHeader>
            <IonCardContent>
              <h2>Para contrataciones:</h2>
              <h3>Tel: 829-869-5751</h3>
              <h3>Correo: randymadrigalx12@gmail.com</h3>
              <a href="https://github.com/RandyMadrigal?tab=repositories">Github</a>
             </IonCardContent>
    </IonCard>


            </div>
            {/*my code heree*/}
        <ExploreContainer  />
      </IonContent>
    </IonPage>
  );
};

export default Tab6;