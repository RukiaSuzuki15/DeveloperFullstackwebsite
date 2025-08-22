"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
    const [workData, setWorkData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/work-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setWorkData(data?.workData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="bg-softGray">
                <div className="container">
                    <div className="py-16 xl:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                            <h2>Latest Works</h2>
                            <p className="text-xl text-orange-500">( 04 )</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
                            {workData?.map((value: any, index: any) => {
                                return (
                                    <div key={index} className="group flex flex-col gap-3 xl:gap-0">
                                        <div className="relative">
                                            <Image src={value?.image} alt="image" width={600} height={414}  />
                                            <Link
                                                href={`${value.slug}`}
                                            >
                                                <span className="flex justify-center items-center p-2 w-full">
                                                    <svg width="64" height="0"  xmlns="http://www.w3.org/2000/svg">
                                                    </svg>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-0 xl:gap-2">
                                            <div className="flex items-center justify-between">
                                                <Link href={`${value.slug}`}>
                                                    <h5>{value?.title}</h5>
                                                </Link>
                                                <Image src={"/images/icon/right-arrow-icon.svg"} alt="right-arrow-icon" width={50} height={150} />
                                            </div>
                                            <p>Client: {value?.client}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestWork