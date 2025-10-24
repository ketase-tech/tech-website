'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Variants } from 'framer-motion';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } },
};

export default function Services() {
    return (
        <section className="bg-[#f9f9f9] py-16 px-4 sm:px-6 md:px-8">
            <motion.h2
                className="section-title mt-5 md:text-center text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Empowering Your Digital Journey
            </motion.h2>
            <motion.p
                className="main-paragraph pt-4 pb-8 md:w-1/2 mx-auto md:text-center text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Explore our expertise across technology, design, and business transformation.
            </motion.p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Web & Mobile Apps */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-3xl shadow-sm flex flex-col justify-between"
                >
                    <div className='p-6 md:p-8'>
                        <h3 className="text-lg md:text-xl font-semibold mb-3">Web & mobile apps</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                            We design and develop high-performing web and mobile applications that are intuitive,
                            scalable, and visually compelling.
                        </p>
                    </div>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative w-full h-48 md:h-80"
                    >
                        <Image
                            src={"/project-images/cover-img.png"}
                            alt="Web app mockup"
                            fill
                            className="object-contain object-center"
                        />
                    </motion.div>
                </motion.div>

                {/* E-Commerce Solutions */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
                >
                    <h3 className="text-lg md:text-xl font-semibold mb-3">E-Commerce Solutions</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                        We help brands go beyond just having an online store. From design to checkout, our e-commerce platforms are fast, scalable, and built to sell with purpose.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-2xl p-4 flex gap-4 items-center"
                        >
                            <Image
                                src="/icons/shopify.png"
                                alt="Shopify"
                                width={36}
                                height={36}
                                className="inline-block object-contain"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm mb-1">Shopify</h4>
                                <p className="text-gray-500 text-xs">The world’s leading commerce platform; built for growth, speed, and simplicity.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-2xl p-4 flex gap-4 items-center"
                        >
                            <Image
                                src="/icons/woocommerce.svg"
                                alt="WooCommerce"
                                width={36}
                                height={36}
                                className="inline-block object-contain"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm mb-1">Woo-Commerce</h4>
                                <p className="text-gray-500 text-xs">WordPress-powered flexibility for businesses that want control and customization.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-2xl p-4 flex gap-4 items-center"
                        >
                            <Image
                                src="/icons/paypal.png"
                                alt="PayPal"
                                width={48}
                                height={24}
                                className="inline-block object-contain"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm mb-1">Payment Integrations</h4>
                                <p className="text-gray-500 text-xs">Visa, Mastercard, PayPal, Airtel Money & More</p>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-gray-50 rounded-2xl p-4 flex gap-4 items-center"
                        >
                            <Image
                                src="/icons/inventory.png"
                                alt="Inventory"
                                width={36}
                                height={36}
                                className="inline-block object-contain"
                            />
                            <div>
                                <h4 className="font-semibold text-gray-800 text-sm mb-1">Inventory & Order automation</h4>
                                <p className="text-gray-500 text-xs">Track stock, process orders, and sync data across platforms</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Digital Transformation */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
                >
                    <h3 className="text-lg md:text-xl font-semibold mb-3">Digital Transformation</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                        We help businesses reimagine their operations through innovative technology solutions.
                        From legacy system modernization to cloud migration and automation, we transform traditional
                        processes into streamlined, digital-first experiences that drive growth and efficiency.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {[
                            'Legacy Modernization',
                            'Cloud Migration',
                            'Process Automation',
                            'Data Analytics',
                            'System Integration',
                            'Digital Strategy',
                            'Change Management',
                        ].map((tag) => (
                            <motion.span
                                key={tag}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-full"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="mt-6 relative w-full h-48 md:h-64 rounded-xl overflow-hidden"
                    >

                    </motion.div>
                </motion.div>

                {/* Business Systems & Technology Integration */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-3xl shadow-sm p-6 md:p-8"
                >
                    <h3 className="text-lg md:text-xl font-semibold mb-3">Business Systems & Technology Integration</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                        We help businesses digitize and automate what matters.
                        From manual spreadsheets to smart dashboards, we connect your operations to modern tools that save time and money.
                    </p>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="bg-gray-50 rounded-2xl p-5"
                    >
                        <ul className="space-y-3 text-gray-800 text-sm">
                            {[
                                'Business Management Systems',
                                'CRM & Workflow Automation',
                                'Internal Web apps & Portals',
                                'Business Emails & Domains',
                                'Data Migration & Security',
                                'API integrations and data syncing',
                            ].map((step, idx) => (
                                <motion.li
                                    key={idx}
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`flex items-center justify-between ${idx < 3 ? 'text-gray-900 font-medium' : 'text-gray-900'
                                        }`}
                                >
                                    {step}
                                    {idx < 3 ? (
                                        <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                                    ) : (
                                        <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Dark Card */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:col-span-2 bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
                            Cutting-Edge Technology, <br /> Innovative Solutions, <br />
                            <span className="text-gray-400">Digital Excellence</span>
                        </h2>
                    </div>
                    <motion.a
                        href="https://calendly.com/ketasegroup"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="self-start mt-6 text-sm font-medium border border-gray-600 rounded-full px-5 py-2 hover:bg-gray-800 transition"
                    >
                        Book a call
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}