import Image from "next/image";
import Link from "next/link";

export default function FeaturesBlocks() {
  return (
    <section className="relative z-10">
<div className="absolute inset-0 inset-x-0 bg-black -z-10 w-screen top-[1040px] lg:top-[540px] xl:top-[540px] md:top-[680px] sm:top-[540px] iphone-se:top-[1110px] iphone-xr:top-[1025px] iphone-12-pro:top-[1080px] pixel-7:top-[1030px] galaxy-s8-plus:top-[1130px] ipad-pro:top-[570px] surface-pro:top-[650px] surface-duo:top-[980px] galaxy-z-fold:top-[810px]zenbook-fold:top-[560px]"></div>

      {/* Section background */}
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 sm:mt-10 md:mt-10 lg:mt-0">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-11">
            <h2 className="h2 mb-4 mt-20 lg:mt-0 xl:mt-0">Our Services</h2>
            <p className="text-xl text-gray-600">
              Our services are tailored for the digital age. From AI analytics to custom software, we're your partners in progress, dedicated to driving efficiency and fostering growth for your business.
            </p>
          </div>

          {/* Grid layout for services */}
          <div className="relative">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mx-auto max-w-full w-full">
                {/* Service 1 */}
                <Link
                  href="/quantitative-algorithms"
                  className="relative flex flex-col items-center text-center gap-4 p-12 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src="/images/custom-algo.svg"
                      width={64}
                      height={64}
                      alt="Quantitative Algorithms"
                      className="filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Quantitative Algorithms
                  </h4>
                  <p className="text-gray-600 text-center">
                    Maximize Returns, Minimize Risk, and Gain a Competitive Edge with Our Custom Quantitative Trading Solutions
                  </p>
                </Link>

                {/* Service 2 */}
                <Link
                  href="/gpt-integration"
                  className="relative flex flex-col items-center text-center gap-4 p-12 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src="/images/rigor.svg"
                      width={64}
                      height={64}
                      alt="GPT Integration Services"
                      className="filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    GPT Integration Services
                  </h4>
                  <p className="text-gray-600 text-center">
                    Transform Your Operations, Boost Efficiency, and Drive Growth with Our Cutting-Edge GPT Solutions
                  </p>
                </Link>

                {/* Service 3 */}
                <Link
                  href="/chatbots"
                  className="relative flex flex-col items-center text-center gap-4 p-12 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src="/images/seamless.svg"
                      width={64}
                      height={64}
                      alt="E-Commerce Chatbots"
                      className="filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    E-Commerce Chatbots
                  </h4>
                  <p className="text-gray-600 text-center">
                    Enhance Customer Experience, Boost Sales, and Streamline Support with Our AI-Powered Chatbot Solutions
                  </p>
                </Link>

                {/* Service 4 */}
                <Link
                  href="/custom-gpt-solutions"
                  className="relative flex flex-col items-center text-center gap-4 p-12 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src="/images/realtime.svg"
                      width={64}
                      height={64}
                      alt="Custom GPT Models"
                      className="filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Custom GPT Models
                  </h4>
                  <p className="text-gray-600 text-center">
                    Revolutionize Your Operations, Enhance Customer Engagement, and Drive Innovation with Our Tailored GPT Solutions on the OpenAI GPT Store
                  </p>
                </Link>

                {/* Service 5 */}
                <Link
                  href="/intelligent-automation"
                  className="relative col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-2 flex flex-col items-center text-center gap-4 p-16 bg-white rounded shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Image
                      src="/images/ongoing.svg"
                      width={64}
                      height={64}
                      alt="Intelligent Automation Systems"
                      className="filter invert"
                    />
                  </div>
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                    Intelligent Automation Systems
                  </h4>
                  <p className="text-gray-600 text-center">
                    Boost Efficiency, Save Time, and Simplify Workflows with Our Powerful Automation Solutions Powered by Make.com and Zapier
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
