// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const configValue: NodeJS.ProcessEnv = process.env

export const firebaseConfig = {
    apiKey: configValue.REACT_FB_APIKEY,
    authDomain: configValue.REACT_FB_AUTHDOMAIN,
    projectId: configValue.REACT_FB_PROJECTID,
    storageBucket: configValue.REACT_FB_STORAGEBUCKET,
    messagingSenderId: configValue.REACT_FB_MESSAGINGSENDERID,
    appId: configValue.REACT_FB_APPID,
    measurementId: configValue.REACT_FB_MEASUREMENTID
};



