


const firebaseConfig = {
  apiKey: "AIzaSyAoC-FUJk-jDAvVuQ4DOlOrLBzZJgFurJI",
  authDomain: "personality-checker-b4a21.firebaseapp.com",
  projectId: "personality-checker-b4a21",
  storageBucket: "personality-checker-b4a21.appspot.com",
  messagingSenderId: "145465583705",
  appId: "1:145465583705:web:f998a83aa920a086e72948"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

  
document.getElementById('excel').addEventListener('click', () => {
    getAllUsersFromFirestore();
});
document.getElementById('logout').addEventListener('click', () => {
  logout();
});

const progressIndicator = document.getElementById('progressIndicator');


  
async function getAllUsersFromFirestore() {
 
  progressIndicator.style.display = 'block';

  try {
   
      const usersRef = db.collection("users");
      const querySnapshot = await usersRef.get();

     
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet([]);

      const fieldOrder = ['name', 'reg_no','email','department','year','result'];

 
      querySnapshot.forEach((doc) => {
          const userData = doc.data();

          
          const rearrangedUserData = {};
          fieldOrder.forEach(field => {
              rearrangedUserData[field] = userData[field] || ''; 
          });

         
          XLSX.utils.sheet_add_json(worksheet, [rearrangedUserData], { skipHeader: true, origin: -1 });
      });

 
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

      XLSX.writeFile(workbook, 'users.xlsx');

      progressIndicator.style.display = 'none';
  } catch (error) {
   
      progressIndicator.style.display = 'none'; 
      
      showSnackbar(error);
      console.log("Error getting documents: ", error);
  }
}

function logout() {
 
  window.close();
}




  
function showSnackbar(message) {
  const snackbar = document.getElementById("snackbar");
  snackbar.textContent=message;
  snackbar.className = "show";
  setTimeout(() => { snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}
  
  
