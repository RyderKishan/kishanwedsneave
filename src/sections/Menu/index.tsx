'use client';

import React, { useRef } from 'react';
import { AnimationProps, motion, useInView } from 'framer-motion';
import { DELAY, DURATION } from '@/constants';

const getAnimationProps = (delay: number): AnimationProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { ease: 'easeIn', duration: DURATION, delay: DELAY * delay },
});

interface MenuItem {
  tamil: string;
  english: string;
}

interface MenuSection {
  date: string;
  time: string;
  session: string;
  items: MenuItem[];
}

const menuData: MenuSection[] = [
  {
    date: '07.06.25',
    time: '01:00 PM',
    session: 'Lunch',
    items: [
      { tamil: 'சாதம்', english: 'Rice' },
      { tamil: 'பருப்பு / பருப்பு பொடி', english: 'Dal / Dal Powder' },
      { tamil: 'நெய்', english: 'Ghee' },
      { tamil: 'உருளைக்கிழங்கு கூட்டு', english: 'Potato Mix' },
      {
        tamil: 'பொறியல் புடலங்காய் கடலைப் பருப்பு',
        english: 'Behari Pudalankay Peanuts',
      },
      { tamil: 'ரசம்', english: 'Rasam' },
      { tamil: 'மோர்', english: 'Buttermilk' },
      { tamil: 'அப்பளம்', english: 'Appalam' },
      { tamil: 'ஊறுகாய் - மாங்காய்', english: 'Pickle - Mango' },
    ],
  },
  {
    date: '07.06.25',
    time: '05:00 PM',
    session: 'Snacks',
    items: [
      { tamil: 'வாழைக்காய் பஜ்ஜி', english: 'Banana Fritters' },
      { tamil: 'சேமியா கேசரி', english: 'Semiya Kesari' },
      { tamil: 'வெங்காய பஜ்ஜி', english: 'Onion Fritters' },
    ],
  },
  {
    date: '07.06.25',
    time: '07:00 PM',
    session: 'Dinner',
    items: [
      { tamil: 'ருமாலி ரொட்டி', english: 'Rumali Rotti' },
      { tamil: 'பன்னீர் கிரேவி', english: 'Paneer Gravy' },
      { tamil: 'பரோட்டா சில்லி', english: 'Parotta' },
      { tamil: 'காலன் குருமா', english: 'Mushroom Gravy' },
      { tamil: 'இட்லி', english: 'Idli' },
      { tamil: 'தோசை ரோஸ்ட்', english: 'Paper Dosa' },
      { tamil: 'இடியாப்பம்', english: 'Idiyappam' },
      { tamil: 'தேங்காய் பால்', english: 'Coconut Milk' },
      { tamil: 'சாம்பார்', english: 'Sambar' },
      { tamil: 'தேங்காய் சட்னி', english: 'Coconut Chutney' },
      { tamil: 'மல்லி சட்னி', english: 'Mint Chutney' },
      { tamil: 'உருளைக்கிழங்கு குச்சி சிப்ஸ்', english: 'Potato Chips' },
      { tamil: 'பால் சாதம்', english: 'Milk Rice' },
      { tamil: 'மிளகாய் குழம்பு', english: 'Chilly Gravy' },
      { tamil: 'கோதுமை அல்வா', english: 'Wheat Halwa' },
      { tamil: 'பாதாம் பால்', english: 'Badam Milk' },
    ],
  },
  {
    date: '08.06.25',
    time: '06:00 AM',
    session: 'Breakfast',
    items: [
      { tamil: 'ரவை கேசரி - வெள்ளை', english: 'Rava Kesari - White' },
      { tamil: 'உளுந்த வடை', english: 'Vada' },
      { tamil: 'இட்லி', english: 'Idli' },
      { tamil: 'கல் தோசை', english: 'Kal Dosa' },
      { tamil: 'வெங்காய தோசை', english: 'Onion Dosa' },
      { tamil: 'பொடி தோசை', english: 'Podi Dosa' },
      { tamil: 'பூரி', english: 'Pori' },
      { tamil: 'வெள்ளை கிழங்கு குருமா', english: 'White Potato Gravy' },
      { tamil: 'சாம்பார்', english: 'Sambar' },
      { tamil: 'தேங்காய் சட்னி', english: 'Coconut Chutney' },
      { tamil: 'தக்காளி சட்னி', english: 'Tomato Chutney' },
      { tamil: 'வெண்பொங்கல்', english: 'Venpongal' },
      { tamil: 'டீ, காப்பி', english: 'Tea, Coffee' },
    ],
  },
  {
    date: '08.06.25',
    time: '11:00 AM',
    session: 'Lunch',
    items: [
      { tamil: 'கேரட் அல்வா', english: 'Carrot Halwa' },
      { tamil: 'பட்டர் பீன்ஸ்', english: 'Butter Beans' },
      { tamil: 'முட்டைகோஸ் கூட்டு', english: 'Cabbage' },
      { tamil: 'மீல் மேக்கர்', english: 'Fish type meal maker - Fry' },
      { tamil: 'வெஜ் பிரியாணி', english: 'Vegetable Briyani' },
      { tamil: 'சாதம்', english: 'Rice' },
      { tamil: 'சாம்பார்', english: 'Sambar' },
      { tamil: 'ரசம்', english: 'Rasam' },
      { tamil: 'மோர்', english: 'Buttermilk' },
      { tamil: 'பாயாசம்', english: 'Payasam' },
      { tamil: 'அப்பளம்', english: 'Appalam' },
      { tamil: 'ஊறுகாய்', english: 'Pickle' },
      { tamil: 'கத்தரிக்காய்', english: 'Brinjal' },
      { tamil: 'அவரைக்காய்', english: 'Hyacinth beans' },
    ],
  },
];

const Menu: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      className="min-h-dvh mx-auto max-w-screen-xl p-8 gap-8 flex flex-col justify-center items-center"
    >
      {isInView && (
        <>
          <motion.h1
            {...getAnimationProps(0)}
            className="text-4xl font-bold text-center mb-8"
          >
            Menu
          </motion.h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData.map((section, sectionIndex) => (
              <motion.div
                key={`${section.date}-${section.session}`}
                {...getAnimationProps(sectionIndex + 1)}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 shadow-lg"
              >
                <div className="border-b border-gray-200/20 pb-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-semibold">{section.date}</h2>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{section.session}</span>
                    <span>{section.time}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center py-1 hover:bg-white/5 rounded px-2 transition-colors"
                    >
                      <span>{item.english}</span>
                      <span className="text-gray-400 text-sm text-right">
                        {item.tamil}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Menu;
