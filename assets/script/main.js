     $(document).ready(function(){
    $("#VND").click(function(){
        $("#VND1").fadeToggle("slow");
      
    });
    });

    $(document).ready(function(){
    $("#header1").click(function(){
        $("#header2").fadeToggle("slow");
      
    });
    });

    // chuyển từ ảnh này sang ảnh khác
    var i=0;
    var images = [];
    var time = 3000;

    // image list
    images[0] = './assets/img/anh4.jpg';
    images[1] = './assets/img/anh7.jpg';

    // change image
    function changeImage(){

        document.slide.src = images[i];

        if(i < images.length - 1){
            i++
        }else {
            i=0
        }
        setTimeout("changeImage()", time);
    }
    window.onload = changeImage;


    //check input
    var check_phone = /^d[0-9]{10}$/;
    var check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
    var check__password = /^[A-Za-z0-9!@#$%^&*_]{6,20}$/;
    var check__password1 = /^[A-Za-z0-9!@#$%^&*_]{6,20}$/;
    function StringMatch(txt, reg){
        return reg.test(txt.value);
    }

    function validform(f){
        if(!StringMatch(f.email, check_email)){
            alert("Chưa nhập Email")
            f.email.value="";
            f.email.focus();
            return;
        }

        if(!StringMatch(f.password ,check__password)){
           alert("Chưa nhập mật khẩu")
           f.password.value="";
           f.password.focus();
           return; 
        }

       if(!StringMatch(f.password1 ,check__password1)){
        alert("Chưa nhập lại mật khẩu")
        f.password1.value="";
        f.password1.focus();
        return;
        }
        alert("Đăng Kí Thành Công! ")
    }

    function validform1(f){
        if(!StringMatch(f.email, check_email)){
            alert("Chưa nhập Email")
            f.email.value="";
            f.email.focus();
            return;
        }

        if(!StringMatch(f.password ,check__password)){
           alert("Chưa nhập mật khẩu")
           f.password.value="";
           f.password.focus();
           return; 
        }
        alert("Đăng Nhập Thành Công! ")
    }