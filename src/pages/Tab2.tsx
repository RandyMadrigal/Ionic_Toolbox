import React, {useRef,useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel, IonCard } from '@ionic/react';
import { IonButton } from '@ionic/react';
import male from "../img/male.png";
import female from "../img/female.png";
import '../style/tab2.css';


import ExploreContainer from '../components/ExploreContainer';

const Tab2: React.FC = () => {

  const [gender,setGender] = useState("");
  const [imgGender,setImg] = useState('https://4.bp.blogspot.com/-PA3MO_eBFRw/V_sEzLnFlzI/AAAAAAAGKdA/4WlkySccDeQlg7SFilTnoxzvAXfaEanHQCLcB/s1600/SIGNO%2BDE%2BINTERROGACI%25C3%2593N%2B%252824%2529.png');

  const url = 'https://api.genderize.io/?name=';

  const name = useRef<HTMLIonInputElement>(null);

  const ApiHandler = () => {

    const _name = name.current!.value;
   
    fetch(url+_name)
    .then(response => response.json())
    .then( (data) => setState(data.gender))
    .catch((err) => setGender(err));
  };

  const setState = (data: string) => {
    setGender(data);

    if(data === "male"){
      setImg(male);
    }
    if(data === "female"){
      setImg(female);
    } 

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen>
        {/*my code heree*/}

        <IonCard color="warning">
        <img className='img-size' alt="gender" src={imgGender} />
        </IonCard>
        
        <div className='center-div'>
        <IonItem fill="outline">
          <IonLabel>Insert a name</IonLabel>
          <IonInput color="warning" clearInput={true} ref={name} placeholder="name..."></IonInput>
        </IonItem>
        <IonButton onClick={ApiHandler} shape="round">generate</IonButton>
        <IonLabel color="warning"><h1>{gender}</h1></IonLabel>
        </div>

       {/*my code heree*/}
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
