import admin from 'firebase-admin'
import serviceAccountKey from './ServiceAccountKey.json'
import connection from './db.connection'




 const  db = connection(admin, serviceAccountKey);
export default db