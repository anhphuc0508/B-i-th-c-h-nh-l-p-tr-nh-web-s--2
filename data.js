const tatCaSanPham = [
    // ================= LAPTOP APPLE =================
    { 
        id: "MAC01", 
        type: "laptop", brand: "apple",
        name: "MacBook Pro 14 M3", 
        price: "39.990.000 đ", 
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", 
        desc: "Apple M3, 8GB RAM, 512GB SSD, Liquid Retina XDR.",
        specs: { "Vi xử lý (CPU)": "Apple M3 8-core", "RAM": "8GB Unified", "Ổ cứng": "512GB SSD", "Màn hình": "14.2 inch Liquid Retina XDR", "Card đồ họa": "10-core GPU", "Trọng lượng": "1.55 kg" }
    },
    { 
        id: "MAC02", 
        type: "laptop", brand: "apple",
        name: "MacBook Air M2 13.6", 
        price: "24.500.000 đ", 
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80", 
        desc: "Apple M2, 8GB RAM, 256GB SSD, Liquid Retina.",
        specs: { "Vi xử lý (CPU)": "Apple M2 8-core", "RAM": "8GB Unified", "Ổ cứng": "256GB SSD", "Màn hình": "13.6 inch Liquid Retina", "Card đồ họa": "8-core GPU", "Trọng lượng": "1.24 kg" }
    },
    { 
        id: "MAC03", 
        type: "laptop", brand: "apple",
        name: "MacBook Pro 16 M3 Pro", 
        price: "69.990.000 đ", 
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80", 
        desc: "Apple M3 Pro 12-core, 18GB RAM, 512GB SSD, Liquid Retina XDR 16.2 inch.",
        specs: { "Vi xử lý (CPU)": "Apple M3 Pro 12-core", "RAM": "18GB Unified", "Ổ cứng": "512GB SSD", "Màn hình": "16.2 inch Liquid Retina XDR", "Card đồ họa": "18-core GPU", "Trọng lượng": "2.14 kg" }
    },
    { 
        id: "MAC04", 
        type: "laptop", brand: "apple",
        name: "MacBook Air 15 M3", 
        price: "32.990.000 đ", 
        img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500&q=80", 
        desc: "Apple M3, 8GB RAM, 256GB SSD, màn hình Liquid Retina 15.3 inch.",
        specs: { "Vi xử lý (CPU)": "Apple M3 8-core", "RAM": "8GB Unified", "Ổ cứng": "256GB SSD", "Màn hình": "15.3 inch Liquid Retina", "Card đồ họa": "10-core GPU", "Trọng lượng": "1.51 kg" }
    },

    // ================= LAPTOP ASUS =================
    { 
        id: "ASUS01", 
        type: "laptop", brand: "asus",
        name: "ASUS ROG Strix G16", 
        price: "35.990.000 đ", 
        img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80", 
        desc: "Intel Core i7, 16GB RAM, RTX 4060, Màn hình 165Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13650HX", "RAM": "16GB DDR5", "Ổ cứng": "512GB PCIe Gen4", "Màn hình": "16.0 inch WUXGA 165Hz", "Card đồ họa": "RTX 4060 8GB", "Trọng lượng": "2.50 kg" }
    },
    { 
        id: "ASUS02", 
        type: "laptop", brand: "asus",
        name: "ASUS Zenbook 14 OLED", 
        price: "26.490.000 đ", 
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80", 
        desc: "Intel Core Ultra 7, 16GB RAM, 512GB SSD, Màn hình OLED.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 155H", "RAM": "16GB LPDDR5X", "Ổ cứng": "512GB SSD", "Màn hình": "14.0 inch 3K OLED", "Card đồ họa": "Intel Arc", "Trọng lượng": "1.20 kg" }
    },
    { 
        id: "ASUS03", 
        type: "laptop", brand: "asus",
        name: "ASUS TUF Gaming F15", 
        price: "21.990.000 đ", 
        img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500&q=80", 
        desc: "Intel Core i5, 16GB RAM, RTX 3050, Thiết kế chuẩn quân đội.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-11400H", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.30 kg" }
    },
    { 
        id: "ASUS04", 
        type: "laptop", brand: "asus",
        name: "ASUS ROG Zephyrus G14 2024", 
        price: "49.990.000 đ", 
        img: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?w=500&q=80", 
        desc: "AMD Ryzen 9 8945HS, 32GB RAM, RTX 4070, Màn OLED 2.8K 120Hz.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 9 8945HS", "RAM": "32GB LPDDR5X", "Ổ cứng": "1TB SSD", "Màn hình": "14.0 inch OLED 2.8K 120Hz", "Card đồ họa": "RTX 4070 8GB", "Trọng lượng": "1.65 kg" }
    },
    { 
        id: "ASUS05", 
        type: "laptop", brand: "asus",
        name: "ASUS VivoBook 15 OLED K3504", 
        price: "16.490.000 đ", 
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", 
        desc: "Intel Core i5-12500H, 8GB RAM, 512GB SSD, Màn hình OLED chuẩn màu.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-12500H", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD OLED", "Card đồ họa": "Intel UHD", "Trọng lượng": "1.80 kg" }
    },

    // ================= LAPTOP DELL =================
    { 
        id: "DELL01", 
        type: "laptop", brand: "dell",
        name: "Dell XPS 15 9530", 
        price: "45.500.000 đ", 
        img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80", 
        desc: "Intel Core i7-13700H, 16GB RAM, 1TB SSD, RTX 4050.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700H", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Màn hình": "15.6 inch FHD+", "Card đồ họa": "RTX 4050 6GB", "Trọng lượng": "1.86 kg" }
    },
    { 
        id: "DELL02", 
        type: "laptop", brand: "dell",
        name: "Dell Inspiron 16 5630", 
        price: "22.000.000 đ", 
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80", 
        desc: "Intel Core i5-1340P, 16GB RAM, 512GB SSD, Màn 16 inch.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1340P", "RAM": "16GB LPDDR5", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch FHD+", "Card đồ họa": "Intel Iris Xe", "Trọng lượng": "1.85 kg" }
    },
    { 
        id: "DELL03", 
        type: "laptop", brand: "dell",
        name: "Dell Alienware m16 R1", 
        price: "52.990.000 đ", 
        img: "https://images.unsplash.com/photo-1588702545922-a0ce5e93df6e?w=500&q=80", 
        desc: "Intel Core i7-13700HX, 16GB DDR5, RTX 4070, Màn hình QHD+ 240Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700HX", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Màn hình": "16.0 inch QHD+ 240Hz", "Card đồ họa": "RTX 4070 8GB", "Trọng lượng": "3.50 kg" }
    },
    { 
        id: "DELL04", 
        type: "laptop", brand: "dell",
        name: "Dell XPS 13 9340", 
        price: "29.990.000 đ", 
        img: "https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500&q=80", 
        desc: "Intel Core Ultra 7 165H, 16GB RAM, 512GB SSD, Màn hình 13.4 inch.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 165H", "RAM": "16GB LPDDR5x", "Ổ cứng": "512GB SSD", "Màn hình": "13.4 inch FHD+ InfinityEdge", "Card đồ họa": "Intel Arc", "Trọng lượng": "1.19 kg" }
    },

    // ================= LAPTOP HP =================
    { 
        id: "HP01", 
        type: "laptop", brand: "hp",
        name: "HP Envy x360 14", 
        price: "25.500.000 đ", 
        img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", 
        desc: "Intel Core i5-1335U, 16GB RAM, 512GB SSD, Cảm ứng lật xoay 360.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1335U", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "14.0 inch FHD Cảm ứng", "Card đồ họa": "Intel Iris Xe", "Trọng lượng": "1.52 kg" }
    },
    { 
        id: "HP02", 
        type: "laptop", brand: "hp",
        name: "HP Victus 15", 
        price: "19.990.000 đ", 
        img: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?w=500&q=80", 
        desc: "AMD Ryzen 5, 8GB RAM, RTX 3050, Laptop Gaming giá rẻ.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 5 7535HS", "RAM": "8GB DDR5", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.29 kg" }
    },
    { 
        id: "HP03", 
        type: "laptop", brand: "hp",
        name: "HP Spectre x360 14", 
        price: "38.990.000 đ", 
        img: "https://images.unsplash.com/photo-1544099858-75f36a6c8a2f?w=500&q=80", 
        desc: "Intel Core Ultra 7, 32GB RAM, 2TB SSD, Màn OLED 2.8K cảm ứng.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 155U", "RAM": "32GB LPDDR5", "Ổ cứng": "2TB SSD", "Màn hình": "14.0 inch 2.8K OLED Cảm ứng", "Card đồ họa": "Intel Iris Xe", "Trọng lượng": "1.41 kg" }
    },
    { 
        id: "HP04", 
        type: "laptop", brand: "hp",
        name: "HP Pavilion Gaming 15", 
        price: "18.500.000 đ", 
        img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80", 
        desc: "AMD Ryzen 5 5600H, 8GB RAM, GTX 1650, Màn hình 144Hz giá tốt.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 5 5600H", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "GTX 1650 4GB", "Trọng lượng": "2.26 kg" }
    },

    // ================= LAPTOP LENOVO =================
    { 
        id: "LEN01", 
        type: "laptop", brand: "lenovo",
        name: "Lenovo Legion 5 Pro", 
        price: "32.990.000 đ", 
        img: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=500&q=80", 
        desc: "Ryzen 7 6800H, 16GB RAM, RTX 3060, Màn hình 2K 165Hz.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 7 6800H", "RAM": "16GB DDR5", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch WQXGA 165Hz", "Card đồ họa": "RTX 3060 6GB", "Trọng lượng": "2.45 kg" }
    },
    { 
        id: "LEN02", 
        type: "laptop", brand: "lenovo",
        name: "Lenovo ThinkPad X1 Carbon Gen 12", 
        price: "44.500.000 đ", 
        img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=80", 
        desc: "Intel Core Ultra 7, 16GB RAM, 512GB SSD, siêu nhẹ 1.12kg cho doanh nhân.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 164U", "RAM": "16GB LPDDR5", "Ổ cứng": "512GB SSD", "Màn hình": "14.0 inch WUXGA IPS", "Card đồ họa": "Intel Graphics", "Trọng lượng": "1.12 kg" }
    },
    { 
        id: "LEN03", 
        type: "laptop", brand: "lenovo",
        name: "Lenovo IdeaPad Slim 5 16", 
        price: "17.990.000 đ", 
        img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&q=80", 
        desc: "AMD Ryzen 5 7530U, 16GB RAM, 512GB SSD, Màn hình 16 inch WUXGA.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 5 7530U", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch WUXGA IPS", "Card đồ họa": "AMD Radeon", "Trọng lượng": "1.79 kg" }
    },
    { 
        id: "LEN04", 
        type: "laptop", brand: "lenovo",
        name: "Lenovo Legion Pro 7i Gen 9", 
        price: "59.990.000 đ", 
        img: "https://images.unsplash.com/photo-1609240563622-68c5b7c18dba?w=500&q=80", 
        desc: "Intel Core i9-14900HX, 32GB RAM, RTX 4080, Màn hình 2.5K 240Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i9-14900HX", "RAM": "32GB DDR5", "Ổ cứng": "1TB SSD", "Màn hình": "16.0 inch WQXGA 240Hz", "Card đồ họa": "RTX 4080 12GB", "Trọng lượng": "2.89 kg" }
    },

    // ================= LAPTOP ACER =================
    { 
        id: "ACER01", 
        type: "laptop", brand: "acer",
        name: "Acer Nitro 5 Tiger", 
        price: "20.490.000 đ", 
        img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&q=80", 
        desc: "Intel Core i5 12500H, 8GB RAM, RTX 3050, Tản nhiệt siêu mát.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-12500H", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD 144Hz", "Card đồ họa": "RTX 3050 4GB", "Trọng lượng": "2.50 kg" }
    },
    { 
        id: "ACER02", 
        type: "laptop", brand: "acer",
        name: "Acer Predator Helios Neo 16", 
        price: "33.490.000 đ", 
        img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=500&q=80", 
        desc: "Intel Core i7-13700HX, 16GB RAM, RTX 4060, Màn hình QHD 165Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700HX", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Màn hình": "16.0 inch WQXGA 165Hz", "Card đồ họa": "RTX 4060 8GB", "Trọng lượng": "2.60 kg" }
    },
    { 
        id: "ACER03", 
        type: "laptop", brand: "acer",
        name: "Acer Swift Go 16 OLED", 
        price: "22.990.000 đ", 
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80", 
        desc: "Intel Core Ultra 5 125H, 16GB RAM, 512GB SSD, Màn OLED 16 inch 120Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 5 125H", "RAM": "16GB LPDDR5", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch 3.2K OLED 120Hz", "Card đồ họa": "Intel Arc", "Trọng lượng": "1.60 kg" }
    },

    // ================= LAPTOP MSI =================
    { 
        id: "MSI01", 
        type: "laptop", brand: "msi",
        name: "MSI Titan GT77 HX", 
        price: "89.990.000 đ", 
        img: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=500&q=80", 
        desc: "Intel Core i9-13980HX, 64GB RAM, RTX 4090, Màn hình 4K 144Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i9-13980HX", "RAM": "64GB DDR5", "Ổ cứng": "2TB SSD", "Màn hình": "17.3 inch UHD 144Hz", "Card đồ họa": "RTX 4090 16GB", "Trọng lượng": "3.30 kg" }
    },
    { 
        id: "MSI02", 
        type: "laptop", brand: "msi",
        name: "MSI Modern 15 H B13M", 
        price: "15.990.000 đ", 
        img: "https://images.unsplash.com/photo-1471666875520-c75081f42081?w=500&q=80", 
        desc: "Intel Core i5-13420H, 16GB RAM, 512GB SSD, Pin trâu 53Wh.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13420H", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "15.6 inch FHD IPS", "Card đồ họa": "Intel UHD", "Trọng lượng": "1.70 kg" }
    },
    { 
        id: "MSI03", 
        type: "laptop", brand: "msi",
        name: "MSI Raider GE78 HX", 
        price: "74.990.000 đ", 
        img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80", 
        desc: "Intel Core i9-13980HX, 32GB RAM, RTX 4080, Màn QHD+ 240Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i9-13980HX", "RAM": "32GB DDR5", "Ổ cứng": "2TB SSD", "Màn hình": "17.0 inch QHD+ 240Hz", "Card đồ họa": "RTX 4080 12GB", "Trọng lượng": "2.99 kg" }
    },

    // ================= LAPTOP SAMSUNG & RAZER =================
    { 
        id: "SAM01", 
        type: "laptop", brand: "samsung",
        name: "Samsung Galaxy Book4 Pro 16", 
        price: "36.990.000 đ", 
        img: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&q=80", 
        desc: "Intel Core Ultra 7 155H, 16GB RAM, 512GB SSD, Màn Dynamic AMOLED 2X 3K.",
        specs: { "Vi xử lý (CPU)": "Intel Core Ultra 7 155H", "RAM": "16GB LPDDR5X", "Ổ cứng": "512GB SSD", "Màn hình": "16.0 inch 3K Dynamic AMOLED 2X 120Hz", "Card đồ họa": "Intel Arc", "Trọng lượng": "1.55 kg" }
    },
    { 
        id: "RAZER01", 
        type: "laptop", brand: "razer",
        name: "Razer Blade 16 2024", 
        price: "99.990.000 đ", 
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80", 
        desc: "Intel Core i9-14900HX, 32GB RAM, RTX 4090, Màn OLED QHD+ 240Hz.",
        specs: { "Vi xử lý (CPU)": "Intel Core i9-14900HX", "RAM": "32GB DDR5", "Ổ cứng": "2TB SSD", "Màn hình": "16.0 inch QHD+ OLED 240Hz", "Card đồ họa": "RTX 4090 16GB", "Trọng lượng": "2.14 kg" }
    },

    // ================= PC ĐỂ BÀN & ALL-IN-ONE =================
    { 
        id: "PC_ASUS01", 
        type: "pc", loaipc: "gaming", brand: "asus",
        name: "PC Gaming ASUS ROG G22CH", 
        price: "42.990.000 đ", 
        img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80", 
        desc: "PC Gaming nhỏ gọn, tản nhiệt nước, Core i7, RTX 4070.",
        specs: { "Vi xử lý (CPU)": "Intel Core i7-13700F", "RAM": "16GB DDR5", "Ổ cứng": "1TB SSD", "Card đồ họa (VGA)": "RTX 4070 12GB", "Nguồn (PSU)": "600W 80+ Gold" }
    },
    { 
        id: "PC_DELL01", 
        type: "pc", loaipc: "vanphong", brand: "dell",
        name: "PC Dell Inspiron Desktop 3020", 
        price: "15.500.000 đ", 
        img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&q=80", 
        desc: "PC Văn phòng bền bỉ, hiệu năng ổn định, thiết kế hiện đại.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13400", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "Intel UHD 730", "Kết nối": "Wi-Fi 6 + Bluetooth" }
    },
    { 
        id: "PC_MAC01", 
        type: "pc", loaipc: "vanphong", brand: "apple",
        name: "Mac Studio M2 Max", 
        price: "54.990.000 đ", 
        img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500&q=80", 
        desc: "Sức mạnh vô song cho dân sáng tạo chuyên nghiệp, chip M2 Max.",
        specs: { "Vi xử lý (CPU)": "Apple M2 Max", "RAM": "32GB Unified", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "30-core GPU", "Trọng lượng": "2.7 kg" }
    },
    { 
        id: "PC_HP01", 
        type: "pc", loaipc: "vanphong", brand: "hp",
        name: "HP All-in-One 24-cb1011d", 
        price: "18.990.000 đ", 
        img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80", 
        desc: "Máy tính bộ tích hợp màn hình 24 inch, gọn gàng, tiết kiệm không gian.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-1235U", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD", "Màn hình": "23.8 inch FHD IPS", "Card đồ họa (VGA)": "Intel Iris Xe" }
    },
    { 
        id: "PC_MSI01", 
        type: "pc", loaipc: "gaming", brand: "msi",
        name: "PC MSI MAG Infinite S3", 
        price: "28.500.000 đ", 
        img: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=500&q=80", 
        desc: "Thiết kế hầm hố, kính cường lực, Core i5 13400F, RTX 4060.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13400F", "RAM": "16GB DDR4", "Ổ cứng": "512GB SSD", "Card đồ họa (VGA)": "RTX 4060 8GB", "Nguồn (PSU)": "500W 80+ Bronze" }
    },
    { 
        id: "PC_LENOVO01", 
        type: "pc", loaipc: "vanphong", brand: "lenovo",
        name: "PC Lenovo ThinkCentre Neo 50s", 
        price: "11.200.000 đ", 
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80", 
        desc: "PC đồng bộ siêu nhỏ gọn, tản nhiệt êm ái, tối ưu cho doanh nghiệp.",
        specs: { "Vi xử lý (CPU)": "Intel Core i3-12100", "RAM": "8GB DDR4", "Ổ cứng": "256GB SSD", "Card đồ họa (VGA)": "Intel UHD 730", "Kích thước": "Form SFF gọn nhẹ" }
    },
    { 
        id: "PC_MAC02", 
        type: "pc", loaipc: "vanphong", brand: "apple",
        name: "Mac Mini M4", 
        price: "16.990.000 đ", 
        img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80", 
        desc: "Apple M4 10-core, 16GB RAM, 256GB SSD, siêu nhỏ gọn tiết kiệm điện.",
        specs: { "Vi xử lý (CPU)": "Apple M4 10-core", "RAM": "16GB Unified", "Ổ cứng": "256GB SSD", "Card đồ họa (VGA)": "10-core GPU", "Kích thước": "12.7 x 12.7 x 3.5 cm" }
    },
    { 
        id: "PC_ASUS02", 
        type: "pc", loaipc: "gaming", brand: "asus",
        name: "PC ASUS ROG Strix GA35", 
        price: "65.990.000 đ", 
        img: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&q=80", 
        desc: "AMD Ryzen 9 5950X, 32GB RAM, RTX 4090, tản nhiệt nước AIO cao cấp.",
        specs: { "Vi xử lý (CPU)": "AMD Ryzen 9 5950X", "RAM": "32GB DDR4", "Ổ cứng": "2TB SSD", "Card đồ họa (VGA)": "RTX 4090 24GB", "Nguồn (PSU)": "850W 80+ Gold" }
    },
    { 
        id: "PC_ACER01", 
        type: "pc", loaipc: "vanphong", brand: "acer",
        name: "Acer Aspire TC-1770", 
        price: "12.990.000 đ", 
        img: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&q=80", 
        desc: "Intel Core i5-13400, 8GB RAM, 512GB SSD, PC gia đình giá tốt.",
        specs: { "Vi xử lý (CPU)": "Intel Core i5-13400", "RAM": "8GB DDR4", "Ổ cứng": "512GB SSD + 1TB HDD", "Card đồ họa (VGA)": "Intel UHD 730", "Kết nối": "Wi-Fi 6 + Bluetooth" }
    },

    // ================= MÀN HÌNH =================
    { 
        id: "MON_ASUS01", 
        type: "phukien", loaiphukien: "manhinh", brand: "asus",
        name: "Màn hình ASUS ROG Swift PG279QM", 
        price: "14.990.000 đ", 
        img: "https://images.unsplash.com/photo-1593640408182-31c228e5d3a8?w=500&q=80", 
        desc: "27 inch WQHD IPS, 240Hz, G-Sync Ultimate, lý tưởng cho game thủ.",
        specs: { "Kích thước": "27 inch", "Độ phân giải": "2560x1440 (WQHD)", "Tần số quét": "240Hz", "Tấm nền": "IPS", "Thời gian phản hồi": "1ms GTG", "HDR": "G-Sync Ultimate HDR" }
    },
    { 
        id: "MON_DELL01", 
        type: "phukien", loaiphukien: "manhinh", brand: "dell",
        name: "Màn hình Dell UltraSharp U2723QE 4K", 
        price: "16.500.000 đ", 
        img: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=500&q=80", 
        desc: "27 inch 4K UHD IPS Black, USB-C 90W, KVM, chuẩn màu chuyên nghiệp.",
        specs: { "Kích thước": "27 inch", "Độ phân giải": "3840x2160 (4K UHD)", "Tần số quét": "60Hz", "Tấm nền": "IPS Black", "Cổng kết nối": "USB-C 90W + HDMI + DP + USB Hub", "HDR": "DisplayHDR 400" }
    },
    { 
        id: "MON_LG01", 
        type: "phukien", loaiphukien: "manhinh", brand: "lg",
        name: "Màn hình LG UltraGear 27GP850-B", 
        price: "8.490.000 đ", 
        img: "https://images.unsplash.com/photo-1527443060795-0402a18906b4?w=500&q=80", 
        desc: "27 inch QHD Nano IPS, 165Hz, G-Sync Compatible, 1ms GTG.",
        specs: { "Kích thước": "27 inch", "Độ phân giải": "2560x1440 (QHD)", "Tần số quét": "165Hz", "Tấm nền": "Nano IPS", "Thời gian phản hồi": "1ms GTG", "HDR": "HDR10" }
    },
    { 
        id: "MON_SAM01", 
        type: "phukien", loaiphukien: "manhinh", brand: "samsung",
        name: "Màn hình Samsung Odyssey G7 28 inch 4K", 
        price: "13.990.000 đ", 
        img: "https://images.unsplash.com/photo-1547119957-637f8679db1e?w=500&q=80", 
        desc: "28 inch 4K UHD 144Hz, Nano IPS, G-Sync Compatible, HDR 600.",
        specs: { "Kích thước": "28 inch", "Độ phân giải": "3840x2160 (4K UHD)", "Tần số quét": "144Hz", "Tấm nền": "Nano IPS", "HDR": "DisplayHDR 600", "Cổng kết nối": "HDMI 2.1 + DP 1.4" }
    },
    { 
        id: "MON_LG02", 
        type: "phukien", loaiphukien: "manhinh", brand: "lg",
        name: "Màn hình LG 34WP65C-B UltraWide Curved", 
        price: "9.990.000 đ", 
        img: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=500&q=80", 
        desc: "34 inch Ultrawide Curved 21:9, QHD 160Hz, FreeSync Premium, HDR10.",
        specs: { "Kích thước": "34 inch Curved", "Độ phân giải": "3440x1440 (UWQHD)", "Tần số quét": "160Hz", "Tấm nền": "VA", "HDR": "HDR10", "Cổng kết nối": "HDMI 2.0 + DP 1.4 + USB-C" }
    },

    // ================= PHỤ KIỆN - CHUỘT =================
    { 
        id: "PK_LOGI01", 
        type: "phukien", loaiphukien: "chuot", brand: "logitech",
        name: "Chuột Logitech G Pro X Superlight 2", 
        price: "2.990.000 đ", 
        img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80", 
        desc: "Chuột gaming không dây siêu nhẹ 60g, cảm biến HERO 2 32K.",
        specs: { "Loại kết nối": "Không dây LIGHTSPEED 2.4GHz", "Cảm biến": "HERO 2 32K", "DPI": "32,000 DPI", "Trọng lượng": "60 gram" }
    },
    { 
        id: "PK_LOGI02", 
        type: "phukien", loaiphukien: "chuot", brand: "logitech",
        name: "Chuột Logitech MX Master 3S", 
        price: "2.190.000 đ", 
        img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80", 
        desc: "Chuột làm việc cao cấp, cuộn MagSpeed 1000 lines/giây, êm tuyệt đối.",
        specs: { "Loại kết nối": "Bluetooth + USB Receiver", "Cảm biến": "Darkfield 8000 DPI", "Pin": "Sạc USB-C 70 ngày", "Số nút": "7 nút tùy chỉnh" }
    },
    { 
        id: "PK_RAZER02", 
        type: "phukien", loaiphukien: "chuot", brand: "razer",
        name: "Chuột Razer DeathAdder V3 HyperSpeed", 
        price: "1.890.000 đ", 
        img: "https://images.unsplash.com/photo-1561121791-fb7fe9f26ab6?w=500&q=80", 
        desc: "Chuột gaming không dây, cảm biến Focus Pro 30K, 64g siêu nhẹ.",
        specs: { "Loại kết nối": "HyperSpeed 2.4GHz + Bluetooth", "Cảm biến": "Focus Pro 30K Optical", "DPI": "30,000 DPI", "Trọng lượng": "64 gram" }
    },
    { 
        id: "PK_STEELSERIES01", 
        type: "phukien", loaiphukien: "chuot", brand: "steelseries",
        name: "Chuột SteelSeries Aerox 9 Wireless", 
        price: "3.290.000 đ", 
        img: "https://images.unsplash.com/photo-1640955012124-9e6da3765f0a?w=500&q=80", 
        desc: "18 nút lập trình, cảm biến TrueMove Air 18K DPI, AquaBarrier chống thấm.",
        specs: { "Loại kết nối": "2.4GHz Wireless + Bluetooth", "Cảm biến": "TrueMove Air 18K DPI", "Số nút": "18 nút lập trình", "Trọng lượng": "89 gram" }
    },
    { 
        id: "PK_APPLE01", 
        type: "phukien", loaiphukien: "chuot", brand: "apple",
        name: "Apple Magic Mouse 2", 
        price: "1.990.000 đ", 
        img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=500&q=80", 
        desc: "Chuột không dây Apple, thiết kế liền mạch, cảm ứng Multi-Touch.",
        specs: { "Loại kết nối": "Bluetooth", "Bề mặt": "Cảm ứng Multi-Touch", "Cổng sạc": "Lightning", "Trọng lượng": "99 gram" }
    },

    // ================= PHỤ KIỆN - BÀN PHÍM =================
    { 
        id: "PK_RAZER01", 
        type: "phukien", loaiphukien: "banphim", brand: "razer",
        name: "Bàn phím cơ Razer BlackWidow V4", 
        price: "4.290.000 đ", 
        img: "https://images.unsplash.com/photo-1629854497551-7f89b917bb14?w=500&q=80", 
        desc: "Bàn phím cơ fullsize, Switch Razer Green Clicky, LED Chroma RGB.",
        specs: { "Loại bàn phím": "Cơ có dây", "Loại Switch": "Razer Green (Clicky)", "Đèn LED": "Razer Chroma RGB", "Đệm kê tay": "Có" }
    },
    { 
        id: "PK_CORSAIR01", 
        type: "phukien", loaiphukien: "banphim", brand: "corsair",
        name: "Bàn phím cơ Corsair K70 RGB PRO", 
        price: "3.590.000 đ", 
        img: "https://images.unsplash.com/photo-1606558661642-a72516629737?w=500&q=80", 
        desc: "Khung nhôm hàng không, Switch CHERRY MX, tần số phản hồi 8000Hz AXON.",
        specs: { "Loại bàn phím": "Cơ có dây", "Loại Switch": "CHERRY MX Red", "Tần số phản hồi": "8000Hz AXON", "Đệm kê tay": "Có" }
    },
    { 
        id: "PK_LOGI03", 
        type: "phukien", loaiphukien: "banphim", brand: "logitech",
        name: "Bàn phím Logitech MX Keys S", 
        price: "2.890.000 đ", 
        img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80", 
        desc: "Bàn phím không dây thấp cấu, đèn nền thích nghi, kết nối 3 thiết bị cùng lúc.",
        specs: { "Loại kết nối": "Bluetooth + USB Receiver", "Pin": "Sạc USB-C, dùng đến 5 tháng", "Tương thích": "Windows / macOS / Linux", "Số thiết bị": "3 thiết bị" }
    },
    { 
        id: "PK_APPLE02", 
        type: "phukien", loaiphukien: "banphim", brand: "apple",
        name: "Apple Magic Keyboard Touch ID", 
        price: "3.490.000 đ", 
        img: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&q=80", 
        desc: "Bàn phím không dây, cảm biến Touch ID bảo mật, pin sạc dùng lâu.",
        specs: { "Loại kết nối": "Bluetooth", "Bảo mật": "Touch ID", "Cổng sạc": "Lightning", "Ngôn ngữ": "US English" }
    },
    { 
        id: "PK_KEYCHRON01", 
        type: "phukien", loaiphukien: "banphim", brand: "keychron",
        name: "Bàn phím Keychron Q5 Max QMK", 
        price: "3.990.000 đ", 
        img: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?w=500&q=80", 
        desc: "96% nhôm nguyên khối, Gasket Mount, không dây Bluetooth, QMK/VIA.",
        specs: { "Layout": "96% (có Numpad)", "Thân máy": "Nhôm nguyên khối CNC", "Kết nối": "USB-C + Bluetooth 5.1", "Switch": "Keychron K Pro Red / Brown" }
    },

    // ================= PHỤ KIỆN - TAI NGHE =================
    { 
        id: "PK_SONY01", 
        type: "phukien", loaiphukien: "tainghe", brand: "sony",
        name: "Tai nghe Sony WH-1000XM5", 
        price: "7.490.000 đ", 
        img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80", 
        desc: "Tai nghe chụp tai chống ồn chủ động đỉnh cao, pin 30 giờ.",
        specs: { "Loại tai nghe": "Over-ear không dây", "Công nghệ": "Chống ồn ANC kép", "Kết nối": "Bluetooth 5.2", "Pin": "30 giờ" }
    },
    { 
        id: "PK_SONY02", 
        type: "phukien", loaiphukien: "tainghe", brand: "sony",
        name: "Tai nghe Sony WF-1000XM5", 
        price: "5.990.000 đ", 
        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80", 
        desc: "True Wireless In-ear, ANC tốt nhất phân khúc, pin 8h + case 16h.",
        specs: { "Loại tai nghe": "In-ear True Wireless", "Công nghệ": "ANC + Ambient Sound Mode", "Kết nối": "Bluetooth 5.3", "Pin": "8h + 16h (case)" }
    },
    { 
        id: "PK_CORSAIR02", 
        type: "phukien", loaiphukien: "tainghe", brand: "corsair",
        name: "Tai nghe Corsair HS80 RGB Wireless", 
        price: "2.690.000 đ", 
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", 
        desc: "Tai nghe gaming không dây, Dolby Audio 7.1, pin 20 tiếng.",
        specs: { "Loại kết nối": "2.4GHz Wireless + Bluetooth", "Âm thanh": "Dolby Audio 7.1", "Micro": "Omnidirectional có thể tháo rời", "Pin": "20 giờ" }
    },
    { 
        id: "PK_HYPER01", 
        type: "phukien", loaiphukien: "tainghe", brand: "hyperx",
        name: "Tai nghe HyperX Cloud Alpha Wireless", 
        price: "3.690.000 đ", 
        img: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=500&q=80", 
        desc: "Pin đến 300 giờ, âm thanh DTS Headphone:X Spatial Audio, driver 50mm.",
        specs: { "Loại kết nối": "2.4GHz Wireless", "Pin": "300 giờ", "Driver": "50mm Dynamic", "Micro": "Đa hướng có thể tháo rời" }
    },
    { 
        id: "PK_SAMSUNG01", 
        type: "phukien", loaiphukien: "tainghe", brand: "samsung",
        name: "Tai nghe Samsung Galaxy Buds3 Pro", 
        price: "4.490.000 đ", 
        img: "https://images.unsplash.com/photo-1608156639585-b3a776f9b36e?w=500&q=80", 
        desc: "TWS cao cấp, ANC thích nghi, 360 Audio, kháng nước IP57.",
        specs: { "Loại tai nghe": "In-ear True Wireless", "Chống ồn": "ANC thích nghi", "Chống nước": "IP57", "Pin": "6h + 15h (case)" }
    },

    // ================= PHỤ KIỆN - LƯU TRỮ =================
    { 
        id: "PK_SSD01", 
        type: "phukien", loaiphukien: "luutru", brand: "samsung",
        name: "Ổ cứng SSD Samsung 990 Pro 1TB NVMe", 
        price: "2.490.000 đ", 
        img: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&q=80", 
        desc: "SSD NVMe PCIe 4.0, đọc 7450MB/s, ghi 6900MB/s, bảo hành 5 năm.",
        specs: { "Giao tiếp": "M.2 NVMe PCIe 4.0", "Dung lượng": "1TB", "Tốc độ đọc": "7,450 MB/s", "Tốc độ ghi": "6,900 MB/s", "Bảo hành": "5 năm" }
    },
    { 
        id: "PK_SSD02", 
        type: "phukien", loaiphukien: "luutru", brand: "wd",
        name: "WD Black SN850X 2TB NVMe", 
        price: "3.990.000 đ", 
        img: "https://images.unsplash.com/photo-1563770660941-10a63607aef0?w=500&q=80", 
        desc: "SSD NVMe PCIe 4.0, đọc 7300MB/s, lý tưởng cho gaming và sáng tạo nội dung.",
        specs: { "Giao tiếp": "M.2 NVMe PCIe 4.0", "Dung lượng": "2TB", "Tốc độ đọc": "7,300 MB/s", "Tốc độ ghi": "6,600 MB/s", "Bảo hành": "5 năm" }
    },
    { 
        id: "PK_SSD03", 
        type: "phukien", loaiphukien: "luutru", brand: "seagate",
        name: "Ổ cứng di động Seagate One Touch 2TB", 
        price: "1.390.000 đ", 
        img: "https://images.unsplash.com/photo-1512789185119-9f78e5ddaa6f?w=500&q=80", 
        desc: "HDD di động 2TB, USB 3.0, thiết kế nhỏ gọn bỏ túi dễ dàng.",
        specs: { "Giao tiếp": "USB 3.0", "Dung lượng": "2TB", "Tốc độ": "5400 RPM", "Kích thước": "2.5 inch" }
    },

    // ================= PHỤ KIỆN - WEBCAM & DOCK =================
    { 
        id: "PK_WEB01", 
        type: "phukien", loaiphukien: "webcam", brand: "logitech",
        name: "Webcam Logitech C920s HD Pro", 
        price: "1.590.000 đ", 
        img: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&q=80", 
        desc: "Full HD 1080p/30fps, màng che riêng tư, hai micro lọc tiếng ồn tự động.",
        specs: { "Độ phân giải": "Full HD 1080p 30fps", "Góc rộng": "78°", "Micro": "Stereo tự điều chỉnh âm lượng", "Kết nối": "USB-A" }
    },
    { 
        id: "PK_WEB02", 
        type: "phukien", loaiphukien: "webcam", brand: "logitech",
        name: "Webcam Logitech Brio 4K Ultra HD", 
        price: "4.290.000 đ", 
        img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80", 
        desc: "4K 30fps, HDR, Windows Hello IR, lấy nét tự động siêu nhanh.",
        specs: { "Độ phân giải": "4K Ultra HD 30fps / 1080p 60fps", "Góc rộng": "90°", "Bảo mật": "Windows Hello IR", "Kết nối": "USB-C + USB-A" }
    },
    { 
        id: "PK_DOCK01", 
        type: "phukien", loaiphukien: "dock", brand: "dell",
        name: "Dell Thunderbolt Dock WD22TB4", 
        price: "5.490.000 đ", 
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", 
        desc: "Dock Thunderbolt 4, sạc 130W, 2x DP + HDMI 2.0 + 5x USB + LAN 2.5G.",
        specs: { "Giao tiếp": "Thunderbolt 4", "Công suất sạc": "130W", "Cổng màn hình": "2x DisplayPort + 1x HDMI 2.0", "USB": "5x USB-A + 1x USB-C", "Mạng": "LAN 2.5G" }
    },
    { 
        id: "PK_DOCK02", 
        type: "phukien", loaiphukien: "dock", brand: "anker",
        name: "Hub Anker 12-in-1 USB-C", 
        price: "1.890.000 đ", 
        img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?w=500&q=80", 
        desc: "Hub 12 cổng, HDMI 4K 60Hz + VGA + USB-C PD 85W + đọc thẻ SD/TF.",
        specs: { "Giao tiếp": "USB-C", "Cổng màn hình": "HDMI 4K 60Hz + VGA", "Sạc Pass-through": "85W USB-C PD", "USB": "3x USB-A 3.0 + 1x USB-C" }
    }
];