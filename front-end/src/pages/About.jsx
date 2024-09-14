import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const About = () => {
  return (
    <div>
      {/* Uncomment and pass appropriate props once you integrate the NavBar */}
      {/* <NavBar isLoggedIn={false} activeTab="about" /> */}
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
          <div className="space-y-8">
            <section className="text-lg text-gray-600">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Who We Are</h2>
              <p>
                Welcome to ProLister, your go-to platform for finding the best rental properties. We are
                committed to providing an efficient and user-friendly experience for both renters and property
                owners. Whether you're looking for a cozy apartment or a spacious home, our listings are
                carefully curated to match your preferences.
              </p>
            </section>

            <section className="text-lg text-gray-600">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Mission</h2>
              <p>
                At ProLister, our mission is to make property renting simple, transparent, and accessible for
                everyone. We believe in connecting renters with their perfect homes through advanced search
                tools, detailed property listings, and a seamless user experience.
              </p>
            </section>

            <section className="text-lg text-gray-600">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Wide range of rental property listings, updated regularly.</li>
                <li>Interactive map views to explore properties by location.</li>
                <li>Advanced search filters for a personalized experience.</li>
                <li>User reviews and ratings for transparency.</li>
                <li>Dedicated support team to assist with any queries.</li>
              </ul>
            </section>

            <section className="text-lg text-gray-600">
              <h2 className="text-3xl font-semibold text-gray-700 mb-4">Contact Us</h2>
              <p>
                Have questions? Feel free to <a className="text-blue-500 underline cursor-pointer" href="https://www.linkedin.com/in/aymenajinou/">contact us</a>. 
                We're here to help you every step of the way in finding your next rental property.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
