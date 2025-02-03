'use client'
import { useRef, useState } from 'react';
import Modal from './Modal';
import { motion, useInView } from 'motion/react'
import RentalModal from '../home/RentalModal';

const SectionData = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            <section className="pb-10 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h1 className='text-center text-5xl py-6 font-semibold text-black'>Our Blogs</h1>
                    <div className="space-y-8">
                        {data.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl border-l-4 border-primaryColor">
                                <h2 className="text-3xl font-bold text-black mb-4">{item.title}</h2>
                                <p className="text-gray-700 text-base pt-2 mb-4">{item.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className='px-20 py-3  text-white bg-primaryColor hover:rounded-xl rounded-md duration-150'>
                            Rent Now
                        </button>
                    </div>
                </div>
            </section>
            <RentalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Modal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                title={selectedItem?.title}
                description={selectedItem?.description}
            />
        </>
    );
};

export default SectionData;