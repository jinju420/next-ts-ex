import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAdqKCVxLLoOhFMuatlgPaGO6VcQl3ej4Y',
	authDomain: 'react-project-ba468.firebaseapp.com',
	projectId: 'react-project-ba468',
	storageBucket: 'react-project-ba468.appspot.com',
	messagingSenderId: '1032476498509',
	appId: '1:1032476498509:web:0caa063e3da0f1ad215a04',
};

//firebase로 구동한 app이 없으면 아직 인증처리가 되지 않은 상태에서만 초기화
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
