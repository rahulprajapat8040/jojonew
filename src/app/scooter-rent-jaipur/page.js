import WhyJojoBikes from "@/components/about/WhyJojoBikes"
import BikeSlider from "@/components/bike-rent/BikeSlider"
import Hero from "@/components/bike-rent/Hero"
import RentalBike from "@/components/common/RentalBike"
import SectionData from "@/components/common/SectionData"

export const metadata = {
    title: 'Scooty & Activa on Rent in Jaipur | Best Rates - Jojo bike rental',
    description: 'Rent Activa, Scooty & automatic two-wheelers in Jaipur. Affordable daily & monthly rental plans with doorstep delivery. Book Honda Activa & scooters at best rates.',
    keywords: 'scooty on rent in jaipur, activa on rent in jaipur, honda activa rental jaipur, scooty rental jaipur, automatic scooter rent jaipur, monthly scooty rental jaipur, activa 6g on rent, activa 125 rental',
    openGraph: {
        title: 'Scooty & Activa Rentals in Jaipur | Jojo bike rental',
        description: 'Rent Honda Activa & Scooters in Jaipur. Best maintained vehicles, flexible rental plans, and hassle-free booking process.',
        type: 'website',
        url: 'https://www.jojobikerental.in/scooter-rent-jaipur',
        images: [
            {
                url: '/assets/scooty-rent-og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Scooty and Activa Rentals in Jaipur'
            }
        ],
        locale: 'en_IN',
        siteName: 'Jojo bike rental'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rent Scooty & Activa in Jaipur | Jojo bike rental',
        description: 'Best rates for Activa & Scooty rentals in Jaipur. Daily & monthly plans available with doorstep delivery.',
        images: ['/assets/scooty-rent-og-image.jpg']
    },
    alternates: {
        canonical: 'https://www.jojobikerental.in/scooter-rent-jaipur'
    }
}

