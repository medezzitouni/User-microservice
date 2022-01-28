export default function(admin: any, serviceAccountKey: any){

    admin.initializeApp({credential: admin.credential.cert(serviceAccountKey)})
    const db = admin.firestore()
    if(!db) throw new Error('db is not connected')
    else return db
}