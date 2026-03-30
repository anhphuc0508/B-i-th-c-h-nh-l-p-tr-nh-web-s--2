function loadLayout() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            if (typeof capNhatSoLuongGioHang === "function") {
                capNhatSoLuongGioHang();
            }
        })
        .catch(error => console.error('Lỗi load Header:', error));
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Lỗi load Footer:', error));
}
function xuLyDangKy() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = document.getElementById('regPass').value;
    const confirmPass = document.getElementById('regConfirmPass').value;
    if (!name || !email || !pass || !confirmPass) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    if (pass !== confirmPass) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }
    let dsNguoiDung = JSON.parse(localStorage.getItem('databaseNguoiDung')) || [];
    const kiemTraEmail = dsNguoiDung.find(user => user.email === email);
    if (kiemTraEmail) {
        alert("Email này đã được đăng ký. Vui lòng dùng email khác hoặc đăng nhập!");
        return;
    }
    const newUser = { name: name, email: email, pass: pass };
    dsNguoiDung.push(newUser);
    localStorage.setItem('databaseNguoiDung', JSON.stringify(dsNguoiDung));

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    
  
    document.getElementById('btn-close-register').click();
    const loginModal = new bootstrap.Modal(document.getElementById('authModal'));
    loginModal.show();
}
function xuLyDangNhap() {
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPass').value;

    if (!email || !pass) {
        alert("Vui lòng nhập Email và Mật khẩu!");
        return;
    }

    let dsNguoiDung = JSON.parse(localStorage.getItem('databaseNguoiDung')) || [];
    
   
    const userHopLe = dsNguoiDung.find(user => user.email === email && user.pass === pass);

    if (userHopLe) {
       
        localStorage.setItem('userHienTai', JSON.stringify(userHopLe));
        alert(`Chào mừng ${userHopLe.name} quay trở lại!`);
        
        // Đóng modal đăng nhập và cập nhật giao diện
        document.getElementById('btn-close-login').click();
        kiemTraTrangThaiDangNhap();
    } else {
        alert("Email hoặc Mật khẩu không chính xác!");
    }
}
function kiemTraTrangThaiDangNhap() {
    const user = JSON.parse(localStorage.getItem('userHienTai'));
    const displayMenu = document.getElementById('user-name-display');
    const btnMenu = document.getElementById('user-menu-btn');

    if (!displayMenu || !btnMenu) return; 

    if (user) {
       
        displayMenu.innerText = `${user.name} (Đăng xuất)`;
        
      
        btnMenu.removeAttribute('data-bs-toggle');
        btnMenu.removeAttribute('data-bs-target');
        
        // Gán chức năng hỏi Đăng xuất vào nút
        btnMenu.onclick = function(e) {
            e.preventDefault(); 
            if(confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
                dangXuat();
            }
        };
    } else {
        
        displayMenu.innerText = "Đăng Nhập";
        
        // Gắn lại modal đăng nhập vào nút
        btnMenu.setAttribute('data-bs-toggle', 'modal');
        btnMenu.setAttribute('data-bs-target', '#authModal');
        btnMenu.onclick = null; 
    }
}

loadLayout();