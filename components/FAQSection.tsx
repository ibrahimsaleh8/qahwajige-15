"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "ما هي المناطق التي تقدمون فيها الخدمة؟",
    answer:
      "نغطي مدينة الرياض والمناطق القريبة، ويمكننا أيضًا ترتيب التوصيل لمناطق أخرى حسب الطلب المسبق.",
  },
  {
    question: "هل تشمل الخدمة أدوات تقديم القهوة؟",
    answer:
      "نعم، نوفر جميع أدوات الضيافة مثل الدلال، الفناجيل، والصواني لتقديم القهوة العربية بأسلوب فاخر يناسب مناسبتكم.",
  },
  {
    question: "كم عدد الصبابين الذي أحتاجه لمناسبتي؟",
    answer:
      "يعتمد العدد على حجم الحضور، عادةً ننصح بصباب واحد لكل 30 إلى 50 ضيف لضمان سرعة الخدمة وتغطية المكان بالكامل.",
  },
  {
    question: "ما هي طريقة حجز الخدمة؟",
    answer:
      "يمكنك الحجز عبر الاتصال بنا مباشرة أو من خلال الواتساب باستخدام الأزرار المخصصة على الموقع. ننصح بالحجز مسبقًا لضمان التوفر.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="flex items-center gap-4 justify-between my-4">
            <div className="w-full h-1 bg-linear-to-r from-main-color rounded-full via-main-color to-transparent"></div>
            <p className="inline-flex md:min-w-50 min-w-40 items-center justify-center text-main-color text-lg md:text-2xl font-semibold mb-4">
              الأسئلة الشائعة
            </p>
            <div className="w-full h-1 bg-linear-to-r from-transparent via-main-color to-main-color rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            إجابات على استفساراتكم
          </h2>
          <p className="text-low-color max-w-2xl mx-auto">
            لقد جمعنا لكم أكثر الأسئلة شيوعًا حول خدماتنا لمساعدتكم في اتخاذ
            القرار المناسب لمناسبتكم.
          </p>
        </div>

        <div className="mx-auto space-y-4 max-w-6xl">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-card-background rounded-xl shadow-sm border border-white/10 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-right bg-card-background hover:bg-card-background/90 transition-colors duration-200">
                <h3 className="font-bold text-lg text-white">
                  {item.question}
                </h3>
                <span
                  className={`transform transition-transform duration-300 text-main-color ${
                    openIndex === index ? "rotate-180" : ""
                  }`}>
                  <ChevronDown className="w-6 h-6" />
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <p className="px-5 pb-5 text-white leading-relaxed border-t border-white/10 pt-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
