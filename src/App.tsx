import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { Keyboard, KeyboardStyle, KeyboardResize } from "@capacitor/keyboard";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/tailwind.css'
import './theme/variables.css';
import WelcomeScreen from './pages/auth/WelcomeScreen';
import Disclaimer from './pages/auth/Disclaimer';
import { firebaseConfig } from './lib/firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Tabs from './tabs/Tabs';

setupIonicReact();

const App: React.FC = () => {


  // Keyboard.setAccessoryBarVisible({ isVisible: true });
  // Keyboard.setResizeMode({ mode: KeyboardResize.Ionic });
  // Keyboard.setScroll({ isDisabled: true });

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const isAuthed = true

  return (
    <IonApp>
      <IonReactRouter>
        <Route
          path="/tabs"
          render={(props) =>
            // isAuthed ? 
            <Tabs />
            // : <Redirect to="/" />
          }
        // render={() => <Tabs />}
        />
        <Redirect exact from="/" to={"/welcome-screen"} />
        <Route exact path="/welcome-screen" component={WelcomeScreen} />
        <Route exact path="/disclaimer" component={Disclaimer} />
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
