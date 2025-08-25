"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
            {/* Header */}
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
              {workData.map((work, index) => (
                <div key={index} className="group flex flex-col gap-3 xl:gap-0">
                  <div className="relative w-full">
                    <Image 
                      src={work.image} 
                      alt={work.title} 
                      width={600} 
                      height={414} 
                      className="w-full h-auto object-cover"
                    />
                    <Link href={work.slug}>
                      <span className="absolute inset-0 flex justify-center items-center cursor-pointer">
                        {/* Ici tu peux ajouter un overlay ou icône si nécessaire */}
                      </span>
                    </Link>
                  </div>

                  <div className="flex flex-col gap-0 xl:gap-2">
                    <div className="flex items-center justify-between">
                      <Link href={work.slug}>
                        <h5 className="cursor-pointer">{work.title}</h5>
                      </Link>
                      <Image 
                        src="/images/icon/right-arrow-icon.svg" 
                        alt="right-arrow-icon" 
                        width={24} 
                        height={24} 
                      />
                    </div>
                    <p>Client: {work.client}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
               
