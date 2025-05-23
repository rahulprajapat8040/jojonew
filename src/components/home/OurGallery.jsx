'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const OurGallery = ({ data }) => {
    const [visibleItems, setVisibleItems] = useState(8)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])

    const handleLoadMore = () => {
        setVisibleItems(prev => Math.min(prev + 8, data.length))
    }

    return (
        <section className="py-20 mt-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-5xl md:text-7xl font-bold text-primaryColor mb-4">
                        Our Gallery
                    </h4>
                    <p className="text-gray-600 text-lg">
                        Discover our premium collection
                    </p>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    style={{ opacity }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
                >
                    {data.slice(0, visibleItems).map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square relative group cursor-pointer overflow-hidden"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={item.image}
                                alt={`our-gallery-${index}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {visibleItems < data.length && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mt-8"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="bg-primaryColor text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                            Load More
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    )
}

export default OurGallery