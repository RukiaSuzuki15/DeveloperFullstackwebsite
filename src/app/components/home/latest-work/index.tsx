"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface WorkItem {
  title: string;
  client: string;
  image: string;
  slug: string;
}

const LatestWork = () => {
  const [workData, setWorkData] = useState<WorkItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/work-data');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setWorkData(data?.workData || []);
      } catch (error) {
        console.error('Error fetching work data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="latest-work">
      <div className="bg-softGray">
        <div className="container mx-auto">
          <div className="py-16 xl:py-32">

            {/* Header animé */}
            <motion.div
              className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </motion.div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col gap-3 xl:gap-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="relative w-full overflow-hidden rounded-lg">
                    <Image 
                      src={work.image} 
                      alt={work.title} 
                      width={600} 
                      height={414} 
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Link href={work.slug}>
                      <span className="absolute inset-0 flex justify-center items-center cursor-pointer"></span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <Link href={work.slug}>
                        <h5 className="cursor-pointer">{work.title}</h5>
                      </Link>
                    </div>
                    <p>Client: {work.client}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
