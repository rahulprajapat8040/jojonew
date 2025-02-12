import BikeSlider from "@/components/bike-rent/BikeSlider"
import Hero from "@/components/bike-rent/Hero"
import FaqsData from "@/components/common/Faqs"
import RentalBike from "@/components/common/RentalBike"
import SectionData from "@/components/common/SectionData"

export const metadata = {
    title: 'Bike Rent in Jaipur | Royal Enfield, KTM & Premium Bikes - Jojo bike rental',
    description: 'Rent premium bikes in Jaipur including Royal Enfield, KTM Duke, Bullet, and Harley Davidson. 24/7 support, doorstep delivery, and competitive prices for motorcycle rentals.',
    keywords: 'bike rent in jaipur, royal enfield on rent in jaipur, bullet on rent in jaipur, ktm bike on rent in jaipur, harley davidson on rent in jaipur, bike rental jaipur, motorcycle rental jaipur, bike hire jaipur, rent bike jaipur',
    openGraph: {
        title: 'Premium Bike Rentals in Jaipur | Jojo bike rental',
        description: 'Choose from Royal Enfield, KTM, Bullet & Harley Davidson bikes for rent in Jaipur. Best rates, well-maintained bikes, and hassle-free booking.',
        type: 'website',
        url: 'https://www.jojobikerental.in/bike-rent-in-jaipur',
        images: [
            {
                url: '/assets/bike-rent-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Premium Bikes for Rent in Jaipur'
            }
        ],
        locale: 'en_IN',
        siteName: 'Jojo bike rental'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent Premium Bikes in Jaipur | Jojo bike rental',
        description: 'Royal Enfield, KTM, Bullet & Harley Davidson bikes available for rent in Jaipur. Easy booking, 24/7 support.',
        images: ['/assets/bike-rent-og-image.jpg']
    },
    alternates: {
        canonical: 'https://www.jojobikerental.in/bike-rent-in-jaipur'
    }
}

