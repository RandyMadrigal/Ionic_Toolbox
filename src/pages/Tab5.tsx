import { IonContent,IonGrid,IonRow,IonHeader,IonCol, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCardSubtitle } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import clear from '../img/clear.png';
import cloud from '../img/cloud.png';
import Mist from '../img/mist.png';
import rain from '../img/rain.png';
import snow from '../img/snow.png';
import '../style/tab5.css';


const Tab5: React.FC = () => {

  const cityName ="Santo Domingo";
  const apiKey ="de52b4e112bcd99ddd7648dcf33da56d";
  const formatCelsius = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${formatCelsius}`;

  const [_lat, setLat] = useState("");
  const [_lon, setLon] = useState("");
  const [_temp_max, setTempMax] = useState("");
  const [_temp_min, setTempMin] = useState("");
  const [_tem, setTem] = useState("");
  const [_name, setName] = useState("");
  const [_description, setDescription] = useState("");
  const [_icon, setIcon] = useState("https://i.ytimg.com/vi/iA23Sm-HI4I/maxresdefault.jpg");
  const [_main, setMain] = useState("");

  const ApiHandler = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => setState(data))
    .catch((err) => console.log(err));
  }

  const setState = (data:any) =>{

    setLat(data.coord.lat) ;
    setLon(data.coord.lon) ;
    setTempMax(data.main.temp_max) ;
    setTempMin(data.main.temp_min) ;
    setTem(data.main.temp) ;
    setName(data.name) ;
    setDescription(data.weather[0].description) ;
    setMain(data.weather[0].main);

    switch(data.weather[0].main){
      case 'Clear' :
        setIcon(clear);
        break;
      case 'Rain' :
        setIcon(rain);
        break;
      case 'Snow' :
        setIcon(snow);
        break;
      case 'Clouds' :
        setIcon(cloud);
        break;
      case 'Mist' :
        setIcon(Mist);
        break;
     default:
        setIcon("");
    }
  };

  ApiHandler();
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Weather</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen>
            {/*my code heree*/}
            <div className='center-div'>
            <IonCard color="tertiary">
      <img alt="xd" src={_icon} />
      <IonCardHeader>
        <IonCardTitle>{_name} / {_tem} °C</IonCardTitle>
        <IonCardSubtitle>{_main}</IonCardSubtitle>
        <IonCardSubtitle>{_description}</IonCardSubtitle>
      </IonCardHeader>
        <IonCardContent>

        <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="6">
          <h2>Latitud: </h2> {_lat}
          </IonCol>
          <IonCol size="6">
          <h2>Longitud:</h2> {_lon}
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <IonCol size="6">
          <h2>Temp Max:</h2>{_temp_max} °C
          </IonCol>
          <IonCol size="6">
          <h2>TempMin:</h2>{_temp_min} °C
          </IonCol>
        </IonRow>
      </IonGrid>
  
          
        </IonCardContent>
    </IonCard>

            </div>
            {/*my code heree*/}
        <ExploreContainer  />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;