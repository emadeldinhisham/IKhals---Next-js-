export default function Footer() {

  return (

    <footer className="bg-black border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">

        {/* Logo + Description */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            الإخلاص للصناعات البلاستيكية
          </h3>

          <p className="text-gray-400 leading-relaxed">
            شركة رائدة في تصنيع الأكياس البلاستيكية عالية الجودة
            وفق أحدث المعايير العالمية.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6">روابط سريعة</h4>

          <ul className="space-y-3 text-gray-400">
            <li><a href="#top">الرئيسية</a></li>
            <li><a href="#products">المنتجات</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6">تواصل معنا</h4>

          <p className="text-gray-400 mb-3">
            📞 +20 10 0000 0000
          </p>

          <p className="text-gray-400 mb-6">
            ✉ info@ikhlas.com
          </p>

          <a
            href="https://wa.me/201000000000"
            className="bg-green-500 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition"
          >
            واتساب مباشر
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 border-t border-white/10 py-6 text-sm">
        © 2024 الإخلاص للصناعات البلاستيكية - جميع الحقوق محفوظة
      </div>

    </footer>

  );
}
