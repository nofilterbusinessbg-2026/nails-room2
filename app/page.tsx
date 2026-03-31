export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-light tracking-widest">NAILS ROOM</span>
          <div className="hidden md:flex gap-8 text-sm text-white/60">
            <a href="#about" className="hover:text-white transition-colors">За Румяна</a>
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-white transition-colors">Галерия</a>
            <a href="/booking" className="hover:text-white transition-colors">Запази час</a>
          </div>
          <a href="/booking" className="bg-white text-black px-5 py-2 text-sm hover:bg-white/90 transition-colors">
            Запази час
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-white/40 text-sm tracking-widest mb-4">БУРГАС · МАНИКЮР & НОКТИ</p>
          <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Красотата е в <em className="text-white/60 not-italic">детайлите</em>
          </h1>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Добре дошли в Nails Room — студио за маникюр с уютна атмосфера, 
            внимание към всеки детайл и любов към занаята.
          </p>
          <div className="flex gap-4">
            <a href="/booking" className="bg-white text-black px-8 py-3 hover:bg-white/90 transition-colors">
              Запази час
            </a>
            <a href="#services" className="border border-white/20 px-8 py-3 hover:border-white/40 transition-colors">
              Нашите услуги
            </a>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/40 text-sm tracking-widest mb-12">УСЛУГИ</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Класически маникюр', price: 'от 35 лв', desc: 'Оформяне, лак, грижа за ноктите' },
              { name: 'Гел маникюр', price: 'от 50 лв', desc: 'Трайно покритие до 3-4 седмици' },
              { name: 'Педикюр', price: 'от 45 лв', desc: 'Пълна грижа за краката' },
              { name: 'Гел с декорации', price: 'от 60 лв', desc: 'Уникален дизайн по желание' },
              { name: 'Сваляне', price: 'от 15 лв', desc: 'Безопасно сваляне на гел' },
              { name: 'Детски маникюр', price: 'от 20 лв', desc: 'Нежна грижа за малките' },
            ].map((s) => (
              <div key={s.name} className="border border-white/10 p-6 hover:border-white/30 transition-colors">
                <h3 className="text-lg font-light mb-2">{s.name}</h3>
                <p className="text-white/40 text-sm mb-3">{s.desc}</p>
                <p className="text-white/70">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* За Румяна */}
      <section id="about" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white/40 text-sm tracking-widest mb-6">ЗА РУМЯНА</p>
            <h2 className="text-3xl font-light mb-6">Страст към красотата</h2>
            <p className="text-white/50 leading-relaxed mb-4">
              С години опит в маникюра, Румяна превърна студиото си в любимо място 
              за жените в Бургас. Всяка клиентка получава индивидуално внимание.
            </p>
            <p className="text-white/50 leading-relaxed">
              Работи само с висококачествени материали за здравето на вашите нокти.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 h-80 flex items-center justify-center">
            <p className="text-white/20 text-sm">Снимка на Румяна</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-light mb-6">Готова за нови нокти?</h2>
          <p className="text-white/40 mb-8">Запази час онлайн за 2 минути</p>
          <a href="/booking" className="bg-white text-black px-10 py-4 text-lg hover:bg-white/90 transition-colors inline-block">
            Запази час сега
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-white/30 text-sm">
          <span>© 2025 Nails Room · Бургас</span>
          <span>Направено с любов</span>
        </div>
      </footer>

    </main>
  )
}
