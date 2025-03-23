
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apiKey: "AIzaSyCje7mNp9y6TO6qBGm7iEQx2XNd2ZOrz9o",
authDomain: "feedback-system-7ec2f.firebaseapp.com",
databaseURL: "https://feedback-system-7ec2f-default-rtdb.firebaseio.com",
projectId: "feedback-system-7ec2f",
storageBucket: "feedback-system-7ec2f.firebasestorage.app",
messagingSenderId: "766852655039",
appId: "1:766852655039:web:6a4c85015031303d6b630a",
measurementId: "G-CTCFTB2V7D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
