const tatCaSanPham = [
    // ================= LAPTOP APPLE =================
    { 
        id: "MAC01", 
        type: "laptop", 
        brand: "apple",
        name: "MacBook Pro 14 M3", 
        price: "39.990.000 đ", 
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500", 
        desc: "Apple M3, 8GB RAM, 512GB SSD, Liquid Retina XDR.",
        specs: { "Vi xử lý (CPU)": "Apple M3 8-core", "RAM": "8GB Unified", "Ổ cứng": "512GB SSD", "Màn hình": "14.2 inch Liquid Retina XDR", "Card đồ họa": "10-core GPU", "Trọng lượng": "1.55 kg" }
    },
    { 
        id: "MAC02", 
        type: "laptop", 
        brand: "apple",
        name: "MacBook Air M2 13.6", 
        price: "24.500.000 đ", 
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500", 
        desc: "Apple M2, 8GB RAM, 256GB SSD, Liquid Retina.",
        specs: { "Vi xử lý (CPU)": "Apple M2 8-core", "RAM": "8GB Unified", "Ổ cứng": "256GB SSD", "Màn hình": "13.6 inch Liquid Retina", "Card đồ họa": "8-core GPU", "Trọng lượng": "1.24 kg" }
    },

    // ================= LAPTOP ASUS =================
    { 
        id: "ASUS01", 
        type: "laptop", 
        brand: "asus",
        name: "ASUS ROG Strix G16", 
        price: "35.990.000 đ", 
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500", 
        desc: "Intel Core i7, 16GB RAM, RTX 4060, Màn hình 165Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13650HX", "RAM": "16GB DDR5", "Ổ cứng": "512GB PCIe Gen4", "Màn hình": "16.0 inch WUXGA 165Hz", "Card đồ họa": "RTX 4060 8GB", "Trọng lượng": "2.50 kg" }
    },
    { 
        id: "ASUS02", 
        type: "laptop", 
        brand: "asus",
        name: "ASUS Zenbook 14 OLED", 
        price: "26.490.000 đ", 
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500", 
        desc: "Intel Core Ultra 7, 16GB RAM, 512GB SSD, Màn hình OLED.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 155H", "RAM": "16GB LPDDR5X", "Ổ cứng": "512GB SSD", "Màn hình": "14.0 inch 3K OLED", "Card đồ họa": "Intel Arc", "Trọng lượng": "1.20 kg" }
    },
    { 
        id: "ASUS03", 
        type: "laptop", 
        brand: "asus",
        name: "ASUS TUF Gaming F15", 
        price: "21.990.000 đ", 
        img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500", 
        desc: "Intel Core i5, 16GB RAM, RTX 3050, Thiết kế chuẩn quân đội.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-11400H", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.30 kg" }
    },

    // ================= LAPTOP DELL =================
    { 
        id: "DELL01", 
        type: "laptop", 
        brand: "dell",
        name: "Dell XPS 15 9530", 
        price: "45.500.000 đ", 
        img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500", 
        desc: "Intel Core i7-13700H, 16GB RAM, 1TB SSD, RTX 4050.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700H", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Màn hình": "15.6 inch FHD+", "Card đồ họa": "RTX 4050 6GB", "Trọng lượng": "1.86 kg" }
    },
    { 
        id: "DELL02", 
        type: "laptop", 
        brand: "dell",
        name: "Dell Inspiron 16 5630", 
        price: "22.000.000 đ", 
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500", 
        desc: "Intel Core i5-1340P, 16GB RAM, 512GB SSD, Màn 16 inch.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1340P", "RAM": "16GB LPDDR5", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch FHD+", "Card đồ họa": "Intel Iris Xe", "Trọng lượng": "1.85 kg" }
    },

    // ================= LAPTOP HP =================
    { 
        id: "HP01", 
        type: "laptop", 
        brand: "hp",
        name: "HP Envy x360 14", 
        price: "25.500.000 đ", 
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500", 
        desc: "Intel Core i5-1335U, 16GB RAM, 512GB SSD, Cảm ứng lật xoay 360.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1335U", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "14.0 inch FHD Cảm ứng", "Card đồ họa": "Intel Iris Xe", "Trọng lượng": "1.52 kg" }
    },
    { 
        id: "HP02", 
        type: "laptop", 
        brand: "hp",
        name: "HP Victus 15", 
        price: "19.990.000 đ", 
        img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500", 
        desc: "AMD Ryzen 5, 8GB RAM, RTX 3050, Laptop Gaming giá rẻ.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 5 7535HS", "RAM": "8GB DDR5", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.29 kg" }
    },

    // ================= LAPTOP MỚI (LENOVO, ACER, MSI) =================
    { 
        id: "LEN01", 
        type: "laptop", 
        brand: "lenovo",
        name: "Lenovo Legion 5 Pro", 
        price: "32.990.000 đ", 
        img: "https://images.unsplash.com/photo-1588702545922-a0ce5e93df6e?w=500", 
        desc: "Ryzen 7 6800H, 16GB RAM, RTX 3060, Màn hình 2K 165Hz.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 7 6800H", "RAM": "16GB DDR5", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch WQXGA 165Hz", "Card đồ họa": "RTX 3060 6GB", "Trọng lượng": "2.45 kg" }
    },
    { 
        id: "ACER01", 
        type: "laptop", 
        brand: "acer",
        name: "Acer Nitro 5 Tiger", 
        price: "20.490.000 đ", 
        img: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=500", 
        desc: "Intel Core i5 12500H, 8GB RAM, RTX 3050, Tản nhiệt siêu mát.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-12500H", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.50 kg" }
    },

    // ================= PC ĐỂ BÀN & ALL-IN-ONE (THÊM BIẾN loaipc) =================
    { 
        id: "PC_ASUS01", 
        type: "pc", 
        loaipc: "gaming", // Đã thêm biến loaipc
        brand: "asus",
        name: "PC Gaming ASUS ROG G22CH", 
        price: "42.990.000 đ", 
        img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500", 
        desc: "PC Gaming nhỏ gọn, tản nhiệt nước, Core i7, RTX 4070.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700F", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Card đồ họa (VGA)": "RTX 4070 12GB", "Nguồn (PSU)": "600W 80+ Gold" }
    },
    { 
        id: "PC_DELL01", 
        type: "pc", 
        loaipc: "vanphong", // Đã thêm biến loaipc
        brand: "dell",
        name: "PC Dell Inspiron Desktop 3020", 
        price: "15.500.000 đ", 
        img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500", 
        desc: "PC Văn phòng bền bỉ, hiệu năng ổn định, thiết kế hiện đại.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13400", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "Intel UHD 730", "Kết nối": "Wi-Fi 6 + Bluetooth" }
    },
    { 
        id: "PC_MAC01", 
        type: "pc", 
        loaipc: "vanphong", // Đã thêm biến loaipc
        brand: "apple",
        name: "Mac Studio M2 Max", 
        price: "54.990.000 đ", 
        img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500", 
        desc: "Sức mạnh vô song cho dân sáng tạo chuyên nghiệp, chip M2 Max.",
        specs: { "Vi xử lý (CPU)": "Apple M2 Max", "RAM": "32GB Unified", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "30-core GPU", "Trọng lượng": "2.7 kg" }
    },
    { 
        id: "PC_HP01", 
        type: "pc", 
        loaipc: "vanphong", // Đã thêm biến loaipc
        brand: "hp",
        name: "HP All-in-One 24-cb1011d", 
        price: "18.990.000 đ", 
        img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500", 
        desc: "Máy tính bộ tích hợp màn hình 24 inch, gọn gàng, tiết kiệm không gian.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1235U", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "23.8 inch FHD IPS", "Card đồ họa (VGA)": "Intel Iris Xe" }
    },
    { 
        id: "PC_MSI01", 
        type: "pc", 
        loaipc: "gaming", // Đã thêm biến loaipc
        brand: "msi",
        name: "PC MSI MAG Infinite S3", 
        price: "28.500.000 đ", 
        img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500", 
        desc: "Thiết kế hầm hố, kính cường lực, Core i5 13400F, RTX 4060.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13400F", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "RTX 4060 8GB", "Nguồn (PSU)": "500W 80+ Bronze" }
    },
    { 
        id: "PC_LENOVO01", 
        type: "pc", 
        loaipc: "vanphong", // Đã thêm biến loaipc
        brand: "lenovo",
        name: "PC Lenovo ThinkCentre Neo 50s", 
        price: "11.200.000 đ", 
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500", 
        desc: "PC đồng bộ siêu nhỏ gọn, tản nhiệt êm ái, tối ưu cho doanh nghiệp.",
        specs: { "Vi xử lý (CPU)": "Intel Core i3-12100", "RAM": "8GB DDR4", "Ổ cứng": "256GB SSD", "Card đồ họa (VGA)": "Intel UHD 730", "Kích thước": "Form SFF gọn nhẹ" }
    },

    // ================= PHỤ KIỆN (CHUỘT, BÀN PHÍM, TAI NGHE) =================
    { 
        id: "PK_LOGI01", 
        type: "phukien", 
        brand: "logitech",
        name: "Chuột Logitech G Pro X Superlight", 
        price: "2.990.000 đ", 
        img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500", 
        desc: "Chuột gaming không dây siêu nhẹ, cảm biến HERO 25K.",
        specs: { "Loại kết nối": "Không dây (2.4GHz)", "Cảm biến": "HERO 25K", "Độ phân giải (DPI)": "25,600 DPI", "Trọng lượng": "63 gram" }
    },
    { 
        id: "PK_RAZER01", 
        type: "phukien", 
        brand: "razer",
        name: "Bàn phím cơ Razer BlackWidow V4", 
        price: "4.290.000 đ", 
        img: "https://images.unsplash.com/photo-1629854497551-7f89b917bb14?w=500", 
        desc: "Bàn phím cơ fullsize, Switch Razer Green, LED Chroma RGB.",
        specs: { "Loại bàn phím": "Cơ có dây", "Loại Switch": "Razer Green (Clicky)", "Đèn LED": "Razer Chroma RGB", "Đệm kê tay": "Có" }
    },
    { 
        id: "PK_SONY01", 
        type: "phukien", 
        brand: "sony",
        name: "Tai nghe Sony WH-1000XM5", 
        price: "7.490.000 đ", 
        img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500", 
        desc: "Tai nghe chụp tai chống ồn chủ động đỉnh cao, pin 30 giờ.",
        specs: { "Loại tai nghe": "Over-ear không dây", "Công nghệ": "Chống ồn ANC kép", "Kết nối": "Bluetooth 5.2", "Pin": "30 giờ" }
    },
    { 
        id: "PK_APPLE01", 
        type: "phukien", 
        brand: "apple",
        name: "Apple Magic Mouse 2", 
        price: "1.990.000 đ", 
        img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", 
        desc: "Chuột không dây Apple, thiết kế liền mạch, cảm ứng Multi-Touch.",
        specs: { "Loại kết nối": "Bluetooth", "Bề mặt": "Cảm ứng Multi-Touch", "Cổng sạc": "Lightning", "Trọng lượng": "99 gram" }
    },
    { 
        id: "PK_CORSAIR01", 
        type: "phukien", 
        brand: "corsair",
        name: "Bàn phím cơ Corsair K70 RGB PRO", 
        price: "3.590.000 đ", 
        img: "https://images.unsplash.com/photo-1606558661642-a72516629737?w=500", 
        desc: "Khung nhôm hàng không phay xước, Switch CHERRY MX, tần số phản hồi 8000Hz.",
        specs: { "Loại bàn phím": "Cơ có dây", "Loại Switch": "CHERRY MX Red", "Tần số phản hồi": "8000Hz AXON", "Đệm kê tay": "Có" }
    }
];