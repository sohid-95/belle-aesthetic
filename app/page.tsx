"use client";

import { useMemo, useState } from "react";

const WHATSAPP = "6282322237040"; // Ganti dengan nomor resmi Belle
const waLink = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const treatments = [
  {
    id: 1,
    name: "Acne Treatment",
    category: "Acne",
    price: "Rp 165.000",
    desc: "Perawatan untuk kulit yang rentan berjerawat.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    name: "Brightening Treatment",
    category: "Brightening",
    price: "Rp 220.000",
    desc: "Perawatan untuk membantu kulit tampak lebih cerah.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    name: "Facial & Rejuvenation",
    category: "Facial",
    price: "Rp 245.000",
    desc: "Perawatan wajah untuk membantu menjaga kebersihan kulit.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    name: "Anti Aging Treatment",
    category: "Anti Aging",
    price: "Rp 320.000",
    desc: "Perawatan untuk mendukung tampilan kulit yang terawat.",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 5,
    name: "Laser Treatment",
    category: "Laser",
    price: "Rp 450.000",
    desc: "Pilihan perawatan berbasis laser sesuai hasil konsultasi.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 6,
    name: "Peeling Treatment",
    category: "Brightening",
    price: "Rp 275.000",
    desc: "Perawatan eksfoliasi berdasarkan kondisi kulit.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85",
  },
];

const products = [
  {
    id: 1,
    name: "Gentle Cleanser",
    category: "Cleanser",
    price: "Rp 165.000",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 2,
    name: "Brightening Serum",
    category: "Serum",
    price: "Rp 320.000",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 3,
    name: "Daily Moisturizer",
    category: "Moisturizer",
    price: "Rp 275.000",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=500&q=85",
  },
  {
    id: 4,
    name: "Daily Sunscreen",
    category: "Sunscreen",
    price: "Rp 245.000",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=85",
  },
];

const concerns = [
  { icon: "✳", name: "Jerawat", filter: "Acne" },
  { icon: "◉", name: "Flek & Pigmentasi", filter: "Brightening" },
  { icon: "✧", name: "Kulit Kusam", filter: "Brightening" },
  { icon: "⌘", name: "Pori-pori Besar", filter: "Facial" },
  { icon: "♡", name: "Tanda Penuaan", filter: "Anti Aging" },
  { icon: "❋", name: "Kulit Sensitif", filter: "Facial" },
];

const testimonials = [
  {
    quote: "Pelayanannya ramah dan informasinya disampaikan dengan jelas.",
    name: "Rina",
    age: "28 tahun",
  },
  {
    quote: "Tempatnya nyaman, bersih, dan stafnya membantu selama perawatan.",
    name: "Dinda",
    age: "32 tahun",
  },
  {
    quote: "Saya merasa lebih nyaman setelah berkonsultasi mengenai perawatan kulit.",
    name: "Siti",
    age: "26 tahun",
  },
];

