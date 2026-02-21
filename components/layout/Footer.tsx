export default function Footer() {

  return (

    <footer className="relative section-soft text-[var(--text-main)] overflow-hidden">

      {/* Industrial subtle grid */}

      <div className="absolute inset-0 opacity-10
      bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
      bg-[size:80px_80px]" />

      <div className="relative z-10 border-t border-[rgba(15,23,42,0.08)]">

        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-16">

          {/* Logo + Description */}
          <div>
            <h3 className="text-2xl font-black mb-6 tracking-tight">
              الإخلاص للصناعات البلاستيكية
            </h3>

            <p className="text-[var(--text-soft)] leading-relaxed max-w-sm">
              شركة رائدة في تصنيع الأكياس البلاستيكية عالية الجودة
              وفق أحدث المعايير العالمية وبطاقة إنتاجية متطورة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-8 text-lg">
              روابط سريعة
            </h4>

            <ul className="space-y-4 text-[var(--text-soft)]">

              {[
                { label:"الرئيسية", link:"#top" },
                { label:"المنتجات", link:"#products" },
                { label:"من نحن", link:"#about" },
                { label:"تواصل معنا", link:"#contact" }
              ].map((item,i)=>(
                <li key={i}>
                  <a
                    href={item.link}
                    className="hover:text-[var(--accent-blue)]
                    transition duration-300 relative
                    after:absolute after:left-0 after:bottom-[-4px]
                    after:h-[2px] after:w-0
                    after:bg-[var(--accent-gold)]
                    after:transition-all after:duration-300
                    hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-8 text-lg">
              تواصل معنا
            </h4>

            <div className="space-y-4 text-[var(--text-soft)]">

              <p>
                📞 +20 10 0000 0000
              </p>

              <p>
                ✉ info@ikhlas.com
              </p>

            </div>

            <a
              href="https://wa.me/201000000000"
              className="mt-8 inline-block
              bg-green-500 hover:bg-green-600
              px-8 py-4 rounded-xl font-bold
              shadow-md hover:shadow-lg
              transition duration-300"
            >
              واتساب مباشر
            </a>

          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-[rgba(15,23,42,0.08)] py-8 text-center text-sm text-[var(--text-soft)]">
          © 2024 الإخلاص للصناعات البلاستيكية - جميع الحقوق محفوظة
        </div>

      </div>

    </footer>

  );
}