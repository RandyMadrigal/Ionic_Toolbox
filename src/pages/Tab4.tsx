import React, {useRef,useState} from 'react';
import { IonLabel, IonButton, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardTitle,IonCardHeader} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../style/tab4.css';

const Tab4: React.FC = () => {
  const [university,setUniversity] = useState([]);

  const url = 'http://universities.hipolabs.com/search?country=';

  const name = useRef<HTMLIonInputElement>(null);

  const ApiHandler = () => {

    const _name = name.current!.value;
   
    fetch(url+_name)
    .then(response => response.json())
    .then(data => { setState(data)})
    .catch((err) => setUniversity(err));
  };

  const setState = (data:any) =>{
    const _university = data.map( (item:any) => {
      return{
        name: item.name,
        domain: item.domains,
        link: item.web_pages,
      };
    });
    setUniversity(_university);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>University</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen>
            {/*my code heree*/}
        
        <div className='center-div'>

          <IonLabel>Insert a country in english</IonLabel>
          <IonInput color="warning"  className='input'  clearInput={true} ref={name} placeholder="country "></IonInput>
          <IonButton onClick={ApiHandler} shape="round">generate</IonButton>

              {university.map( (item:any , pos) => 
                <IonCard className='card' key={pos} color="warning">
                    <IonCardHeader>
                      <IonCardTitle><h3>{++pos + ") " + item.name}</h3></IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <h2>{item.domain}</h2>
                      <a href={item.link}>{item.link}</a>
                    </IonCardContent>
                 </IonCard>
              )}
                  
          </div>        
            {/*my code heree*/}
        <ExploreContainer  />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;