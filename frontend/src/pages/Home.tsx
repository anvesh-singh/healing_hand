import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import LocomotiveScroll from "locomotive-scroll";

export const Home = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth",});
    }
  };
  return (
    <div className="bg-black">
        <div data-scroll
        data-scroll-section
        data-scroll-speed="-.6">
          <div className="w-full tracking-wider h-[8vh] pt-4 grid text-white font-bold text-3xl bg-black place-content-center">
            Healing Hand
          </div>
          <div className="w-full flex h-[8vh] bg-black items-center justify-between px-9">
            <div className="text-white flex items-center">
              {/* <CiSearch className='font-bold'/> */}
              <form>
                <div className="relative ml-2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 -ml-2 dark:text-gray-100"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-[13vw] tracking-widest p-2 ps-9 text-md border-b-[1px] hover:border-[#AB98FF] text-white dark:bg-black"
                    placeholder="Search..."
                    required
                  />
                  {/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
              </form>
            </div>
            {localStorage.getItem("token")== null && <div className="">
              {["signup", "signin"].map((item, index) => (
                <Link
                  to={`/${item}`}
                  key={index}
                  className={`text-lg p-8 py-2 tracking-wider capitalize font-normal text-white hover:text-[#AB98FF] hover:border-[1px] transition duration-200 ease-in hover:border-[#AB98FF] visited:text-white  ${
                    index === 0 && "ml-[34vw] capitalize"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
            }
          </div>

          {/* <div className=' fixed z-[999] size-16 w-[100vw] px-20 py-0 flex justify-between items-center text-black backdrop-blur-lg bg-[#2b8e72]'>    
       
    </div> */}
          {/* herosection */}

          <div
            className="relative h-[90vh] bg-cover bg-center font-sans"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/doctor-presenting-recovery-plan_23-2148813435.jpg?t=st=1713734389~exp=1713737989~hmac=361f97557186b1a2699fa12655db3da3f013e5dbc29e51257b515815911457c2&w=1380')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container mx-auto px-4 flex flex-col items-center justify-center relative z-10">
              <div className="flex flex-col text-center space-y-9  mt-[25vh] ">
                <h1 className="text-8xl pb-6 font-bold text-white">
                  Quality Care You Can Trust
                </h1>
                <p className="text-xl text-white">
                  Our Family is Here for Yours
                </p>
                <p className="text-base leading-relaxed text-white -mt-6">
                  Welcome to Healing Hand, the healthcare app for Bartholomew's
                  Hospital. Our top priority is to treat our patients like
                  family. Scroll down to learn more about how we can serve you.
                </p>
                <button  onClick={() => scrollToSection("ourservices")} className="relative overflow-hidden px-3 py-2 w-[16vw] ml-[34vw] text-white rounded-3xl focus:outline-none transition duration-300 ease-in hover:bg-white hover:text-gray-600">
                  <span className="absolute inset-0 border-2 rounded-3xl opacity-50"></span>
                  <span className="relative z-10">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div data-scroll
          data-scroll-section
          data-scroll-speed=".2" className="-mt-12">
        {/* latest news  */}
        <div className="section rounded-t-3xl bg-gradient-to-b from-[#635892] to-black py-20"
        >
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-6xl font-bold text-white border-b-[1px] pb-8">
              Latest News
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 text-white">
              <div className="flex flex-col items-center justify-center p-8 text-white rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Revolutionizing Healthcare Services with Technology
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  In today's fast-paced world, convenience and accessibility are
                  key factors in every aspect of our lives, including
                  healthcare. Technology is rapidly transforming the healthcare
                  industry, making it easier and more convenient for patients to
                  access the care they need.
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Enhancing Communication in Healthcare
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  In today's fast-paced world, technology has become an integral
                  part of our lives, and the healthcare industry is no
                  exception. Telemedicine and other communication technologies
                  are making it easier for patients to connect with doctors and
                  other healthcare providers, regardless of location.
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col items-center justify-center p-8  rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Improving Healthcare Access with Telemedicine
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  In today's fast-paced world, convenience and accessibility are
                  key factors in every aspect of our lives, including
                  healthcare. Telemedicine is making it possible for people in
                  remote areas or with limited mobility to access quality
                  healthcare services.
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* schedule an appointment  */}
        <div className="bg-gradient-to-b h-screen from-black to-[#635892] pt-0">
          <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between h-screen">
            <div className="w-full relative md:w-2/3 text-center md:text-left pb-8 md:pb-0 -mt-16">
              <h1 className="text-6xl font-bold text-white">
                Schedule an Appointment Today
              </h1>
              <p className="text-xl text-gray-200 pt-10 w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et
                orci id libero mollis euismod. In hac habitasse platea dictumst.
                Maecenas ut magna mollis, venenatis magna nec, tincidunt mauris.
              </p>
              <button className="absolute left-[80%] top-[28vh] py-2 mt-8 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                Book Now
              </button>
            </div>
            <div className="w-full md:w-1/3 flex justify-center items-end">
              <img
                className="w-full md:w-3/4 h-auto object-cover rounded-lg shadow-md"
                src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?t=st=1713736471~exp=1713740071~hmac=388ac30480cdd711df3d3aada4e8671c3f539fae65008d65a055637acb47b1ff&w=900"
                alt="Schedule an appointment"
              />
            </div>
          </div>
        </div>
        {/* our services  */}
        <div id="ourservices" className="ourservices bg-gradient-to-b from-[#635892] to-black pt-40 pb-56">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold text-white border-b-[1px] pb-8">
              Our Services
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  pt-20">
              <div className="flex flex-col items-center justify-center p-8 text-white rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Community Health
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  {" "}
                  Our commitment to quality care is unmatched. Discover the
                  important benefits and key advantages of choosing Healing
                  Hand.
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-white rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Our Services
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  {" "}
                  Excellence Guaranteed. At Healing Hand, we have the
                  credentials, benefits, and special features that set us apart
                  from the competition. Experience excellence with us!
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-white rounded-lg shadow-md">
                <img
                  src="https://static.wixstatic.com/media/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg/v1/fill/w_579,h_578,fp_0.50_0.50,q_90,enc_auto/11062b_1df6e9fbdb584604802317b4f96e7aa3~mv2.jpg"
                  alt="Bus"
                  className="w-80 h-72 mb-1"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  Health Programs
                </h3>
                <p className="text-gray-200 text-center border-b-[1px] pb-4 border-gray-600">
                  {" "}
                  Find the perfect program to fit your needs. We offer a wide
                  range of health and wellness programs to help you achieve your
                  goals.
                </p>
                <button className="mt-4 py-2 bg-[#AB98FF] rounded-none text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* footer  */}
        <div className="bg-black py-20 h-screen ">
          <div className="container mx-auto border-t-[1px] px-4 flex flex-col md:flex-row md:items-center justify-between gap-16">
            <div className="w-full md:w-1/2 flex -mt-[30vh]">
              <p className="text-gray-300 font-bold text-3xl pb-14">
                Healing Hand
              </p>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left pb-8 md:pb-0 space-y-4 pt-28">
              <div className="w-full  flex justify-center items-center pb-48">
                <div className="text-center space-y-2">
                  <p className="text-gray-300 text-base">
                    123-456-7890 (not Barts)
                  </p>
                  <p className="text-gray-300 text-base">info@mysite.com</p>
                  <p className="text-gray-300 text-base w-96">
                    Pathology Museum, North Wing, St Bartholomew's Hospital, W
                    Smithfield, London EC1A 7BE, UK
                  </p>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white pb-10">
                Stay Informed, Join Our Newsletter
              </h1>
              <p className="text-gray-300 text-xl pb-3">
                Sign up for our newsletter to receive the latest news and
                updates from Healing Hand.
              </p>
              <form
                action="#"
                method="POST"
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email here *"
                    required
                    className="px-4 py-2 text-sm border-b-[1px] text-white dark:bg-black "
                  />
                  <button
                    type="submit"
                    className="ml-4 py-2 bg-[#AB98FF] rounded-3xl text-white px-6 transition duration-300 ease-in hover:bg-black hover:text-white focus:outline-none focus:ring-white focus:ring-1"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </div>

  );
};
