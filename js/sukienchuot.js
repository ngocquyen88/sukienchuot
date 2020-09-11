//tạo biến imgObj để lưu hình ảnh trái bóng
let imgObj=null;

//Tạo hàm init() để khởi tạo imgObj mà chúng ta đã đặt vị trí và các thuộc tính còn lại
function init(){

    //sử dụng getElementByID() để nhận được một đối tượng DOM sau đó gán nó cho biến imgObj
    imgObj=document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left ='0px';
}

//tạo hàm moveRight() để tăng khoảng cách trái 10px, bạn cũng có thể đặt nó là giá trị âm để di chuyển sang trái
function moveRight(){
imgObj.style.left=parseInt(imgObj.style.left)+10+'px';
}

//gọi hàm init() khi trình duyệt được tải lần đầu
window.onload=init;