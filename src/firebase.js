import { initializeApp as initFirebaseApp } from 'firebase'

import config from '../firebase.config';

export default initFirebaseApp(config);
