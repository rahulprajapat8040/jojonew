import Link from "next/link"
import Image from "next/image"

const socialIcons = {
    facebook: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        ),
        color: "#1877F2",
        url: 'https://www.facebook.com/jojobikerental'
    },
    instagram: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
        ),
        color: "#E4405F",
        url: 'https://www.instagram.com/jojobikerentaljaipur'
    },
    linkedin: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
        ),
        color: "#0A66C2",
        url: 'https://in.linkedin.com/company/jojo-travel-activa-scooty-car-bike-rental-in-jaipur'
    },
    youtube: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
        ),
        color: "#FF0000",
        url: 'https://www.youtube.com/@JojoBIkeRental'
    },
    pinterest: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
        ),
        color: "#E60023",
        url: 'https://in.pinterest.com/jojotraveljaipur/'
    },
    x: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        color: "#000000",
        url: 'https://twitter.com/jojotravel_'
    },
    maps: {
        icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
            </svg>
        ),
        color: "#34A853",
        url: 'https://maps.app.goo.gl/zfKcZumzcLFhoc8H9'
    }
};

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-white to-gray-100 via-white border-t">
            <div className="max-w-7xl mx-auto px-4 pt-16">
                {/* Upper Section with Logo and Description */}
                <div className="flex flex-col items-center text-center mb-16 space-y-6">
                    <Link href="/" className="block">
                        <Image
                            src="/JOJOLOGO.png"
                            alt="Jojo Bikes Logo"
                            width={200}
                            height={80}
                            className="h-20 w-auto"
                        />
                    </Link>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Experience the freedom of two-wheel travel with Jojo Bikes. We provide premium bike and scooter rental services in Jaipur with exceptional customer service.
                    </p>
                </div>

                {/* Main Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 mb-3">
                    {/* Quick Links */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-2.5">
                            {['Bike Rent In Jaipur', 'Scooter Rent In Jaipur', 'Book Now', 'Contact Us'].map(link => (
                                <Link key={link}
                                    href={link === 'Book Now'
                                        ? 'https://order.jojobikerental.in/'
                                        : link === 'Scooter Rent In Jaipur'
                                            ? '/scooter-rent-jaipur'
                                            : `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                                    target={link === 'Book Now' ? '_blank' : undefined}
                                    className="text-gray-600 hover:text-primaryColor transition-colors flex items-center group w-fit">
                                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                    {link}
                                </Link>
                            ))}
                        </div>

                        {/* Add a separator and title for social icons */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <h4 className="text-sm font-semibold text-gray-800 mb-4">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                {Object.entries(socialIcons).map(([platform, { icon, color, url }]) => (
                                    <Link key={platform}
                                        target="_blank"
                                        href={url || `https://${platform === 'x' ? 'twitter' : platform}.com/${platform === 'x' ? 'jojotravel_' : 'jojotravel.in'}`}
                                        className="bg-white p-2 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 group"
                                        style={{
                                            '--hover-color': color,
                                        }}>
                                        <div className="text-gray-600 hover:text-[var(--hover-color)] transition-colors">
                                            {icon}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Get in Touch
                        </h3>
                        <div className="grid grid-cols-1 gap-2.5">
                            {[
                                '+91 8503027210',
                                '+91 7300404204',
                                '+91 8290690300',
                                '+91 9799994204',
                                '+91 63773 73164'
                            ].map((phone, index) => (
                                <a key={phone}
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="text-gray-600 hover:text-primaryColor transition-colors flex items-center gap-2 w-fit">
                                    <svg className="w-4 h-4 text-primaryColor/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span className="text-sm hover:translate-x-1 transition-transform">{phone}</span>
                                </a>
                            ))}
                            <a href="mailto:info@jojobikerental.com"
                                className="text-gray-600 hover:text-primaryColor transition-colors flex items-center gap-2 w-fit pt-1">
                                <svg className="w-4 h-4 text-primaryColor/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="hover:translate-x-1 transition-transform">info@jojobikerental.com</span>
                            </a>
                            
                        </div>
                    </div>

                    {/* Download App */}
                    <div className="space-y-4 lg:border-r lg:border-gray-100 lg:pr-8">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Download App
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <div className="flex justify-between md:flex-col gap-3">
                                <a href="https://play.google.com/store/apps/details?id=com.jojorental.customer"
                                    target="_blank"
                                    className="flex items-center gap-3 bg-black text-white px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-all group w-full sm:w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-300">GET IT ON</span>
                                        <span className="text-sm font-medium">Google Play</span>
                                    </div>
                                </a>
                                <div className="flex items-center gap-3 bg-gray-100 text-black px-4 py-2.5 rounded-lg w-full sm:w-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="flex flex-col">
                                        <span className="text-xs">COMING SOON ON</span>
                                        <span className="text-sm font-medium">App Store</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Download our app for the best experience. Book bikes, track rides, and manage your rentals on the go.
                            </p>
                        </div>
                    </div>

                    {/* Visit Us */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-gray-800 after:content-[''] after:block after:w-12 after:h-0.5 after:bg-primaryColor after:mt-2">
                            Visit Us
                        </h3>
                        <div className="space-y-3">
                            <p className="text-gray-600 leading-relaxed">
                                <span className="text-black font-bold">Corporate office :- </span> G-68 Near Gulab Ji Tea,
                                Ganpati Plaza, M I Road Jaipur,<br />
                                Rajasthan - 302001
                            </p>
                            <Link href="https://maps.app.goo.gl/q8aC9GzLqWkUvVVU7"
                                target="_blank"
                                className="inline-flex items-center text-primaryColor hover:text-primaryColor/80 transition-colors gap-2 group w-fit">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="hover:translate-x-1 transition-transform">View on Map</span>
                            </Link>
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-600 leading-relaxed">
                           <span className="text-black font-bold"> Branch office :- </span> Park House, Plot No 2, Mirza Ismail Rd, near GANPATI PLAZA, near Sindhi Camp, Sindhi Camp, Jaipur, Rajasthan 302001
                            </p>
                            <Link href="https://maps.app.goo.gl/xNe4HALFpxkUAv8e8"
                                target="_blank"
                                className="inline-flex items-center text-primaryColor hover:text-primaryColor/80 transition-colors gap-2 group w-fit">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="hover:translate-x-1 transition-transform">View on Map</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-200 py-4">
                    <p className="text-center text-gray-600">
                        © {new Date().getFullYear()} Jojo Bike Rental Jaipur.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer