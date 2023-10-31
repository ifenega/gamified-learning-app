import React, { useEffect, useState } from 'react'
import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    useIonRouter,
    setupIonicReact,
    useIonViewDidEnter,
    useIonViewWillEnter,
} from "@ionic/react";
import { IonReactRouter } from '@ionic/react-router';
import lessons from '../assets/dashboard/lesson.svg'
import lessonsActive from '../assets/dashboard/lessonsActive.svg'
import points from '../assets/dashboard/points.svg'
import pointsActive from '../assets/dashboard/pointsActive.svg'
import settings from '../assets/dashboard/settings.svg'
import settingsActive from '../assets/dashboard/settingsActive.svg'
import { Route } from 'react-router';
import SettingsPage from '../pages/Settings/Settings';
import './Tabs.css'

const Tabs = () => {

    const [activeTab, setActiveTab] = useState("settings");

    useEffect(() => {
        document.addEventListener("currentPath", function (data: any) {

            setActiveTab(data.detail.name);
        });
    }, []);


    return (
        <>
            <IonReactRouter>
                <IonTabs
                    onIonTabsWillChange={(e) => {
                        setActiveTab(e.detail.tab);
                    }}
                >
                    <IonRouterOutlet animated={false}>
                        {/* Home Route */}
                        <Route path="/tabs/settings" component={SettingsPage} exact />
                    </IonRouterOutlet>

                    <IonTabBar slot="bottom" id="app-tab-bar">
                        <IonTabButton tab="lessons" href="/tabs/lessons">
                            <IonIcon icon={activeTab === "lessons" ? lessonsActive : lessons} />
                            <IonLabel>Lessons</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="points" href="/tabs/points" className='p-0 w-fit'>
                            <IonIcon icon={activeTab === "points" ? pointsActive : points} />
                            <IonLabel>Points</IonLabel>
                        </IonTabButton>

                        <IonTabButton tab="settings" href="/tabs/settings" >
                            <IonIcon icon={activeTab === "settings" ? settingsActive : settings} />
                            <IonLabel>Settings</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </IonReactRouter>
        </>
    )
}

export default Tabs