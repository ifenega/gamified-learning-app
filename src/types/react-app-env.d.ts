/// <reference types="react-scripts" />
declare namespace NodeJS {

    interface ProcessEnv {
        REACT_FB_APIKEY: string
        REACT_FB_AUTHDOMAIN: string
        REACT_FB_PROJECTID: string
        REACT_FB_STORAGEBUCKET: string,
        REACT_FB_MESSAGINGSENDERID: string
        REACT_FB_APPID: string
        REACT_FB_MEASUREMENTID: string

    }

}