const BikeRentInJaipur = () => {

    const BikesData = [
        {
            title: `Explore Jaipur with Our Premium Bikes`,
            para: `Discover the beauty of Jaipur, the Pink City, with our premium bike rentals. Our fleet includes a variety of well-maintained bikes, perfect for navigating the bustling streets and scenic routes. Experience the thrill of riding while enjoying the rich culture and heritage of Jaipur.`,
            img: '/assets/online-bike-rent-in-Jaipur.jpg'
        },
        {
            title: `KTM Bike Rentals for Adventure Seekers`,
            para: `Unleash your adventurous spirit with our KTM bike rentals in Jaipur. Known for their performance and style, KTM bikes are perfect for those looking to explore the city and its surroundings. Enjoy the freedom of the open road and create unforgettable memories with our reliable rentals.`,
            img: '/assets/ktm-bike-on-rent-in-jaipur.jpg'
        },
        {
            title: `Ride in Style with Harley Davidson`,
            para: `Experience the luxury of riding a Harley Davidson in Jaipur. Our exclusive Harley rentals offer a unique blend of comfort and power, allowing you to enjoy the city in style. Whether it's a leisurely ride or an adventurous journey, our Harley bikes are designed to provide an unforgettable experience.`,
            img: '/assets/harley-davidson-bike-on-rent-in-jaipur.jpg'
        },
        {
            title: `Convenient Two-Wheeler Rentals`,
            para: `Looking for a convenient way to explore Jaipur? Our two-wheeler rentals are the perfect solution. With affordable rates and a variety of options, you can easily navigate the city and visit popular attractions at your own pace. Enjoy the flexibility and convenience of our two-wheelers.`,
            img: '/assets/two-wheeler-on-rent-in-jaipur.jpg'
        },
        {
            title: `Classic Bullet Rentals for a Timeless Experience`,
            para: `Rent a classic Bullet and experience the charm of riding one of the most iconic bikes in India. Our Bullet rentals are perfect for those who appreciate the blend of tradition and modernity. Explore Jaipur's rich history and vibrant culture with the comfort and style of a Bullet.`,
            img: '/assets/bullet-on-rent-in-jaipur.jpg'
        },
        {
            title: `Royal Enfield Rentals for the Ultimate Ride`,
            para: `Join the Royal Enfield community with our premium rentals. Known for their robust build and classic design, Royal Enfield bikes offer a unique riding experience. Explore the scenic routes of Jaipur and enjoy the thrill of riding a Royal Enfield with our hassle-free rental service.`,
            img: '/assets/royal-enfield-on-rent-in-jaipur.jpg'
        }
    ]

    const BikesOnRent = {
        title: 'Bikes On Rent',
        Bikes: [
            {
                id: "1",
                type: "bullet",
                title: "Royal Enfield 350",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1000,
                image: "/assets/bike-on-rent-in-jaipur.png",
            },
            {
                id: "2",
                type: "ktm",
                title: "KTM Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1500,
                image: "/assets/ktm-duke-best-offer.png",
            },
            {
                id: "3",
                type: "sports",
                title: "Yamaha R15",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 3000,
                image: "/assets/bike-rent-in-jaipur-near-me.png",
            },
            {
                id: "4",
                type: "ktm",
                title: "KTM 390 Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 2000,
                image: "/assets/hire-ktm-bike-on-rent-in-jaipur.png",
            },
            {
                id: "5",
                type: "ktm",
                title: "KTM RC 200",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1500,
                image: "/assets/affordable-ktm-bike-on-rent-in-jaipur.png",
            },
            {
                id: "6",
                type: "ktm",
                title: "KTM 125 Duke",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1300,
                image: "/assets/rent-in-jaipur-ktm-bike.png",
            },
            {
                id: "7",
                type: "harley",
                title: "Harley Davidson Fat Bob",
                transmission: "Manual",
                Fuel: "Petrol",
                Passenger: "2",
                price: 5000,
                image: "/assets/hire-harley-davidson-bike-on-rent-in-jaipur.png",
            },
            {
                id: "8",
                title: "Harley Davidson Street Bob",
                type: "harley",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 5500,
                image: "/assets/affordable-harley-davidson-bike-on-rent-in-jaipur.png",
            },
            {
                id: "9",
                title: "Harley Davidson PAN",
                type: "harley",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 6000,
                image: "/assets/bike-on-rent-in-jaipur-harley-davidson.png",
            },
            {
                id: "10",
                title: "Yamaha FZ-Fi ",
                transmission: "Automatic",
                type: "sports",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1000,
                image: "/assets/affordable-two-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "11",
                title: "Honda Hornet 2.0",
                transmission: "Automatic",
                type: "sports",
                Fuel: "Petrol",
                Passenger: "2",
                price: 800,
                image: "/assets/hire-two-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "12",
                title: "Honda SP 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 900,
                image: "/assets/2-wheeler-on-rent-in-jaipur.png",
            },
            {
                id: "13",
                title: "Bullet Classic x 350",
                type: "bullet",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1200,
                image: "/assets/hire-bullet-on-rent-in-jaipur.png",
            },
            {
                id: "14",
                title: "Royal Enfield Classic BS6",
                transmission: "Automatic",
                type: "bullet",
                Fuel: "Petrol",
                Passenger: "1",
                price: 1250,
                image: "/assets/affordable-bullet-on-rent-in-jaipur.png",
            },
            {
                id: "15",
                title: "Royal Enfield Classic 350",
                transmission: "Automatic",
                type: "bullet",
                Fuel: "Petrol",
                Passenger: "2",
                price: 1300,
                image: "/assets/rent-in-Jaipur-bullet.png",
            },
        ]
    }

    const sectionData = [
        {
            id: 1,
            title: `Explore Jaipur with JOJO Bike Rentals`,
            description: `
                Jaipur, famously known as the Pink City, is a vibrant blend of history, culture, and modernity. With JOJO Bike Rentals, you can explore this enchanting city at your own pace, allowing you to fully immerse yourself in its rich heritage. Picture yourself riding through the bustling streets, where every corner reveals a new adventure. From the majestic Amer Fort to the intricate architecture of Hawa Mahal, our bike rentals provide the perfect way to navigate the city's iconic landmarks. Experience the thrill of riding as you discover hidden gems, local markets, and scenic viewpoints that are often missed by traditional tours. Whether you're a solo traveler or with friends and family, our bikes offer the freedom to create your own itinerary and explore Jaipur's beauty in a unique way. With JOJO Bike Rentals, every ride becomes a memorable journey through the heart of Rajasthan.
            `
        },
        {
            id: 2,
            title: `Exclusive Offers on Bike Rentals`,
            description: `
                At JOJO Bike Rentals, we understand the importance of providing value to our customers. That's why we offer exclusive deals and competitive pricing that make renting a bike in Jaipur both affordable and convenient. Our special packages cater to various needs, whether you're a tourist looking for a short-term rental or a local seeking a long-term solution. Enjoy the flexibility of choosing from a wide range of bikes, including scooters and motorcycles, all at unbeatable prices. Additionally, our seasonal promotions and discounts ensure that you get the best deal possible. We also provide complimentary accessories, such as helmets and safety gear, to enhance your riding experience. With our commitment to customer satisfaction, you can trust that JOJO Bike Rentals will deliver exceptional service and quality, making your exploration of Jaipur not only enjoyable but also budget-friendly.
            `
        },
        {
            id: 3,
            title: `Easy Online Booking for Your Convenience`,
            description: `
                Booking your bike rental in Jaipur has never been easier! Our user-friendly online platform allows you to reserve your bike in just a few clicks, saving you time and effort. Simply browse our extensive selection of bikes, choose the one that suits your style and needs, and complete your booking in minutes. We offer a seamless booking process that includes flexible rental durations, ensuring you have the bike for as long as you need. Plus, with our doorstep delivery service, you can start your adventure the moment you arrive in Jaipur. No more waiting in long lines or dealing with complicated paperwork. Our dedicated customer support team is available 24/7 to assist you with any inquiries or concerns, ensuring a hassle-free experience from start to finish. Experience the convenience of modern technology with JOJO Bike Rentals and enjoy a smooth, enjoyable ride through the beautiful streets of Jaipur.
            `
        },
        {
            id: 4,
            title: `Premium Bike Rentals for Every Adventure`,
            description: `
                Whether you're looking for a leisurely ride through the city or an adventurous journey into the countryside, JOJO Bike Rentals has the perfect bike for you. Our diverse fleet includes everything from classic Bullets to sporty KTMs, all meticulously maintained to ensure a safe and enjoyable ride. Each bike is regularly serviced and inspected, providing you with peace of mind as you explore Jaipur's stunning landscapes. Experience the thrill of the open road as you ride through picturesque routes, visit historical sites, and enjoy the vibrant local culture. Our bikes are designed for comfort and performance, making them ideal for both short trips and long excursions. With JOJO Bike Rentals, every ride becomes an adventure worth remembering, allowing you to create unforgettable memories in the heart of Rajasthan.
            `
        },
        {
            id: 5,
            title: `Why Choose JOJO Bike Rentals?`,
            description: `
                JOJO Bike Rentals stands out in Jaipur for its unwavering commitment to quality and customer satisfaction. Our bikes undergo regular servicing and sanitization, ensuring a safe and enjoyable experience for every rider. We pride ourselves on offering a wide selection of well-maintained bikes that cater to all preferences and budgets. Our flexible rental terms allow you to choose the duration that best fits your needs, whether it's a few hours, a day, or even a month. Additionally, our dedicated customer support team is available around the clock to assist you with any questions or concerns, ensuring that your rental experience is smooth and hassle-free. We believe in building lasting relationships with our customers, which is why we strive to provide exceptional service and support at every step. Choose JOJO for reliability, excellence, and a passion for biking that sets us apart from the rest!
            `
        },
        {
            id: 6,
            title: `Discover Jaipur's Hidden Gems`,
            description: `
                Riding a bike allows you to uncover the hidden gems of Jaipur that are often overlooked by traditional transportation. From the majestic forts to the bustling local markets, our bike rentals give you the freedom to explore the city's rich culture and vibrant lifestyle. Imagine cruising through the narrow lanes of the old city, where you can stop at charming cafes, artisan shops, and historical sites that tell the story of Jaipur's heritage. With JOJO Bike Rentals, you can venture off the beaten path and discover lesser-known attractions, such as the tranquil gardens, local art galleries, and scenic viewpoints that offer breathtaking views of the city. Join us at JOJO Bike Rentals and embark on an unforgettable journey through Jaipur, where every turn reveals a new adventure waiting to be discovered. Experience the city like never before, and create memories that will last a lifetime!
            `
        }
    ]

    const HeroData = {
        videoUrl: '/assets/8070865-uhd_3840_2160_24fps.mp4',
        title: 'Rent a Bike at Jojo Bike Rental'
    }

    const Faqs = [
        {
            qustion: 'Where can i pickup the Bike?',
            answer: 'You have the option to select a pickup location as bike rent in Jaipur near me. You can choose a location when you book your bike.'
        },
        {
            qustion: 'What are the charges for damange to the Bike ?',
            answer: `


i) In the facts of damage to the rented two-wheeler due to accident/abuse/negligence, the provider will charge the corresponding fees and the driver is obliged to pay these to the provider together with the daily rate until the bike is ready for use rent again.

ii) As per Co's policy, we will not claim damages below Rs. 5000/- from insurance. Therefore, the total amount up to Rs. 5000 plus the daily charge shall be borne by the customer until the bike is ready for rent again.

iii) In the facts of major damage, the rider is responsible for paying the repair amount in full plus the 7-day bike fee, including any incidental expenses. After the insurance claim has been settled, the amount of the claim will be credited to the customer's account.

iv) In the fact of a total loss, the driver is obliged to pay in full the amount of the new two-wheeler plus the costs for registration and insurance as well as the 7-day fee for the bike including ancillary costs after the insurance claim has been processed, the amount of the claim will be credited to the customer account.

v) In the facts of theft, the cyclist is immediately obliged to pay the full value of the new two-wheeler plus registration and insurance costs plus 7 days bike fee, including any unforeseen costs. After the insurance claim has been settled, the amount of the claim will be credited to the customer's account.

            `
        },
        {
            qustion: 'What is the speed limit policy for the rented bike of Jojo bike rentals ?',
            answer: 'Vehicle speeds are remotely tracked and monitored via GPS devices to ensure the safety of all JOJO bike riders. Any violation of the speed limit will incur a fine of Rs. 100 per warning (speed limits are 100-149 cc bikes- 70 km/h). ',

        },
        {
            qustion : 'How do i pay for my rental bike in jaipur at Jojo bike rentals ?',
            answer: 'You can pay online using credit/debit cards, e-wallets, cash, or any other payment method. '
        },
        {
            qustion : 'What accessories of Inclusions will get when hiring Jojo bike rentals for bike rent?',
            answer : 'You will get the best service bike with maintenance and a complementary helmet with your rental bike.'
        },
        {
            qustion : 'will Jojo bike rentals deliver bike rent in jaipur Sindhi Camp ?',
            answer: 'Yes, if you traveling from some other place by bus and you looking to rent a bike, then we provide service of bike delivery at Sindhi camp.'
        },
        {
            qustion : 'How Much does it cost to Bike on rent at Jojo bike rentals ?',
            answer: 'Jojo bike rentals provides affordable Rent For Bike In Jaipur to the customer with many offers and discounts.'
        },
        {
            qustion: 'Is it possible to ride the Bike OutStation ?',
            answer : 'Yes, it is possible to take a bike ride outstation. '
        }
    ]

    return (
        <>
            <Hero data={HeroData} />
            <BikeSlider BikesData={BikesData} />
            <RentalBike data={BikesOnRent} />
            <FaqsData faqData={Faqs} />
            <SectionData data={sectionData} />
        </>
    )
}

export default BikeRentInJaipur