"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface EducationItem {
  title: string;
  description: string;
}

interface SkillItem {
  name: string;
  icon: string;
  rating: number;
}

interface EducationData {
  education?: EducationItem[];
  skills?: SkillItem[];
}

const EducationSkills = () => {
  const [educationData, setEducationData] = useState<EducationData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setEducationData(data?.educationData || null);
      } catch (error) {
        console.error('Error fetching education data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="education-skills">
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10 mx-auto">

          {/* Image vector animée */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          >
            <Image
              src="/images/home/education-skill/edu-skill-vector.svg"
              alt="vector"
              width={260}
              height={150}
            />
          </motion.div>

          <div className="relative z-10 py-16 md:py-32">
            {/* Header animé */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16"
            >
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
              {/* Education List */}
              <div className="w-full lg:max-w-md flex flex-col gap-6 xl:gap-8">
                {educationData?.education?.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border border-black bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <h5>{item.title}</h5>
                      <p className="font-normal">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                {educationData?.skills?.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Image src={skill.icon} alt={skill.name} width={70} height={70} />
                      <p className="text-black font-normal">{skill.name}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={i < skill.rating ? '#FE4300' : '#C0D8E0'}
                          />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;