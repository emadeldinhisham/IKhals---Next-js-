export const translations = {

  ar: {

    /* ================= HERO ================= */
    hero: {
      badge: "الريادة في صناعة البلاستيك ✨",
      title: "الإخلاص",
      subtitle: "للصناعات البلاستيكية",
      desc: "في شركة الإخلاص، نفخر بإنتاج أجود أنواع الأكياس التي تتميز بالمتانة والقابلية لإعادة التدوير في صناعة اللدائن. تُصنع أكياسنا من مواد بوليمرية عالية الجودة، مما يجعلها قادرة على تحمل مختلف الظروف البيئية، فضلاً عن إمكانية إعادة استخدامها أو تدويرها بعد",
      cta1: "اكتشف منتجاتنا",
      cta2: "تواصل معنا",
    },

    /* ================= NAVBAR ================= */
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      products: "المنتجات",
      certificates: "الاعتمادات",
      contact: "تواصل معنا",
      quote: "طلب عرض سعر",
    },

    /* ================= ABOUT ================= */
    about: {
      title: "الإخلاص للصناعات البلاستيكية",
      paragraphs: [
        "في شركة الإخلاص للصناعات البلاستيكية، نفخر بإنتاج مجموعة من أجود الأكياس الصناعية المتينة والقابلة لإعادة التدوير.",
        "منتجاتنا مصنوعة من مواد بوليمر عالية الجودة قادرة على تحمل أقسى الظروف البيئية.",
      ],
      valuesTitle: "قيمنا",
      valuesText: "تُعد شركة الاخلاص رائداً معترفاً به في مجالي الابتكار والجودة، حيث نقدم حلولاً بلاستيكية شاملة ومخصصة تم تصميمها بدقة لتلبي الاحتياجات المحددة لصناعتكم. نحن ملتزمون بأن نكون شريككم المفضل عبر تقديم قيمة استثنائية تفوق التوقعات.",
      whyTitle: "لماذا تختار الإخلاص؟",
      whyText: "على الرغم من التقلبات التي شهدها الطلب على أجولة المنسوجات، استجابت شركتنا بشكل استباقي لهذا التحدي من خلال الانتقال من الأنوال المسطحة (Flat looms) إلى الأنوال الدائرية (Circular looms) الأكثر إنتاجية.",
      historyTitle: "تاريخنا الصناعي",
      historyText: "كان تركيز شركتنا في البداية منصباً بالكامل على السوق المحلي لأكياس المنسوجات البلاستيكية (PP woven bags). وبعد عدة سنوات من البحث والتطوير الدؤوب، نجحنا في امتلاك التكنولوجيا الأساسية اللازمة لتصنيع أكياس المنسوجات المعقدة.",
    },

    /* ================= IMPACT ================= */
    impact: {
      title: "قدراتنا الصناعية",
      production: "طن إنتاج سنوياً",
      export: "دولة تصدير",
      sectors: "قطاع صناعي نخدمه",
    },

    /* ================= PRODUCTS ================= */
    products: {
      title: "منتجاتنا",
      details: "التفاصيل",
      items: [
        {
          id: "woven-rolls",
          title: "رولات منسوجة",
          image: "/img/rolls.jpg",
          children: [
            {
              id: "plain-roll",
              title: "رول سادة",
              image: "/img/plain-roll.png",
              features: [
                "نسيج بولي بروبلين نقي",
                "مقاومة عالية للشد والضغط",
                "مناسب للتصنيع والتغليف الصناعي",
                "خفيف الوزن ومتين",
              ],
              specs: [
                "عرض: 20 - 200 سم",
                "وزن: 50 - 120 جم/م²",
                "ألوان متعددة حسب الطلب",
              ],
            },
            {
              id: "laminated-roll",
              title: "رول مطلي",
              image: "/img/laminated-roll.png",
              features: [
                "طبقة BOPP أو PE للحماية الفائقة",
                "مقاومة ممتازة للرطوبة والماء",
                "مظهر لامع واحترافي",
                "مناسب للطباعة عالية الجودة",
              ],
              specs: [
                "سماكة الطلاء: 15 - 25 ميكرون",
                "عرض: 20 - 200 سم",
                "سطح جاهز للطباعة",
              ],
            },
            {
              id: "printed-roll",
              title: "رول مطبوع",
              image: "/img/printed-roll.png",
              features: [
                "طبقات متعددة مدمجة معاً",
                "قوة تحمل فائقة للأحمال الثقيلة",
                "حماية ممتازة من العوامل الخارجية",
                "مناسب للتطبيقات الصناعية الثقيلة",
              ],
              specs: [
                "عدد الطبقات: 2 - 4 طبقات",
                "عرض: 20 - 200 سم",
                "وزن: 80 - 200 جم/م²",
              ],
            },
          ],
        },
        {
          id: "woven-bags",
          title: "أكياس منسوجة",
          image: "/img/woven.jpg",
          children: [
            {
              id: "bopp-laminated",
              title: "أكياس BOPP & Laminated",
              image: "/img/bopp.jpg",
              features: [
                "طباعة عالية الجودة بألوان زاهية",
                "طبقة BOPP أو Laminated للحماية المزدوجة",
                "مقاومة للرطوبة والشحوب",
                "تصميم مخصص حسب الطلب",
              ],
              specs: [
                "حتى 8 ألوان طباعة",
                "أحجام متعددة حسب الطلب",
                "طبقة حماية مزدوجة",
              ],
            },
            {
              id: "plain-bags",
              title: "أكياس سادة",
              image: "/img/woven.jpg",
              features: [
                "نسيج بولي بروبلين نقي عالي الجودة",
                "متانة عالية مع خفة الوزن",
                "مناسبة للاستخدام الصناعي والزراعي",
                "قابلة لإعادة الاستخدام والتدوير",
              ],
              specs: [
                "أحجام متعددة حسب الطلب",
                "ألوان: أبيض، أخضر، وألوان أخرى",
                "سعة: 5 - 100 كجم",
              ],
            },
            {
              id: "printed-bags",
              title: "أكياس مطبوعة",
              image: "/img/printed.jpg",
              features: [
                "طباعة احترافية متعددة الألوان",
                "تصميم مخصص بشعار الشركة",
                "جودة طباعة ثابتة لا تتلاشى",
                "طباعة على الوجهين",
              ],
              specs: [
                "حتى 6 ألوان طباعة",
                "أحجام متعددة حسب الطلب",
                "طباعة على الوجهين",
              ],
            },
          ],
        },
      ],
    },

    /* ================= TESTIMONIALS ================= */
    testimonials: {
      badge: "آراء العملاء",
      title: "شركاؤنا يثقون بنا",
      items: [
        { quote: "خبرة واضحة في التصدير وحلول تعبئة ذكية.", name: "مجموعة الخليج", role: "تصدير" },
        { quote: "منتجات قوية ودعم فني ممتاز.", name: "مصانع الشرق", role: "قطاع صناعي" },
      ],
    },

    /* ================= FOOTER ================= */
    footer: {
      description: "نقدم حلول تعبئة صناعية مبتكرة بجودة عالمية.",
      quickLinks: "روابط سريعة",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة © الإخلاص للصناعات البلاستيكية",
    },

    /* ================= CAPABILITIES ================= */
    capabilities: {
      title: "قدراتنا الصناعية",
      items: [
        { title: "+12", desc: "خبرة في السوق" },
        { title: "تصدير عالمي", desc: "نخدم عملاء في عدة دول حول العالم." },
        { title: "قدرة إنتاج عالية", desc: "طاقة إنتاجية ضخمة لتلبية الطلبات الكبيرة." },
        { title: "تقنيات تصنيع متقدمة", desc: "استخدام أحدث خطوط الإنتاج الأوروبية." },
      ],
    },

    /* ================= SERVICES ================= */
    services: {
      title: "خدمات الشركة",
      desc: "جودة منتجاتنا ونهجنا الاحترافي في خدمة عملائنا هو ما ساهم في وصولنا إلى مستويات متقدمة في الصناعة والتصدير.",
      items: [
        { title: "فريق البحث والتطوير", text: "نعتمد على تحليل الأسواق العالمية ودراسة اتجاهات صناعة الأكياس لضمان تطوير منتجات مبتكرة تلبي احتياجات العملاء المتغيرة." },
        { title: "فريق المبيعات", text: "يمتلك فريقنا خبرة واسعة في الأسواق الدولية مما يمكننا من فهم متطلبات العملاء وتقديم حلول مخصصة باحترافية عالية." },
        { title: "فريق الإنتاج", text: "نعمل بتنسيق كامل بين فرق التصميم والإنتاج لضمان تنفيذ جميع المواصفات بدقة عالية قبل بدء عمليات التصنيع." },
        { title: "فريق مراقبة الجودة", text: "يقوم فريق الجودة بفحص المنتجات وفق معايير صارمة تشمل الجودة الطباعية، المقاسات، والمتطلبات الفنية لضمان أفضل النتائج." },
        { title: "الشحن والخدمات اللوجستية", text: "بفضل خبرتنا الصناعية وشراكاتنا العالمية نوفر حلول شحن فعالة ومرنة تضمن وصول المنتجات بأمان وفي الوقت المحدد." },
      ],
    },
  },

  /* ====================================================== */

  en: {

    /* ================= HERO ================= */
    hero: {
      badge: "Leading Plastic Industry ✨",
      title: "Al Ikhlas",
      subtitle: "For Plastic Industries",
      desc: "At Al-Ikhlas, we are proud to produce some of the finest, durable, and recyclable bags in the plastic industry. Our bags are made of high-quality polymer materials that can withstand various environmental conditions and can be reused or recycled after use.",
      cta1: "Explore Products",
      cta2: "Contact Us",
    },

    /* ================= NAVBAR ================= */
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      certificates: "Certificates",
      contact: "Contact",
      quote: "Request Quote",
    },

    /* ================= ABOUT ================= */
    about: {
      title: "Al Ikhlas For Plastic Industries",
      paragraphs: [
        "Founded in 2013, Al-Ikhlas for Plastic Industries has emerged as a leading manufacturer of Woven Polypropylene (PP) Bags and Rolls in the Middle East.",
        "We manufacture high-quality industrial bags designed for global standards and withstand the harshest environmental conditions.",
      ],
      valuesTitle: "Our Values",
      valuesText: "Al-Ikhlas, a recognized leader in innovation and quality, offers comprehensive and customized plastic solutions tailored to your specific industry needs. We are committed to becoming your preferred partner and delivering exceptional value that exceeds expectations.",
      whyTitle: "Why Choose Al Ikhlas?",
      whyText: "While the demand for woven sacks has experienced fluctuations, our company has proactively addressed this challenge by transitioning from flat looms to more productive circular looms. This strategic shift has significantly reduced our production costs.",
      historyTitle: "Industrial History",
      historyText: "Our company initially focused solely on the domestic PP woven bag market. After several years of dedicated research and development, we successfully acquired the core technology required to manufacture complex PP woven bags, including BOPP woven bags and valve PP woven bags.",
    },

    /* ================= IMPACT ================= */
    impact: {
      title: "Industrial Capabilities",
      production: "Tons Production / Year",
      export: "Export Countries",
      sectors: "Industries Served",
    },

    /* ================= PRODUCTS ================= */
    products: {
      title: "Our Products",
      details: "Details",
      items: [
        {
          id: "woven-rolls",
          title: "Woven Rolls",
          image: "/img/plain-roll.png",
          children: [
            {
              id: "plain-roll",
              title: "Plain Roll",
              image: "/img/rolls.jpg",
              features: [
                "Pure polypropylene fabric",
                "High tensile and pressure resistance",
                "Suitable for industrial manufacturing and packaging",
                "Lightweight and durable",
              ],
              specs: [
                "Width: 20 - 200 cm",
                "Weight: 50 - 120 g/m²",
                "Multiple colors on request",
              ],
            },
            {
              id: "laminated-roll-roll",
              title: "Laminated Roll",
              image: "/img/laminated-roll.png",
              features: [
                "BOPP or PE coating for superior protection",
                "Excellent moisture and water resistance",
                "Glossy professional finish",
                "Print-ready surface for high quality printing",
              ],
              specs: [
                "Coating thickness: 15 - 25 microns",
                "Width: 20 - 200 cm",
                "Print-ready surface",
              ],
            },
            {
              id: "printed-roll",
              title: "Printed Roll",
              image: "/img/printed-roll.png",
              features: [
                "Multiple integrated layers bonded together",
                "Superior load bearing strength for heavy loads",
                "Excellent protection from external elements",
                "Suitable for heavy industrial applications",
              ],
              specs: [
                "Number of layers: 2 - 4 layers",
                "Width: 20 - 200 cm",
                "Weight: 80 - 200 g/m²",
              ],
            },
          ],
        },
        {
          id: "woven-bags",
          title: "Woven Bags",
          image: "/img/woven.jpg",
          children: [
            {
              id: "bopp-laminated",
              title: "BOPP & Laminated Bags",
              image: "/img/bopp.jpg" ,
              features: [
                "High quality vibrant color printing",
                "BOPP or Laminated double protection layer",
                "Moisture and fade resistant",
                "Custom design on request",
              ],
              specs: [
                "Up to 8 print colors",
                "Multiple sizes on request",
                "Double protection layer",
              ],
            },
            {
              id: "plain-bags",
              title: "Plain Bags",
              image: "/img/woven.jpg",
              features: [
                "Pure high-quality polypropylene weave",
                "High durability with lightweight design",
                "Suitable for industrial and agricultural use",
                "Reusable and eco-friendly",
              ],
              specs: [
                "Custom sizes on request",
                "Colors: white, green, and more",
                "Capacity: 5 - 100 kg",
              ],
            },
            {
              id: "printed-bags",
              title: "Printed Bags",
              image: "/img/printed.jpg",
              features: [
                "Professional multi-color printing",
                "Custom design with company logo",
                "Permanent print quality that won't fade",
                "Double-sided printing available",
              ],
              specs: [
                "Up to 6 print colors",
                "Multiple sizes on request",
                "Double-sided printing",
              ],
            },
          ],
        },
      ],
    },

    /* ================= TESTIMONIALS ================= */
    testimonials: {
      badge: "Testimonials",
      title: "Trusted by Our Partners",
      items: [
        { quote: "Strong export experience and smart packaging solutions.", name: "Gulf Group", role: "Export" },
        { quote: "Strong products and excellent technical support.", name: "East Factories", role: "Industrial Sector" },
      ],
    },

    /* ================= FOOTER ================= */
    footer: {
      description: "Innovative industrial packaging solutions with global quality.",
      quickLinks: "Quick Links",
      contact: "Contact Us",
      rights: "All Rights Reserved © Al Ikhlas Plastic Industries",
    },

    /* ================= CAPABILITIES ================= */
    capabilities: {
      title: "Our Industrial Capabilities",
      items: [
        { title: "+12", desc: "Years of Market Experience" },
        { title: "Global Export", desc: "Serving customers in multiple countries around the world." },
        { title: "High Production Capacity", desc: "Massive production capacity to meet large-scale orders." },
        { title: "Advanced Manufacturing", desc: "Utilizing the latest European production lines." },
      ],
    },

    /* ================= SERVICES ================= */
    services: {
      title: "Company Services",
      desc: "It is the quality of our products and our professional approach to customer service that has helped us reach advanced levels in the industry and export markets.",
      items: [
        { title: "Research & Development Team", text: "We rely on global market analysis and bag industry trend studies to ensure the development of innovative products that meet our customers' evolving needs." },
        { title: "Sales Team", text: "Our team possesses extensive experience in international markets, enabling us to understand customer requirements and deliver customized solutions with the highest professionalism." },
        { title: "Production Team", text: "We work in full coordination between design and production teams to ensure all specifications are executed with high precision before manufacturing begins." },
        { title: "Quality Control Team", text: "Our QC team inspects products according to strict standards covering print quality, dimensions, and technical requirements to guarantee the best results." },
        { title: "Shipping & Logistics", text: "Thanks to our industry experience and global partnerships, we provide efficient and flexible shipping solutions that ensure products arrive safely and on time." },
      ],
    },
  },
};