const BikeRentInJaipur = () => {

    const BikesData = [
        {
            title: `
Explore Jaipur with Honda Activa Rentals
Experience the Best of Jaipur with Jojo Bike Rentals
`,
            para: `
Discover the vibrant city of Jaipur with our premium Honda Activa rentals. Whether you're visiting historical landmarks or exploring the bustling markets, the Activa is the perfect companion for your journey. With its smooth handling and compact design, navigating through the city's narrow lanes and crowded streets becomes a breeze. 

At Jojo Bike Rentals, we prioritize your comfort and safety. Our Activas are meticulously maintained and come equipped with essential safety gear, including helmets. Enjoy the freedom of exploring Jaipur at your own pace, stopping at iconic sites like the Hawa Mahal, City Palace, and Amber Fort. 

Renting an Activa not only saves you time but also provides a cost-effective solution for your travel needs. With flexible rental plans and competitive pricing, we ensure that your experience is both enjoyable and affordable. Join countless satisfied customers who have made their Jaipur adventure unforgettable with Jojo Bike Rentals. Book your Honda Activa today and embark on a memorable journey through the Pink City!
`,
            img: '/assets/activa-on-rent-in-jaipur.jpg'
        },
        {
            title: `Scooty Rentals: Your Gateway to Jaipur's Hidden Gems`,
            para: `Unleash the explorer in you with our Scooty rentals in Jaipur. Scooties are not just convenient; they offer the perfect blend of agility and comfort for navigating the city's vibrant streets. With ample storage space and easy maneuverability, you can effortlessly visit popular attractions and discover hidden gems off the beaten path. 

At Jojo Bike Rentals, we provide a diverse fleet of well-maintained Scooties, ensuring you have a reliable ride for your adventures. Our rental process is straightforward, allowing you to focus on enjoying your time in Jaipur without the hassle of public transport. 

Experience the rich culture, stunning architecture, and delicious cuisine of Jaipur while riding a Scooty that suits your style. Our competitive pricing and excellent customer service make us the preferred choice for travelers seeking a hassle-free rental experience. Rent a Scooty today and make the most of your Jaipur journey!
`,
            img: '/assets/scooty-on-rent-in-jaipur.jpg'
        },
    ]

    const BikesOnRent = {
        title: 'Scooter On Rent',
        Bikes: [
            {
                id: "1",
                type: "honda",
                title: "Honda Activa 6G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/activa-rent-in-jaipur.png",
            },
            {
                id: "2",
                type: "honda",
                title: "Honda Activa 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/affordable-activa-on-rent-in-jaipur.png",
            },
            {
                id: "3",
                type: "honda",
                title: "Honda Activa 4G",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 450,
                image: "/assets/rent-in-jaipur-Activa.png",
            },
            {
                id: "4",
                type: "suzuki",
                title: "Suzuki Access 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 600,
                image: "/assets/scooty-rent-in-jaipur.png",
            },
            {
                id: "5",
                type: "honda",
                title: "Honda Activa 3g",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 450,
                image: "/assets/affordable-scooty-on-rent-in-jaipur.png",
            },
            {
                id: "6",
                type: "honda",
                title: "Honda Grazia 125",
                transmission: "Automatic",
                Fuel: "Petrol",
                Passenger: "2",
                price: 500,
                image: "/assets/rent-in-jaipur-scooty.png",
            },
        ]
    }

    const sectionData = [
        {
            id: 1,
            title: `Explore Jaipur with Scooty On Rent in Jaipur`,
            description: `
Traveling to Jaipur is an adventure waiting to unfold, and what better way to explore this magnificent city than with a Scooty rental? Scooties offer the perfect solution for navigating Jaipur's bustling streets and hidden corners. With the freedom to roam at your own pace, you can visit iconic landmarks like the Hawa Mahal and the City Palace, or venture into the lesser-known areas that showcase the city's rich culture and history.

At Jojo Bike Rentals, we understand the importance of convenience and comfort. Our Scooties are well-maintained and come equipped with essential safety gear, ensuring a secure and enjoyable ride. Whether you're traveling solo or with friends, renting a Scooty allows you to experience Jaipur in a unique and personal way.

Our rental process is simple and efficient, allowing you to focus on creating unforgettable memories. With competitive pricing and a commitment to customer satisfaction, Jojo Bike Rentals is your go-to choice for exploring the Pink City. Don't miss out on the opportunity to discover Jaipur's beauty and charm—rent a Scooty today and embark on an unforgettable journey!
`
        },
        {
            id: 2,
            title: `Get the Premium Range of Scooty On Rent in Jaipur`,
            description: `Find the wide range of Premium Scooty on Rent in Jaipur at affordable prices on Jojo bike rental. For a comfortable and smooth ride in the city and crowded places. What could be better than a Scooty? Scooty is the most convenient and easy-to-maintain vehicle that comes with some storage space to store your items. Jojo bike rental offers you the premium collection of Scooty in the best condition. Roam around the Jaipur one a Scooty and feel the essence of Jaipur by renting a Scooty at affordable prices. Traveling on a Scooty with family and friends is more fun and a hassle-free ride experience. Jojo bike rental provides you the Scooty and support for a responsive ride and following all the traffic rules. `
        },
        {
            id: 3,
            title: `Explore Jaipur with Activa on Rent in Jaipur`,
            description: `One of the best ways to give a break to your stressful life is traveling. What could be better than traveling to Jaipur, Rajasthan? Here you can enjoy the Rajasthani tradition or many historical places, and many more. Jojo bike rental provides a premium range of activa on rent in Jaipur to explore Jaipur conveniently.

By hiring an activa on rent in Jaipur, you can directly save your time and money spent on public transport. Jojo bike rental provides a hassle-free transportation medium with proper documentation and safety equipment. You can go anywhere you want in Jaipur and enjoy the beauty of Jaipur - the Pink city of India.`
        },
        {
            id: 4,
            title: `Hire An Activa on Rent in Jaipur in Simple Clicks `,
            description: `Hiring a vehicle for rent is such a painful and time taking procedure. But with us, you can book an activa on rent in Jaipur with some simple clicks. With the help of technology, you can book an activa with just simple clicks, and this complete procedure will only take a few minutes.

Travel around Jaipur hassle-free by renting an activa and enjoy the essence of royalty of Rajasthan in Jaipur. Activa is a family-friendly and very convenient vehicle. You can take it wherever you want to visit Jaipur.`
        },
    ]

    const HeroData = {
        videoUrl: '/assets/about-bg.mp4',
        title: 'Rent a Scooter at Jojo bike rentals'
    }

    const whyJojoBikes = [
        {
            id: 1,
            title: 'Premium Range of Activa',
            description: 'Choose from our wide selection of premium scooters and activas in excellent condition.',
            icons: '🛵',
            features: ['Sanitized vehicles', 'Best condition scooters', 'Multiple models available']
        },
        {
            id: 2,
            title: 'Complete Documentation',
            description: 'We provide all necessary paperwork and documentation for a hassle-free rental experience.',
            icons: '📄',
            features: ['Rental agreement', 'Insurance coverage', 'Valid permits']
        },
        {
            id: 3,
            title: 'Safety First',
            description: 'Your safety is our priority. We provide essential safety gear with every rental.',
            icons: '⛑️',
            features: ['Quality helmets', 'Scooter locks', 'Sanitized vehicles']
        },
        {
            id: 4,
            title: 'Customer Support',
            description: '24/7 dedicated support for all your rental needs and queries.',
            icons: '🤝',
            features: ['24/7 assistance', 'Professional guidance', 'Emergency support']
        },
        {
            id: 5,
            title: 'Affordable Pricing',
            description: 'Competitive rates with no hidden charges for the best value.',
            icons: '💰',
            features: ['Transparent pricing', 'Flexible packages', 'Best market rates']
        },
        {
            id: 6,
            title: 'Satisfactory Services',
            description: 'We ensure complete customer satisfaction with our quality services.',
            icons: '⭐',
            features: ['Well-maintained vehicles', 'Timely service', 'Customer-focused approach']
        }
    ]
    const title = "Our Pricing Includes"

    return (
        <>
            <Hero data={HeroData} />
            <BikeSlider BikesData={BikesData} />
            <RentalBike data={BikesOnRent} />
            <SectionData data={sectionData} />
            <WhyJojoBikes WhyJojoBikesData={whyJojoBikes} title={title} />
        </>
    )
}

export default BikeRentInJaipur