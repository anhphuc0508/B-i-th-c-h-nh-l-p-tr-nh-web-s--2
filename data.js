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
        specs: {
            "Vi xử lý (CPU)": "Apple M3 8-core",
            "RAM": "8GB Unified Memory",
            "Ổ cứng": "512GB SSD",
            "Màn hình": "14.2 inch Liquid Retina XDR",
            "Card đồ họa": "10-core GPU",
            "Trọng lượng": "1.55 kg"
        }
    },
    { 
        id: "MAC02", 
        type: "laptop", 
        brand: "apple",
        name: "MacBook Air M2 13.6", 
        price: "24.500.000 đ", 
        img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500", 
        desc: "Apple M2, 8GB RAM, 256GB SSD, Liquid Retina.",
        specs: {
            "Vi xử lý (CPU)": "Apple M2 8-core",
            "RAM": "8GB Unified Memory",
            "Ổ cứng": "256GB SSD",
            "Màn hình": "13.6 inch Liquid Retina",
            "Card đồ họa": "8-core GPU",
            "Trọng lượng": "1.24 kg"
        }
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
        specs: {
            "Vi xử lý (CPU)": "Intel Core i7-13650HX",
            "RAM": "16GB DDR5 4800MHz",
            "Ổ cứng": "512GB PCIe Gen4 SSD",
            "Màn hình": "16.0 inch WUXGA (1920x1200) 165Hz",
            "Card đồ họa": "NVIDIA GeForce RTX 4060 8GB",
            "Trọng lượng": "2.50 kg"
        }
    },
    { 
        id: "ASUS02", 
        type: "laptop", 
        brand: "asus",
        name: "ASUS Zenbook 14 OLED", 
        price: "26.490.000 đ", 
        img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500", 
        desc: "Intel Core Ultra 7, 16GB RAM, 512GB SSD, Màn hình OLED.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core Ultra 7 155H",
            "RAM": "16GB LPDDR5X",
            "Ổ cứng": "512GB M.2 NVMe SSD",
            "Màn hình": "14.0 inch 3K (2880 x 1800) OLED 120Hz",
            "Card đồ họa": "Intel Arc Graphics",
            "Trọng lượng": "1.20 kg"
        }
    },
    { 
        id: "ASUS03", 
        type: "laptop", 
        brand: "asus",
        name: "ASUS TUF Gaming F15", 
        price: "21.990.000 đ", 
        img: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=500", 
        desc: "Intel Core i5, 16GB RAM, RTX 3050, Thiết kế chuẩn quân đội.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core i5-11400H",
            "RAM": "16GB DDR4 3200MHz",
            "Ổ cứng": "512GB PCIe NVMe SSD",
            "Màn hình": "15.6 inch FHD (1920x1080) 144Hz",
            "Card đồ họa": "NVIDIA GeForce RTX 3050 4GB",
            "Trọng lượng": "2.30 kg"
        }
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
        specs: {
            "Vi xử lý (CPU)": "Intel Core i7-13700H",
            "RAM": "16GB DDR5 4800MHz",
            "Ổ cứng": "1TB PCIe NVMe SSD",
            "Màn hình": "15.6 inch FHD+ (1920 x 1200)",
            "Card đồ họa": "NVIDIA GeForce RTX 4050 6GB",
            "Trọng lượng": "1.86 kg"
        }
    },
    { 
        id: "DELL02", 
        type: "laptop", 
        brand: "dell",
        name: "Dell Inspiron 16 5630", 
        price: "22.000.000 đ", 
        img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500", 
        desc: "Intel Core i5-1340P, 16GB RAM, 512GB SSD, Màn 16 inch.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core i5-1340P",
            "RAM": "16GB LPDDR5 4800MHz",
            "Ổ cứng": "512GB PCIe NVMe SSD",
            "Màn hình": "16.0 inch FHD+ (1920 x 1200)",
            "Card đồ họa": "Intel Iris Xe Graphics",
            "Trọng lượng": "1.85 kg"
        }
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
        specs: {
            "Vi xử lý (CPU)": "Intel Core i5-1335U",
            "RAM": "16GB DDR4 3200MHz",
            "Ổ cứng": "512GB PCIe NVMe SSD",
            "Màn hình": "14.0 inch FHD Cảm ứng đa điểm",
            "Card đồ họa": "Intel Iris Xe Graphics",
            "Trọng lượng": "1.52 kg"
        }
    },
    { 
        id: "HP02", 
        type: "laptop", 
        brand: "hp",
        name: "HP Victus 15", 
        price: "19.990.000 đ", 
        img: "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=500", 
        desc: "AMD Ryzen 5, 8GB RAM, RTX 3050, Laptop Gaming giá rẻ.",
        specs: {
            "Vi xử lý (CPU)": "AMD Ryzen 5 7535HS",
            "RAM": "8GB DDR5 4800MHz",
            "Ổ cứng": "512GB PCIe Gen4 SSD",
            "Màn hình": "15.6 inch FHD (1920x1080) 144Hz",
            "Card đồ họa": "NVIDIA GeForce RTX 3050 4GB",
            "Trọng lượng": "2.29 kg"
        }
    },
    // ================= PC ĐỂ BÀN & ALL-IN-ONE =================
    { 
        id: "PC_ASUS01", 
        type: "pc", 
        brand: "asus",
        name: "PC Gaming ASUS ROG G22CH", 
        price: "42.990.000 đ", 
        img: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500", 
        desc: "PC Gaming nhỏ gọn, tản nhiệt nước, Core i7, RTX 4070.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core i7-13700F",
            "RAM": "16GB DDR5 4800MHz (2x8GB)",
            "Ổ cứng": "1TB M.2 NVMe PCIe 4.0 SSD",
            "Card đồ họa (VGA)": "NVIDIA GeForce RTX 4070 12GB",
            "Nguồn (PSU)": "600W 80+ Gold",
            "Hệ điều hành": "Windows 11 Home"
        }
    },
    { 
        id: "PC_DELL01", 
        type: "pc", 
        brand: "dell",
        name: "PC Dell Inspiron Desktop 3020", 
        price: "15.500.000 đ", 
        img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500", 
        desc: "PC Văn phòng bền bỉ, hiệu năng ổn định, thiết kế hiện đại.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core i5-13400 (10-Core, 14.8MB Cache)",
            "RAM": "8GB DDR4 3200MHz",
            "Ổ cứng": "512GB M.2 PCIe NVMe SSD",
            "Card đồ họa (VGA)": "Intel UHD Graphics 730",
            "Kết nối không dây": "Wi-Fi 6 + Bluetooth 5.2",
            "Hệ điều hành": "Windows 11 Home + Office Home & Student"
        }
    },
    { 
        id: "PC_MAC01", 
        type: "pc", 
        brand: "apple",
        name: "Mac Studio M2 Max", 
        price: "54.990.000 đ", 
        img: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=500", 
        desc: "Sức mạnh vô song cho dân sáng tạo chuyên nghiệp, chip M2 Max.",
        specs: {
            "Vi xử lý (CPU)": "Apple M2 Max 12-core",
            "RAM": "32GB Unified Memory",
            "Ổ cứng": "512GB SSD",
            "Card đồ họa (VGA)": "30-core GPU",
            "Cổng kết nối": "4x Thunderbolt 4, 2x USB-A, HDMI, 10Gb Ethernet",
            "Trọng lượng": "2.7 kg"
        }
    },
    { 
        id: "PC_HP01", 
        type: "pc", 
        brand: "hp",
        name: "HP All-in-One 24-cb1011d", 
        price: "18.990.000 đ", 
        img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500", 
        desc: "Máy tính bộ tích hợp màn hình 24 inch, gọn gàng, tiết kiệm không gian.",
        specs: {
            "Vi xử lý (CPU)": "Intel Core i5-1235U",
            "RAM": "8GB DDR4 3200MHz",
            "Ổ cứng": "512GB PCIe NVMe SSD",
            "Màn hình": "23.8 inch FHD (1920 x 1080) IPS",
            "Card đồ họa (VGA)": "Intel Iris Xe Graphics",
            "Phụ kiện kèm theo": "Chuột và Bàn phím không dây HP"
        }
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
        specs: {
            "Loại kết nối": "Không dây (Wireless 2.4GHz)",
            "Cảm biến": "HERO 25K",
            "Độ phân giải (DPI)": "100 - 25,600 DPI",
            "Thời lượng pin": "Lên đến 70 giờ",
            "Trọng lượng": "Chỉ 63 gram"
        }
    },
    { 
        id: "PK_RAZER01", 
        type: "phukien", 
        brand: "razer",
        name: "Bàn phím cơ Razer BlackWidow V4", 
        price: "4.290.000 đ", 
        img: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500", // Tạm dùng ảnh minh họa
        desc: "Bàn phím cơ fullsize, Switch Razer Green, LED Chroma RGB.",
        specs: {
            "Loại bàn phím": "Bàn phím cơ có dây",
            "Loại Switch": "Razer Green Mechanical Switch (Clicky)",
            "Đèn LED": "Razer Chroma RGB",
            "Chất liệu Keycap": "ABS Doubleshot",
            "Đệm kê tay": "Có (Nam châm)"
        }
    },
    { 
        id: "PK_SONY01", 
        type: "phukien", 
        brand: "sony",
        name: "Tai nghe Sony WH-1000XM5", 
        price: "7.490.000 đ", 
        img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500", 
        desc: "Tai nghe chụp tai chống ồn chủ động đỉnh cao, pin 30 giờ.",
        specs: {
            "Loại tai nghe": "Over-ear (Chụp tai không dây)",
            "Công nghệ": "Chống ồn chủ động (ANC) kép",
            "Kết nối": "Bluetooth 5.2, Cổng 3.5mm",
            "Thời lượng pin": "30 giờ (bật ANC)",
            "Trọng lượng": "250 gram"
        }
    },
    { 
        id: "PK_APPLE01", 
        type: "phukien", 
        brand: "apple",
        name: "Apple Magic Mouse 2", 
        price: "1.990.000 đ", 
        img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", 
        desc: "Chuột không dây Apple, thiết kế liền mạch, cảm ứng Multi-Touch.",
        specs: {
            "Loại kết nối": "Không dây (Bluetooth)",
            "Bề mặt": "Cảm ứng Multi-Touch",
            "Cổng sạc": "Lightning",
            "Tương thích": "MacBook, iMac, iPad",
            "Trọng lượng": "99 gram"
        }
    }
];