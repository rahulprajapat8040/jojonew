import Hero from "@/components/about/Hero"
import WhyJojoBikes from "@/components/about/WhyJojoBikes"

export const metadata = {
  title: 'About JOJO Bike Rental | Premier Bike Rental Service in Jaipur',
  description: 'Discover JOJO Bikes - Jaipur\'s trusted two-wheeler rental service. We offer Activa, bikes & scooties with 24/7 support, doorstep delivery & affordable rates. Experience hassle-free bike rentals in Jaipur.',
  keywords: 'bike rental Jaipur, Activa on rent Jaipur, scooty rental Jaipur, two-wheeler rental service, bike hire Jaipur, monthly bike rental Jaipur, affordable bike rental, JOJO Bikes about, best bike rental service Jaipur',
  openGraph: {
    title: 'About JOJO Bikes - Leading Bike Rental Service in Jaipur',
    description: 'Learn about JOJO Bikes - your trusted partner for bike rentals in Jaipur. Offering premium fleet selection, doorstep delivery, and hassle-free booking with transparent pricing.',
    type: 'website',
    url: 'https://jojobikerental.in/about-jojo-bike-rental',
    images: [
      {
        url: '/assets/about-us-side-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JOJO Bikes - About Us'
      }
    ],
    locale: 'en_IN',
    siteName: 'JOJO Bikes'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About JOJO Bikes - Jaipur\'s Premium Bike Rental Service',
    description: 'Premium fleet, doorstep delivery & transparent pricing. Experience the best bike rental service in Jaipur with JOJO Bikes.',
    images: ['/assets/about-us-side-image.jpg'],
  },
  alternates: {
    canonical: 'https://jojobikerental.in/about-jojo-bike-rental'
  }
}

const AboutJojoBikes = () => {
    const HeroData = {
        title: "Discover JOJO Bike Rental",
        para0: "Experience the freedom of exploring Jaipur with JOJO Bike Rental. Our service offers a wide range of well-maintained bikes and scooters, ensuring a smooth and enjoyable ride through the vibrant streets of the city.",
        para1: 'At JOJO Bike Rental, we prioritize customer satisfaction by providing affordable rental options without compromising on quality. Whether you need an Activa or a bike, our fleet is designed to meet your needs, making your journey hassle-free and enjoyable.',
        para2: 'Our monthly rental plans are tailored to provide you with the best value for your money. With no hidden fees and flexible terms, renting a bike or scooter in Jaipur has never been easier. Enjoy the convenience of 24/7 support and quick service whenever you need it.',
        para3: 'Join countless satisfied customers who have chosen JOJO Bike Rental for their rental needs. Our commitment to excellence and customer service ensures that you have a reliable and enjoyable experience every time you rent with us. Discover the joy of riding with JOJO Bike Rental today!',
        image: '/assets/about-us-side-image.jpg'
    }

    const WhyJojoBikesData = [
        {
            id: 1,
            title: 'Premium Fleet Selection',
            description: 'Choose from our range of well-maintained and sanitized bikes in excellent condition.',
            icons: '🏍️',
            features: ['Sanitized bikes', 'Excellent condition bike', 'Support System']
        },
        {
            id: 2,
            title: 'Doorstep Services',
            description: 'Enjoy convenient pickup, drop, and home delivery services with professional guidance.',
            icons: '🚚',
            features: ['Professional Guidance', 'Pick up and Drop service', 'Home Delivery']
        },
        {
            id: 3,
            title: 'Hassle-free Booking',
            description: 'Easy online booking process with proper documentation and safety equipment provided.',
            icons: '📱',
            features: ['Online Booking', 'Proper Documentation', 'Helmets']
        },
        {
            id: 4,
            title: 'Affordable Pricing',
            description: 'Enjoy competitive rates with transparent pricing. No hidden charges, just straight-forward affordable rentals.',
            icons: '💰',
            features: ['Best price guarantee', 'Special offers', 'Long-term discounts']
        },
        {
            id: 5,
            title: 'Flexible Delivery Options',
            description: 'We offer convenient doorstep delivery and pickup services across Jaipur. Get your bike delivered right where you need it.',
            icons: '🚚',
            features: ['Pick up and Drop service', 'Home Delivery', 'Flexible timing']
        }
    ]

 

    return (
        <>
            <Hero HeroData={HeroData} />
            <WhyJojoBikes WhyJojoBikesData={WhyJojoBikesData} />
        </>
    )
}

export default AboutJojoBikes