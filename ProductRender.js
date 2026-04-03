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

    const sanPhamLoc = tatCaSanPham.filter(item => item.type === loaiSanPham).slice(0, 8);

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
    if (!roChua) return;

    let htmlContent = "";
    const sanPhamLoc = tatCaSanPham.filter(item => item.type == "pc" && item.loaipc == loaiPC).slice(0, 8);
    if (sanPhamLoc.length === 0) {
        roChua.innerHTML = `<p class="text-center py-5 text-muted">Đang cập nhật sản phẩm ${loaiPC.toUpperCase()}...</p>`;
    }
    sanPhamLoc.forEach((item) => {
        htmlContent += `
        <div class="col-12 col-lg-3">
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

function hienThiSanPhamTheoHang(tenHang, idKhuVuc, idPhanTrang, trang = 1) {
    const roChua = document.getElementById(idKhuVuc);
    const roPhanTrang = document.getElementById(idPhanTrang);
    if (!roChua || !roPhanTrang) return;

    const soSanPhamMoiTrang = 4;


    const sanPhamLoc = tatCaSanPham.filter(item => item.brand === tenHang && item.type === "laptop");





    const viTriBatDau = (trang - 1) * soSanPhamMoiTrang;
    const viTriKetThuc = viTriBatDau + soSanPhamMoiTrang;
    const sanPhamTrenTrang = sanPhamLoc.slice(viTriBatDau, viTriKetThuc);


    let htmlContent = "";
    sanPhamTrenTrang.forEach((item) => {
        htmlContent += `
        <div class="col-3">
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


    const tongSoTrang = Math.ceil(sanPhamLoc.length / soSanPhamMoiTrang);
    let htmlPhanTrang = "";


    if (tongSoTrang > 1) {

        htmlPhanTrang += `
            <li class="page-item ${trang === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="hienThiSanPhamTheoHang('${tenHang}', '${idKhuVuc}', '${idPhanTrang}', ${trang - 1}); return false;">Trang trước</a>
            </li>`;


        for (let i = 1; i <= tongSoTrang; i++) {
            htmlPhanTrang += `
            <li class="page-item ${i === trang ? 'active' : ''}">
                <a class="page-link" href="#" onclick="hienThiSanPhamTheoHang('${tenHang}', '${idKhuVuc}', '${idPhanTrang}', ${i}); return false;">${i}</a>
            </li>`;
        }


        htmlPhanTrang += `
            <li class="page-item ${trang === tongSoTrang ? 'disabled' : ''}">
                <a class="page-link" href="#" onclick="hienThiSanPhamTheoHang('${tenHang}', '${idKhuVuc}', '${idPhanTrang}', ${trang + 1}); return false;">Trang sau</a>
            </li>`;
    }

    roPhanTrang.innerHTML = htmlPhanTrang;
}


hienThiSanPhamTheoHang('asus', 'render-asus', 'phantrang-asus');
hienThiSanPhamTheoHang('dell', 'render-dell', 'phantrang-dell');
hienThiSanPhamTheoHang('hp', 'render-hp', 'phantrang-hp');
hienThiSanPhamTheoHang('msi', 'render-msi', 'phantrang-msi');
hienThiSanPhamTheoHang('gigabyte', 'render-gigabyte', 'phantrang-gigabyte');
hienThiSanPhamTheoHang('lenovo', 'render-lenovo', 'phantrang-lenovo');
hienThiSanPhamTheoHang('apple', 'render-apple', 'phantrang-apple');


function themSanPham(idSanPham, soLuongThem = 1) {
    const khachHang = JSON.parse(localStorage.getItem('userHienTai'));
    const product = tatCaSanPham.find(sp => sp.id === idSanPham);
    if (!khachHang) {
 
        alert("Bạn cần phải đăng nhập để mua hàng!");
        
      
        const modalDangNhap = new bootstrap.Modal(document.getElementById('authModal'));
        modalDangNhap.show();
        return; 
    }
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