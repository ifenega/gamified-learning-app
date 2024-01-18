/// <reference types="react-scripts" />
declare namespace NodeJS {

    interface ProcessEnv {
        REACT_APP_FB_APIKEY: string
        REACT_APP_FB_AUTHDOMAIN: string
        REACT_APP_FB_PROJECTID: string
        REACT_APP_FB_STORAGEBUCKET: string,
        REACT_APP_FB_MESSAGINGSENDERID: string
        REACT_APP_FB_APPID: string
        REACT_APP_FB_MEASUREMENTID: string

    }

}