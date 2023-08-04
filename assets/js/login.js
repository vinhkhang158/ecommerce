import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC05xbetKRAokm-jyYjYl1eRBHTcp68QLI",
    authDomain: "login-12bf6.firebaseapp.com",
    databaseURL: "https://login-12bf6-default-rtdb.firebaseio.com",
    projectId: "login-12bf6",
    storageBucket: "login-12bf6.appspot.com",
    messagingSenderId: "168505334405",
    appId: "1:168505334405:web:7d589eb2c9f18c69e6a7ec"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database= getDatabase(app)
  const auth = getAuth();
  
signUp.addEventListener("click",(e)=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("mk").value
  let name = document.getElementById("uname")
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    set(ref(database, "users/" +user.uid),{
      name:name,
      email:email,
      password:password
    })
    alert("User created")
    register()
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})
logIn.addEventListener("click",(e)=>{
  let email = document.getElementById("name").value
  let password = document.getElementById("pwd").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("User logged in!")
    login()
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})
function register() {
    alert("hello")
    let email = document.getElementById("email").value;
    let mk = document.getElementById("mk").value;
    let name = document.getElementById("uname").value
    // Lấy dữ liệu trong localStorage với phương thức getItem:
    var arr = localStorage.getItem('userAccount_key'); //Giá trị được lấy ra đang là kiểu string và chúng ta cần ép nó lại thành kiểu ban đầu
    var txtArr = JSON.parse(arr)// txtArr là mảng userAccount được ép trở về thành kiểu JSON, chúng ta có thể sử dụng txtArr như 1 object
    // Danh sách tài khoản đã trở về kiểu object để chúng ta làm việc với nó (thêm mới tài khoản)
    let newID =txtArr.acc[txtArr.acc.length-1].id+1;
    txtArr.acc.push(
        {
            id: newID,
            email: email, //có các obj với các thuộc tính là name và pwd
            pwd: mk,
            name: name
        })
    console.log(txtArr); // in ra object chứa danh sách tài khoản để kiểm tra thử
    localStorage.setItem('userAccount_key', JSON.stringify(txtArr)); //Sau khi thêm mới tài khoản thì lưu dữ liệu vào trong local storage
    console.log(txtArr);
}
function login() {
    var arr1 = localStorage.getItem('userAccount_key');
    let user = document.getElementById("name").value; //User là giá trị tên username mà người dùng nhập vào
    console.log(user)

    //Khai báo 1 mảng chứa obj userAccount ban đầu ta tryền vào localStorage
    var txtArr1 = JSON.parse(arr1); // Ép kiểu string của arr1 thành kiểu json để txtArr1 trở thành 1 object
    let tontai = 0;
    let userID = 0;
    let nem =''
    let pd =''
    let em =''

    for (let item of txtArr1.acc) { // Lặp lại các phần tử (item) trong obj txtArr1
        // Kiểm tra thông tin được nhập trong các ô name và pwd xem có trùng khớp với bất cứ 1 object (trong thuộc tính acc) nào không
        if (user == item.email && document.getElementById("pwd").value == item.pwd) {
            nem = item.name;
            tontai=1;
            userID = item.id;
            pd == item.pwd
            em = item.email
        }
    }
    if (tontai == 1) {
        console.log(userID);
    
        let currentUser = [{
            id: userID,
            name : nem,
            email: em,
            password: pd

        }] //Đưa user vào localStorage của current
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location="index.html";
    }
    
    
}
