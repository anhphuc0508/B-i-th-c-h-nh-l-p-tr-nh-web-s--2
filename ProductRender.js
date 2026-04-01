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

    const sanPhamLoc = tatCaSanPham.filter(item => item.type === loaiSanPham).slice(0,8);

    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 product-card shadow-sm border-0">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" class="card-img-top p-3" alt="${item.name}" style="height: 200px; object-fit: contain;">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product.html?id=${item.id}" class="text-decoration-none text-dark">
                        <h5 class="card-title text-truncate" title="${item.name}">${item.name}</h5>
                    </a>
                    <p class="card-text text-danger fw-bold">${item.price}</p>
                    
                    <p class="card-text small text-muted mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 40px;">
                        ${item.desc}
                    </p>
                    
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

hienThiTheoLoai('phukien', 'render-phukien');
hienThiTheoLoai('pc', 'render-pc');
function hienThiSanPhamTheoPC(loaiPC, idKhuVuc) {
    const roChua = document.getElementById(idKhuVuc)
    if(!roChua) return;

    let htmlContent = "";
    const sanPhamLoc = tatCaSanPham.filter(item => item.type == "pc" && item.loaipc == loaiPC).slice(0,8);
    if(sanPhamLoc.length === 0) {
        roChua.innerHTML = `<p class="text-center py-5 text-muted">Đang cập nhật sản phẩm ${loaiPC.toUpperCase()}...</p>`;
    }
    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 product-card shadow-sm border-0">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" class="card-img-top p-3" alt="${item.name}" style="height: 200px; object-fit: contain;">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product.html?id=${item.id}" class="text-decoration-none text-dark">
                        <h5 class="card-title text-truncate" title="${item.name}">${item.name}</h5>
                    </a>
                    <p class="card-text text-danger fw-bold">${item.price}</p>
                    
                    <p class="card-text small text-muted mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 40px;">
                        ${item.desc}
                    </p>
                    
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
hienThiSanPhamTheoPC('gaming', 'render-pcgaming');
hienThiSanPhamTheoPC('vanphong', 'render-pcvanphong');

function hienThiSanPhamTheoHang(tenHang, idKhuVuc) {
    const roChua = document.getElementById(idKhuVuc);
    if (!roChua) return;

    let htmlContent = "";
  
    const sanPhamLoc = tatCaSanPham.filter(item => item.brand === tenHang && item.type === "laptop").slice(0,8);

    if (sanPhamLoc.length === 0) {
        roChua.innerHTML = `<p class="text-center py-5 text-muted">Đang cập nhật sản phẩm ${tenHang.toUpperCase()}...</p>`;
        return;
    }

    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-md-6 col-lg-3">
            <div class="card h-100 product-card shadow-sm border-0">
                <a href="product.html?id=${item.id}">
                    <img src="${item.img}" class="card-img-top p-3" alt="${item.name}" style="height: 200px; object-fit: contain;">
                </a>
                <div class="card-body d-flex flex-column">
                    <a href="product.html?id=${item.id}" class="text-decoration-none text-dark">
                        <h5 class="card-title text-truncate" title="${item.name}">${item.name}</h5>
                    </a>
                    <p class="card-text text-danger fw-bold">${item.price}</p>
                    
                    <p class="card-text small text-muted mb-3" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 40px;">
                        ${item.desc}
                    </p>
                    
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
hienThiSanPhamTheoHang('msi', 'render-msi');
hienThiSanPhamTheoHang('gigabyte', 'render-gigabyte');
hienThiSanPhamTheoHang('lenovo', 'render-lenovo');
hienThiSanPhamTheoHang('apple', 'render-apple');


function themSanPham(idSanPham, soLuongThem = 1) {
    const product = tatCaSanPham.find(sp => sp.id === idSanPham);
    if (product) {
        let spTrongGio = gioHang.find(sp => sp.id === idSanPham);
        if (spTrongGio) {
            spTrongGio.soLuong += Number(soLuongThem);
        } else {
            gioHang.push({ ...product, soLuong: Number(soLuongThem) });
        }
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        capNhatSoLuongGioHang();
        alert("Đã thêm " + product.name + " vào giỏ hàng!");
    }
}