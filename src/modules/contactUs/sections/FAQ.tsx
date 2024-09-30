import React, { useEffect, useState } from "react";
import { FAQ_type } from "../../../utils/type";
import { FAQ_API_URL } from "../../../utils/constants";
import FAQItem from "../components/FAQItem";

const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ_type[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      const response = await fetch(FAQ_API_URL);
      const data: FAQ_type[] = await response.json();
      setFaqs(data);
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#E0E0FF]">
      <div className="mx-auto flex flex-col gap-10 p-4 py-4 lg:py-28 lg:px-48">
        <h2
          className="text-2xl lg:text-4xl font-bold mb-4 text-center"
          data-aos="slide-up"
          data-aos-duration="500"
          data-aos-delay="50"
        >
          Popular Searched Questions
        </h2>
        <div
          className="rounded-2xl border py-4  bg-[#FFFFFF]"
          data-aos="slide-up"
          data-aos-duration="500"
          data-aos-delay="100"
        >
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isActive={activeIndex === index}
                onToggle={toggleFAQ}
                index={index}
              />
              {index < faqs.length - 1 && (
                <hr className="border border-gray-300 w-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
