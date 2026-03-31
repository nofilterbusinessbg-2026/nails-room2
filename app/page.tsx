export default function Home() {
  const services = [
    { cat: 'МАНИКЮР', items: [
      { name: 'Маникюр без покритие', bgn: 25, eur: 13 },
      { name: 'Гел лак — къси нокти', bgn: 40, eur: 20 },
      { name: 'Гел лак — дълги нокти', bgn: 45, eur: 23 },
      { name: 'Гел + Гел лак — къси', bgn: 55, eur: 28 },
      { name: 'Гел + Гел лак — дълги', bgn: 60, eur: 31 },
    ]},
    { cat: 'НОКТОПЛАСТИКА', items: [
      { name: 'Изграждане с гел', bgn: 90, eur: 46 },
      { name: 'Изграждане вграден френски', bgn: 120, eur: 61 },
      { name: 'Изграждане счупен нокът', bgn: 5, eur: 3 },
      { name: 'Поправка счупен нокът', bgn: 3, eur: 2 },
    ]},
    { cat: 'ДЕКОРАЦИЯ', items: [
      { name: 'Френски маникюр', bgn: 5, eur: 3 },
      { name: 'Камъчета, стикери', bgn: 5, eur: 3 },
    ]},
    { cat: 'ТЕРАПИИ', items: [
      { name: 'Парафинова терапия', bgn: 20, eur: 10 },
      { name: 'IBX терапия', bgn: 25, eur: 13 },
    ]},
  ]

  return (
    <main style={{ fontFamily: '"Playfair Display", Georgia, serif', background: '#FAF6F0', color: '#2C2416', minHeight: '100vh', margin: 0 }}>

      {/* Навигация */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(250,246,240,0.97)', borderBottom: '1px solid #D4C4A0', backdropFilter: 'blur(8px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', height: '68px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.3rem', letterSpacing: '0.12em', color: '#2C2416', fontWeight: 400 }}>Nails Room</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#8B7355', marginTop: '1px', fontFamily: 'sans-serif' }}>БУРГАС</div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.72rem', letterSpacing: '0.12em', color: '#5C4A2A', fontFamily: 'sans-serif' }}>
            {['#about', '#services', '#gallery', '#contact'].map((href, i) => (
              <a key={href} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {['ЗА НАС', 'УСЛУГИ', 'ГАЛЕРИЯ', 'КОНТАКТИ'][i]}
              </a>
            ))}
          </div>
          <a href="#booking" style={{ background: '#2C6B6B', color: '#FAF6F0', padding: '0.55rem 1.4rem', fontSize: '0.72rem', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'sans-serif' }}>
            ЗАПАЗИ ЧАС
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: '68px', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', overflow: 'hidden' }}>
        <div style={{ padding: '8rem 3rem 4rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#8B7355', marginBottom: '1.5rem', fontFamily: 'sans-serif' }}>СТУДИО ЗА МАНИКЮР · БУРГАС</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 400, lineHeight: 1.15, marginBottom: '1.5rem', color: '#2C2416' }}>
            Красотата е в<br /><em style={{ color: '#2C6B6B', fontStyle: 'italic' }}>детайлите</em>
          </h1>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#5C4A2A', marginBottom: '2.5rem', maxWidth: '440px', fontFamily: 'sans-serif' }}>
            Добре дошли в Nails Room — студио за маникюр с уютна атмосфера, внимание към всеки детайл и любов към занаята.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#booking" style={{ background: '#2C6B6B', color: '#FAF6F0', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'sans-serif' }}>
              ЗАПАЗИ ЧАС
            </a>
            <a href="#services" style={{ border: '1px solid #C4A870', color: '#5C4A2A', padding: '0.85rem 2rem', fontSize: '0.78rem', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'sans-serif' }}>
              ЦЕНОРАЗПИС
            </a>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/images/1.jpg" alt="Nails Room маникюр" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(44,36,22,0.15)' }} />
        </div>
      </section>

      {/* За Румяна */}
      <section id="about" style={{ background: '#F2EAD8', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <img src="/images/rumyana.jpg" alt="Румяна — Nails Room" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-1rem', right: '-1rem', width: '60%', aspectRatio: '1', border: '3px solid #C4A870', zIndex: 0, pointerEvents: 'none' }} />
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#8B7355', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>ЗА РУМЯНА</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '1.5rem', color: '#2C2416' }}>Страст към красотата</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#5C4A2A', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
              Румяна работи <strong>сама в студиото</strong> — това е нейният избор. Всяка клиентка получава пълното й внимание, без прекъсване и без бързане.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#5C4A2A', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
              Използва само <strong>висококачествени гел лакове, бази и еднократни пили</strong>. Хигиената е на най-високо ниво — всеки инструмент е стерилизиран или еднократен.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: '#5C4A2A', fontFamily: 'sans-serif' }}>
              При Румяна ще намерите спокойствие, внимание към всеки детайл и резултат, който говори сам за себе си.
            </p>
          </div>
        </div>
      </section>

      {/* Галерия */}
      <section id="gallery" style={{ padding: '6rem 1.5rem', background: '#FAF6F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#8B7355', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>НАШАТА РАБОТА</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '3rem', color: '#2C2416' }}>Галерия</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            <img src="/images/1.jpg" alt="маникюр" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            <img src="/images/5.jpg" alt="маникюр" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            <img src="/images/7.jpg" alt="маникюр" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
            <img src="/images/salon.jpg" alt="салон" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', gridColumn: 'span 2' }} />
            <img src="/images/rumyana.jpg" alt="Румяна" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Ценоразпис */}
      <section id="services" style={{ background: '#F2EAD8', padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#8B7355', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>ЦЕНОРАЗПИС 2025</p>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '3rem', color: '#2C2416' }}>Услуги и цени</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {services.map(({ cat, items }) => (
              <div key={cat} style={{ background: '#FAF6F0', border: '1px solid #D4C4A0', padding: '2rem' }}>
                <h3 style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#8B7355', marginBottom: '1.25rem', fontFamily: 'sans-serif', borderBottom: '1px solid #D4C4A0', paddingBottom: '0.75rem' }}>{cat}</h3>
                {items.map(({ name, bgn, eur }) => (
                  <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#2C2416', fontFamily: 'sans-serif' }}>{name}</span>
                    <span style={{ fontSize: '0.9rem', color: '#2C6B6B', fontFamily: 'sans-serif', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '1rem' }}>{bgn} лв / {eur} €</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Запази час */}
      <section id="booking" style={{ padding: '6rem 1.5rem', background: '#2C6B6B', color: '#FAF6F0', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#9FD0C8', marginBottom: '1rem', fontFamily: 'sans-serif' }}>ОНЛАЙН РЕЗЕРВАЦИЯ</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem' }}>Запази час</h2>
          <p style={{ color: '#C8E8E4', marginBottom: '2.5rem', lineHeight: 1.8, fontFamily: 'sans-serif' }}>Лесно, бързо, без телефон. Системата работи 24/7.</p>
          <a href="tel:+359894714546" style={{ display: 'inline-block', background: '#C4A870', color: '#2C2416', padding: '1rem 2.5rem', fontSize: '0.85rem', letterSpacing: '0.1em', textDecoration: 'none', fontFamily: 'sans-serif', marginBottom: '1rem' }}>
            📞 0894 714 546
          </a>
          <p style={{ color: '#9FD0C8', fontSize: '0.8rem', fontFamily: 'sans-serif' }}>или пиши ни във Facebook</p>
          <a href="https://www.facebook.com/Ruminailsroom" target="_blank" style={{ color: '#C4A870', fontSize: '0.85rem', fontFamily: 'sans-serif', marginTop: '0.5rem', display: 'inline-block' }}>
            facebook.com/Ruminailsroom
          </a>
        </div>
      </section>

      {/* Контакти + Карта */}
      <section id="contact" style={{ padding: '6rem 1.5rem', background: '#FAF6F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#8B7355', marginBottom: '0.75rem', fontFamily: 'sans-serif' }}>КОНТАКТИ</p>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 400, marginBottom: '2rem', color: '#2C2416' }}>Намерете ни</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <div>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#2C2416', marginBottom: '0.25rem', fontWeight: 600 }}>Адрес</p>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#5C4A2A', lineHeight: 1.6 }}>ул. „Цар Калоян" 63<br />гр. Бургас</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <div>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#2C2416', marginBottom: '0.25rem', fontWeight: 600 }}>Телефон</p>
                  <a href="tel:+359894714546" style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#2C6B6B', textDecoration: 'none' }}>+359 894 714 546</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.2rem' }}>📘</span>
                <div>
                  <p style={{ fontFamily: 'sans-serif', fontSize: '0.9rem', color: '#2C2416', marginBottom: '0.25rem', fontWeight: 600 }}>Facebook</p>
                  <a href="https://www.facebook.com/Ruminailsroom" target="_blank" style={{ fontFamily: 'sans-serif', fontSize: '0.85rem', color: '#2C6B6B', textDecoration: 'none' }}>Ruminailsroom</a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.1!2d27.4626!3d42.4977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a694bcf30da035%3A0x9b8e6f33eda9b74f!2z0KbQsNGAINCa0LDQu9C-0Y_QvSAxLCDQkdGD0YDQs9Cw0YE!5e0!3m2!1sbg!2sbg!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #D4C4A0', padding: '2rem 1.5rem', background: '#2C2416', textAlign: 'center' }}>
        <p style={{ fontSize: '0.75rem', color: '#8B7355', letterSpacing: '0.1em', fontFamily: 'sans-serif' }}>
          © 2025 NAILS ROOM · УЛ. „ЦАР КАЛОЯН" 63, БУРГАС · +359 894 714 546
        </p>
      </footer>

    </main>
  )
}
