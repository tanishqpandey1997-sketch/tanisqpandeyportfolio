import admin from 'firebase-admin';

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'aiagency-e099f',
  });
}

const db = admin.firestore();

console.log('Firestore initialized for project: aiagency-e099f');

export default db;