function SectionHeading({ eyebrow, title, desc }: { eyebrow?: string; title: string; desc?: string }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [productFilter, setProductFilter] = useState("Semua");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredTreatments = useMemo(() => {
    return treatments.filter((item) => {
      const categoryMatch = activeFilter === "Semua" || item.category === activeFilter;
      const queryMatch = item.name.toLowerCase().includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [activeFilter, query]);

  const filteredProducts = products.filter((item) => productFilter === "Semua" || item.category === productFilter);

  const visibleTreatments = showAll ? filteredTreatments : filteredTreatments.slice(0, 6);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span>✦ Perawatan kulit dimulai dengan konsultasi yang tepat</span>
        <a href={waLink("Halo Belle Aesthetic, saya ingin konsultasi.")}>Konsultasi via WhatsApp ↗</a>
      </div>

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">❀</span>
          <span>
            <strong>Belle</strong>
            <small>AESTHETIC CLINIC</small>
          </span>
        </a>

        <button className="menu-toggle" aria-label="Buka menu navigasi" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Beranda", "#home"],
            ["Treatment", "#treatment"],
            ["Skincare", "#skincare"],
            ["Tentang Kami", "#about"],
            ["Hasil", "#results"],
            ["Blog", "#tips"],
            ["Kontak", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="button button-primary nav-cta" href={waLink("Halo Belle Aesthetic, saya ingin membuat janji konsultasi.")}>
            ◉ Konsultasi Sekarang
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="pill">Klinik Kecantikan & Perawatan Kulit</span>
          <h1>
            Rawat Kulitmu
            <br />
            Secara Menyeluruh
          </h1>
          <p>Treatment profesional dan skincare untuk mendukung perawatan kulitmu, di klinik maupun di rumah. Mulai perjalanan kulit sehat bersama Belle Aesthetic Clinic.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={waLink("Halo Belle Aesthetic, saya ingin konsultasi kulit.")}>
              ◉ Konsultasi Sekarang
            </a>
            <a className="button button-outline" href="#treatment">
              Lihat Treatment →
            </a>
          </div>

          <div className="hero-points">
            <span>♧ Tenaga profesional</span>
            <span>♧ Produk skincare</span>
            <span>✧ Perawatan personal</span>
            <span>♡ Klinik nyaman</span>
          </div>
        </div>

        <div className="hero-visual">
          <img className="hero-image" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1100&q=90" alt="Ilustrasi perawatan kecantikan" />
          <div className="hero-note">
            <span className="note-icon">✧</span>
            <div>
              <strong>Skin care, made personal</strong>
              <small>Perawatan sesuai kebutuhan kulit</small>
            </div>
          </div>
          <span className="hero-decoration decoration-one">✳</span>
          <span className="hero-decoration decoration-two">✧</span>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <span>♧</span>
          <p>
            <strong>Profesional</strong>
            <small>Perawatan terarah</small>
          </p>
        </div>
        <div>
          <span>✧</span>
          <p>
            <strong>Personal</strong>
            <small>Sesuai kebutuhan</small>
          </p>
        </div>
        <div>
          <span>♡</span>
          <p>
            <strong>Homecare</strong>
            <small>Rutinitas berkelanjutan</small>
          </p>
        </div>
        <div>
          <span>◇</span>
          <p>
            <strong>Konsultasi</strong>
            <small>Kenali kebutuhan kulit</small>
          </p>
        </div>
      </section>

      <section className="concern-section section-wrap">
        <div className="concern-intro">
          <span className="eyebrow">MULAI DARI KEBUTUHANMU</span>
          <h2>Apa masalah kulit yang ingin kamu rawat?</h2>
          <p>Pilih kategori untuk melihat pilihan treatment yang bisa kamu konsultasikan.</p>
          <a className="text-link" href="#treatment">
            Jelajahi treatment →
          </a>
        </div>
        <div className="concern-grid">
          {concerns.map((item) => (
            <button
              className="concern-item"
              key={item.name}
              onClick={() => {
                setActiveFilter(item.filter);
                document.getElementById("treatment")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="concern-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-wrap" id="treatment">
        <SectionHeading eyebrow="TREATMENT UNGGULAN" title="Temukan Treatment yang Sesuai" desc="Jelajahi pilihan perawatan dan konsultasikan yang paling sesuai dengan kondisi kulitmu." />

        <div className="catalog-tools">
          <div className="filter-list">
            {["Semua", "Acne", "Brightening", "Facial", "Anti Aging", "Laser"].map((filter) => (
              <button
                key={filter}
                className={activeFilter === filter ? "filter-chip active" : "filter-chip"}
                onClick={() => {
                  setActiveFilter(filter);
                  setShowAll(false);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cari treatment..." aria-label="Cari treatment" />
        </div>

        <div className="treatment-grid">
          {visibleTreatments.map((item) => (
            <article className="treatment-card" key={item.id}>
              <a className="image-link" href={waLink(`Halo Belle Aesthetic, saya ingin bertanya tentang ${item.name}.`)} aria-label={`Tanyakan ${item.name}`}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="image-arrow">↗</span>
              </a>
              <div className="card-body">
                <span className="card-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="card-bottom">
                  <span className="price">{item.price}*</span>
                  <a className="round-arrow" href={waLink(`Halo Belle Aesthetic, saya ingin konsultasi tentang ${item.name}.`)} aria-label={`Konsultasi ${item.name}`}>
                    →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleTreatments.length === 0 && <p className="empty-state">Treatment tidak ditemukan. Coba kata kunci lain.</p>}

        {filteredTreatments.length > 6 && (
          <div className="center-action">
            <button className="button button-outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Tampilkan lebih sedikit" : "Lihat semua treatment"}
            </button>
          </div>
        )}
        <p className="disclaimer">*Harga dan ketersediaan di atas adalah contoh untuk desain. Konfirmasikan kepada klinik sebelum dipublikasikan.</p>
      </section>

      <section className="homecare-section section-wrap" id="skincare">
        <div className="homecare-banner">
          <div className="homecare-photo">
            <img src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85" alt="Produk perawatan kulit" loading="lazy" />
          </div>
          <div className="homecare-copy">
            <span className="eyebrow">SKINCARE & HOMECARE</span>
            <h2>Perawatan berlanjut setelah treatment</h2>
            <p>Kenali produk perawatan kulit untuk rutinitas di rumah. Pilih produk dan tanyakan cara penggunaan kepada tim klinik.</p>
            <a className="button button-primary" href="#products">
              Lihat Produk →
            </a>
          </div>
        </div>

        <div className="products-area" id="products">
          <div className="products-heading">
            <div>
              <span className="eyebrow">PILIHAN HOMECARE</span>
              <h2>Produk Skincare</h2>
            </div>
            <a className="text-link" href="#contact">
              Tanya produk →
            </a>
          </div>

          <div className="filter-list product-filters">
            {["Semua", "Cleanser", "Serum", "Moisturizer", "Sunscreen"].map((filter) => (
              <button className={productFilter === filter ? "filter-chip active" : "filter-chip"} key={filter} onClick={() => setProductFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((item) => (
              <article className="product-card" key={item.id}>
                <a href={waLink(`Halo Belle Aesthetic, saya ingin bertanya tentang produk ${item.name}.`)} className="product-image" aria-label={`Tanyakan produk ${item.name}`}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="product-plus">+</span>
                </a>
                <div className="product-info">
                  <small>{item.category}</small>
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}*</span>
                  <a href={waLink(`Halo, apakah produk ${item.name} tersedia?`)} className="product-link">
                    Tanya produk →
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer">*Nama, foto, harga, dan ketersediaan produk masih berupa data contoh.</p>
        </div>
      </section>

      <section className="process-section section-wrap">
        <SectionHeading eyebrow="PERJALANAN PERAWATANMU" title="Dari konsultasi hingga homecare" desc="Pendekatan yang terarah untuk membantu kamu memahami pilihan perawatan." />
        <div className="process-grid">
          {[
            ["01", "Konsultasi", "Ceritakan kebutuhan dan rutinitas perawatan kulitmu."],
            ["02", "Treatment", "Diskusikan pilihan treatment dengan tenaga klinik."],
            ["03", "Rekomendasi", "Tanyakan produk dan perawatan lanjutan yang sesuai."],
            ["04", "Homecare", "Jalankan rutinitas di rumah sesuai arahan profesional."],
          ].map(([number, title, desc]) => (
            <article className="process-card" key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="benefits-section section-wrap">
        <div className="benefits-copy">
          <span className="eyebrow">BELLE AESTHETIC CLINIC</span>
          <h2>Perawatan yang berfokus pada kebutuhan kulitmu</h2>
          <p>Kenali pilihan perawatan di klinik dan rutinitas homecare yang dapat kamu diskusikan bersama tim kami.</p>
          <a className="button button-outline" href="#about">
            Kenali Belle →
          </a>
        </div>
        <div className="benefit-grid">
          {[
            ["♧", "Konsultasi", "Diskusi tentang kebutuhan kulit"],
            ["✧", "Personalized", "Pilihan sesuai hasil konsultasi"],
            ["◇", "Homecare", "Dukungan rutinitas di rumah"],
            ["♡", "Pelayanan", "Pendampingan yang ramah"],
          ].map(([icon, title, desc]) => (
            <article className="benefit-item" key={title}>
              <span className="benefit-icon">{icon}</span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="results-section section-wrap" id="results">
        <SectionHeading eyebrow="GALERI PERAWATAN" title="Perjalanan kulit setiap orang berbeda" desc="Galeri hasil perawatan dapat ditampilkan menggunakan dokumentasi asli yang telah mendapat izin." />
        <div className="results-grid">
          {[
            ["Acne Care", "photo-1556229010-6c3f2c9ca5f8"],
            ["Skin Rejuvenation", "photo-1616394584738-fc6e612e71b9"],
            ["Brightening Care", "photo-1570172619644-dfd03ed5d881"],
          ].map(([title, image]) => (
            <article className="result-card" key={title}>
              <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=85`} alt={`Ilustrasi ${title}`} loading="lazy" />
              <div>
                <span>GALERI KLINIK</span>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
        <p className="disclaimer">Foto di sini adalah ilustrasi, bukan bukti hasil treatment atau foto before-after pasien.</p>
      </section>

      <section className="testimonial-section section-wrap">
        <SectionHeading eyebrow="CERITA PELANGGAN" title="Pengalaman yang berarti" desc="Gunakan ulasan asli pelanggan yang telah mendapat izin untuk ditampilkan." />
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars" aria-label="Contoh tampilan rating">
                ★★★★★
              </div>
              <p>“{item.quote}”</p>
              <div className="testimonial-person">
                <span className="avatar">{item.name[0]}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.age} · Contoh testimonial</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="promo-section section-wrap">
        <div className="promo-copy">
          <span className="eyebrow">SPECIAL OFFER</span>
          <h2>Mulai perjalanan skin care-mu</h2>
          <p>Tanyakan informasi treatment, paket perawatan, dan promo yang sedang tersedia.</p>
          <a className="button button-white" href={waLink("Halo Belle Aesthetic, saya ingin mengetahui promo treatment terbaru.")}>
            Tanya Promo →
          </a>
        </div>
        <div className="promo-stamp">
          SPECIAL
          <br />
          <strong>OFFER</strong>
          <br />✨
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85" alt="Ilustrasi interior klinik kecantikan" loading="lazy" />
        </div>
        <div className="about-copy">
          <span className="eyebrow">TENTANG KAMI</span>
          <h2>Kenali Belle Aesthetic Clinic</h2>
          <p>Belle Aesthetic Clinic hadir untuk membantu pelanggan mengenali pilihan perawatan kulit dan homecare. Lengkapi bagian ini dengan sejarah, visi, nilai, serta keunggulan resmi klinik.</p>
          <a className="text-link" href="#contact">
            Hubungi tim kami →
          </a>
        </div>
        <div className="team-card">
          <span className="eyebrow">TIM KLINIK</span>
          <div className="team-placeholder">BA</div>
          <h3>Tim Belle Aesthetic</h3>
          <p>Informasi dokter dan tenaga profesional akan ditambahkan setelah dikonfirmasi.</p>
        </div>
      </section>

      <section className="location-section section-wrap" id="contact">
        <div>
          <span className="eyebrow">KUNJUNGI KAMI</span>
          <h2>Mulai dengan konsultasi</h2>
          <p>Hubungi klinik untuk konfirmasi alamat, jam operasional, ketersediaan treatment, dan jadwal kunjungan.</p>
          <a className="button button-primary" href={waLink("Halo Belle Aesthetic, saya ingin menanyakan lokasi dan jam operasional klinik.")}>
            ◉ Hubungi via WhatsApp
          </a>
        </div>
        <div className="location-card">
          <span className="location-icon">⌖</span>
          <h3>Belle Aesthetic Clinic</h3>
          <p>Alamat resmi klinik akan ditambahkan setelah dikonfirmasi.</p>
          <a className="text-link" href={waLink("Halo, mohon kirimkan lokasi Google Maps Belle Aesthetic Clinic.")}>
            Minta lokasi klinik →
          </a>
        </div>
      </section>

      <section className="final-cta">
        <div>
          <span className="final-icon">♡</span>
          <div>
            <h2>Siap memulai perawatan kulitmu?</h2>
            <p>Konsultasikan kebutuhanmu bersama tim Belle Aesthetic Clinic.</p>
          </div>
        </div>
        <a className="button button-primary" href={waLink("Halo Belle Aesthetic, saya ingin mulai konsultasi perawatan kulit.")}>
          Konsultasi Sekarang →
        </a>
      </section>

      <footer className="footer" id="tips">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home">
              <span className="brand-mark">❀</span>
              <span>
                <strong>Belle</strong>
                <small>AESTHETIC CLINIC</small>
              </span>
            </a>
            <p>Perjalanan perawatan kulitmu dimulai di sini.</p>
          </div>
          <div>
            <h3>Navigasi</h3>
            <a href="#home">Beranda</a>
            <a href="#treatment">Treatment</a>
            <a href="#skincare">Skincare</a>
            <a href="#about">Tentang Kami</a>
          </div>
          <div>
            <h3>Bantuan</h3>
            <a href="#contact">Kontak</a>
            <a href="#results">Galeri</a>
            <a href={waLink("Halo Belle Aesthetic, saya ingin bertanya.")}>Konsultasi</a>
          </div>
          <div>
            <h3>Hubungi Kami</h3>
            <p>WhatsApp: 0823-2223-7040*</p>
            <p>Instagram: akun resmi klinik*</p>
            <a href={waLink("Halo Belle Aesthetic, saya ingin bertanya.")}>Kirim pesan →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Belle Aesthetic Clinic</span>
          <span>Informasi layanan mengikuti konfirmasi resmi klinik.</span>
        </div>
      </footer>

      <a className="floating-whatsapp" href={waLink("Halo Belle Aesthetic, saya ingin konsultasi.")} aria-label="Konsultasi melalui WhatsApp">
        ◉
      </a>

      <div className="mobile-cta">
        <a href="#treatment" className="mobile-cta-secondary">
          Lihat Treatment
        </a>
        <a href={waLink("Halo Belle Aesthetic, saya ingin konsultasi.")} className="mobile-cta-primary">
          ◉ Konsultasi
        </a>
      </div>
    </main>
  );
}
