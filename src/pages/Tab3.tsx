import React, {useRef,useState} from 'react';
import { IonContent, IonCard, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import { IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import '../style/tab3.css';

const Tab3: React.FC = () => {

  const [age,setedad] = useState("");
  const [imgAge,setImg] = useState('https://4.bp.blogspot.com/-PA3MO_eBFRw/V_sEzLnFlzI/AAAAAAAGKdA/4WlkySccDeQlg7SFilTnoxzvAXfaEanHQCLcB/s1600/SIGNO%2BDE%2BINTERROGACI%25C3%2593N%2B%252824%2529.png');
  const [info,setInfo] = useState('');

  const url = 'https://api.agify.io/?name=';

  const name = useRef<HTMLIonInputElement>(null);

  const ApiHandler = () => {

    const _name = name.current!.value;
   
    fetch(url+_name)
    .then(response => response.json())
    .then( (data) => setState(data.age))
    .catch((err) => setedad(err));
  };

  const setState = (data: string) => {
    setedad(data);
    const num = parseInt(data);

    if(num >= 0 && num <= 12 ){ //niño
      setImg('https://edukame.com/sites/default/files/articulo/shutterstock_104651603_0.jpg')
      setInfo("niño")
    }else if(num >= 13 && num <= 19 ){ //adolescente
      setImg('https://imgs.search.brave.com/f5LLsbBWqFGU4OnA-NkEhrT91xHbGVWkU5nLf0fduHI/rs:fit:800:567:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90ZWVu/YWdlcnMtc3R1ZHlp/bmctaGlnaC1zY2hv/b2wtMTE5MzMwNDAu/anBn') 
      setInfo("adolescente")
    }else if(num >= 20  && num <= 35 ){ //joven
      setImg('https://imgs.search.brave.com/i0M0FP4fE8WxwN-654MgyV4NYAuGoAfOKDpzA7U_gO4/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXBob3Rv/L3lvdW5nLXBlb3Bs/ZS11c2luZy10aHJl/YWRtaWxsLW1vZGVy/bi1neW1fNTIxMzct/MjcxNDIuanBn') 
      setInfo("joven")
    }else if(num >= 36 && num <= 65 ){ //adulto
      setImg('https://imgs.search.brave.com/gyq_n0oRJwNbgrXOx9feCcGqM93fjSTzr7iPJ1x70RU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/c3BlY3RydW12aXJ0/dWFsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNS9C/dXNpbmVzc21hbi13/b3JraW5nLmpwZw') 
      setInfo("adulto")
    }else if(num >= 66  && num <= 105 ){ //viejo
      setImg('https://imgs.search.brave.com/7crRRrevsvnQKDrOxzKVloFMYDYdaOLEqRoRrjXEOuQ/rs:fit:650:456:1/g:ce/aHR0cHM6Ly93d3cu/aW50cmFtZWQubmV0/L1VzZXJGaWxlcy92/aW5ldGFzLzk0MTY5/LmpwZw') 
      setInfo("persona mayor")
    }else{ //RIP
      setImg('https://imgs.search.brave.com/oJFK-uRgb1pfS49xkNb5xJoL-5icMjCGmzhX5q7bxQI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMvcmlwLWNs/aXBhcnQtMTAuanBn') 
      setInfo("Felicidades pasaste de los 105 años :D")
    }    
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Age</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  color="medium" fullscreen>
         {/*my code heree*/}
         <IonCard color="warning">
         <img className='img-size' alt="gender" src={imgAge} />
        </IonCard >

         <div className='center-div'>
          <IonItem fill="outline">
            <IonLabel>Insert a name</IonLabel>
            <IonInput color="warning" clearInput={true} ref={name} placeholder="name..."></IonInput>
          </IonItem>
          <IonButton onClick={ApiHandler} shape="round">Generate</IonButton>
          <IonLabel color="warning"><h1>su edad es: {age}</h1></IonLabel>
          <IonLabel color="warning"><h1>{info}</h1></IonLabel>

          <ul>
              <li>0 - 12 </li>
              <li>13 - 19 </li>
              <li> 20 - 35 </li>
              <li> 36 - 65</li>
              <li> 66 - 105 </li>
              <li> RIP </li>
            </ul>

        </div>

        {/*my code heree*/}
        <ExploreContainer  />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
