let gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];


function capNhatSoLuongGioHang() {
    const soLuongHienThi = document.getElementById('cart-count');
    if (soLuongHienThi) {
        let tongSoLuong = gioHang.reduce((tong, sp) => tong + sp.soLuong, 0);
        soLuongHienThi.innerText = tongSoLuong;
    }
}
capNhatSoLuongGioHang();

function hienThiTheoLoai(loaiSanPham, idKhuVuc) {
    const roChua = document.getElementById(idKhuVuc);
    if (!roChua) return;

    let htmlContent = "";

    const sanPhamLoc = tatCaSanPham.filter(item => item.type === loaiSanPham);

    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 product-card">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product.html?id=${item.id}" class="text-decoration-none text-dark">
                        <h5 class="card-title">${item.name}</h5>
                    </a>
                    <p class="card-text text-danger fw-bold">${item.price}</p>
                    <p class="card-text small text-muted">${item.desc}</p>
                    <button class="btn btn-outline-primary mt-auto" onclick="themSanPham('${item.id}')">
                        <i class="bi bi-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    roChua.innerHTML = htmlContent;
}


hienThiTheoLoai('laptop', 'render-laptop');
hienThiTheoLoai('pc', 'render-pc');
hienThiTheoLoai('phukien', 'render-phukien');


function hienThiSanPhamTheoHang(tenHang, idKhuVuc) {
    const roChua = document.getElementById(idKhuVuc);
    if (!roChua) return;

    let htmlContent = "";
  
    const sanPhamLoc = tatCaSanPham.filter(item => item.brand === tenHang && item.type === "laptop");

    if (sanPhamLoc.length === 0) {
        roChua.innerHTML = `<p class="text-center py-5 text-muted">Đang cập nhật sản phẩm ${tenHang.toUpperCase()}...</p>`;
        return;
    }

    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 product-card">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product.html?id=${item.id}" class="text-decoration-none text-dark">
                        <h5 class="card-title">${item.name}</h5>
                    </a>
                    <p class="card-text text-danger fw-bold">${item.price}</p>
                    <p class="card-text small text-muted">${item.desc}</p>
                    <button class="btn btn-outline-primary mt-auto" onclick="themSanPham('${item.id}')">
                        <i class="bi bi-cart-plus"></i> Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    roChua.innerHTML = htmlContent;
}


hienThiSanPhamTheoHang('asus', 'render-asus');
hienThiSanPhamTheoHang('dell', 'render-dell');
hienThiSanPhamTheoHang('hp', 'render-hp');


function themSanPham(idSanPham, soLuongThem = 1) {
    const product = tatCaSanPham.find(sp => sp.id === idSanPham);
    if (product) {
        // Kiểm tra xem sản phẩm đã có trong giỏ chưa
        let spTrongGio = gioHang.find(sp => sp.id === idSanPham);
        
        if (spTrongGio) {
            // Nếu có rồi thì cộng dồn số lượng
            spTrongGio.soLuong += Number(soLuongThem);
        } else {
            // Nếu chưa có thì thêm mới vào mảng với thuộc tính soLuong
            gioHang.push({ ...product, soLuong: Number(soLuongThem) });
        }
        
        // Lưu mảng mới vào trình duyệt
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        
        // Cập nhật lại con số trên menu
        capNhatSoLuongGioHang();
        alert("Đã thêm " + product.name + " vào giỏ hàng!");
    }
}