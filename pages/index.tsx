import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import merlion from "../assets/merlion-icon.png";
import logo from "../assets/ogp-logo-spacing.png";
import whoweare from "../assets/who-we-are.svg";
import solve from "../assets/solve.svg";
import build from "../assets/build.svg";
import push from "../assets/push.svg";
import vaccination from "../assets/VaccOps_nobg.png";
import parking from "../assets/parkingsg_nobg.png";
import gogovsg from "../assets/go.gov.sg_nobg.png";
import scamshield from "../assets/scamshield_nobg.png";
import formsg from "../assets/formsg_nobg.png";
import manager from "../assets/product-manager.svg";
import software from "../assets/software-engineer.svg";
import designer from "../assets/product-designer.svg";
import interns from "../assets/interns.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { VscChevronDown } from "react-icons/vsc";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>(Clone) Open Government Products</title>
        <meta
          name="description"
          content="A clone of Open Government Products website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}
      <div className="flex justify-center w-full cursor-pointer bg-[#f0f0f0]">
        <div className="flex items-center justify-center w-full lg:max-w-5xl lg:justify-start lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <Image
            src={merlion}
            alt="merlion icon"
            layout="fixed"
            width={20}
            height={20}
          />
          <span className="px-1 text-xs py-[10px] text-[#484848]">
            (NOT) A Singapore Government Agency Website - Just a clone for a
            personal project!
          </span>
        </div>
      </div>

      {/* <Navbar /> */}
      <div className="flex justify-center shadow-md h-[100px]">
        <div className="flex items-center justify-center w-full max-w-5xl px-3 lg:px-7 xl:justify-between xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <div>
            <Image
              src={logo}
              layout="fixed"
              alt="open gov logo"
              height={46.7}
              width={200}
              className="cursor-pointer"
            />
          </div>
          <div className="nav-link">
            ABOUT US
            <VscChevronDown className="chevron" />
          </div>
          <div className="nav-link">
            CAREERS
            <VscChevronDown className="chevron" />
          </div>
          <div className="nav-link">
            PRODUCTS
            <VscChevronDown className="chevron" />
          </div>
          <div className="nav-link">COVID-19</div>
          <div className="nav-link">
            HACKATHON
            <VscChevronDown className="chevron" />
          </div>
          <div className="nav-link">
            MORE
            <VscChevronDown className="chevron" />
          </div>
          <div className="nav-link">CONTACT US</div>
          <div className="hidden w-20 ml-20 1.5xl:ml-36 xl:block">
            <RiSearchLine
              size="1.4rem"
              className="ml-auto cursor-pointer"
              // onClick={() => setSearch(!search)}
            />
          </div>
          <HiOutlineMenu size="1.4rem" className="ml-auto mr-6 xl:hidden" />
        </div>
      </div>

      {/* Main */}
      <div className="relative bg-top bg-cover bg-public-good">
        <div className="flex items-center px-6 py-12 mx-auto h-[450px] lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <h1 className="font-bold text-[6.4vw] lg:text-[4.7vw] xl:text-[4vw]">
            We build tech
            <br />
            for <span className="text-gov"> public good.</span>
          </h1>
        </div>
      </div>

      {/* Who we are */}
      <div className=" bg-black">
        <div className="flex flex-col items-center px-6 py-12 mx-auto md:grid grid-cols-5 grid-flow-row-dense lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <div className="md:col-span-2">
            <Image src={whoweare} alt="who we are" />
            <p className="mt-6 text-white">
              We are an experimental development team built from the ground up
              to function like a modern tech company working on public sector
              problems.
            </p>
          </div>
          <div className="mt-4 md:mt-0 w-max md:col-span-3 md:justify-self-end md:self-center">
            <div className="black-button">MORE ABOUT US</div>
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className="px-6 py-12 mx-auto lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
        <h1 className="mt-16 mb-12 font-semibold text-center text-gov text-[28px] md:text-[32px]">
          At Open Government Products, we:
        </h1>
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3">
          <div className="flex flex-col items-center px-3 pb-8">
            <Image src={solve} alt="solve real problems" />
            <h2 className="do-subheader">Solve Real Problems</h2>
            <p className="do-para">
              Work on meaningful projects from communications to healthcare. Use
              your skills to fix actual problems in the community, not to
              optimise profit.
            </p>
          </div>
          <div className="flex flex-col items-center px-3">
            <Image src={build} alt="build for the user" />
            <h2 className="do-subheader">Build for the User</h2>
            <p className="do-para">
              Design and build products based on what real people actually need,
              whether they are members of the public or public servants.
            </p>
          </div>
          <div className="flex flex-col items-center px-3">
            <Image src={push} alt="push for change" />
            <h2 className="do-subheader">Push For Change</h2>
            <p className="do-para">
              Actively prototype and evangelize ideas to make real things
              happen. Work around or cut through bureaucracy.
            </p>
          </div>
        </div>
      </div>

      {/* Thing's we've made */}
      <div className="bg-[#f7f7f7]">
        <div className="px-6 py-12 mx-auto lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <h2 className="text-center text-[#767676]">PRODUCTS</h2>
          <h1 className="mb-24 font-bold text-center text-gov text-[54px]">
            Things we've made
          </h1>
          <div className="grid-res-2">
            <div className="self-center order-1 px-3 md:px-6 lg:px-12 xl:px-28">
              <Image src={vaccination} alt="covid-19 vaccination booking" />
            </div>
            <div className="self-center order-2 px-6 md:px-16 md:py-8">
              <h2 className="made-subheader">COVID-19 Vaccination Booking</h2>
              <p className="mt-4 made-para">
                Suite of systems enabling Singaporeans to book their COVID-19
                vaccination appointments.
              </p>
              <div className="mt-8 white-button">LEARN MORE</div>
            </div>
          </div>
          <div className="grid-res-2">
            <div className="self-center order-1 px-3 lg:order-2 md:px-6 lg:px-12 xl:px-28">
              <Image src={parking} alt="parking.sg" />
            </div>
            <div className="self-center order-2 px-6 lg:order-1 md:px-16 md:py-8">
              <h2 className="made-subheader">Parking.SG</h2>
              <p className="mt-4 made-para">
                Parking.sg is a mobile application that allows drivers to pay
                for their parking sessions, receive reminders, and extend their
                parking sessions, straight from their mobile phones.
              </p>
              <div className="mt-8 white-button">LEARN MORE</div>
            </div>
          </div>
          <div className="grid-res-2">
            <div className="self-center order-1 px-3 md:px-6 lg:px-12 xl:px-28">
              <Image src={gogovsg} alt="go.gov.sg" />
            </div>
            <div className="self-center order-2 px-6 md:px-16 md:py-8">
              <h2 className="made-subheader">Go.gov.sg</h2>
              <p className="mt-4 made-para">
                Go.gov.sg is the offical government link shortener, granting
                legitimacy to content shared by public officers.
              </p>
              <div className="mt-8 white-button">LEARN MORE</div>
            </div>
          </div>

          <div className="grid-res-2">
            <div className="self-center order-1 px-3 lg:order-2 md:px-6 lg:px-12 xl:px-28">
              <Image src={scamshield} alt="scamshield" />
            </div>
            <div className="self-center order-2 px-6 lg:order-1 md:px-16 md:py-8">
              <h2 className="made-subheader">ScamShield</h2>
              <p className="mt-4 made-para">
                ScamShield is a mobile app that actively works in the background
                to filter scam messages and calls from numbers used in illegal
                activities, preventing scammers from contacting you.
              </p>
              <div className="mt-8 white-button">LEARN MORE</div>
            </div>
          </div>
          <div className="grid-res-2">
            <div className="self-center order-1 px-3 md:px-6 lg:px-12 xl:px-28">
              <Image src={formsg} alt="formSG" />
            </div>
            <div className="self-center order-2 px-6 md:px-16 md:py-8">
              <h2 className="made-subheader">FormSG</h2>
              <p className="mt-4 made-para">
                FormSG is an electronic form builder with advanced features that
                allow public officers to build and launch forms within minutes.
              </p>
              <div className="mt-8 white-button">LEARN MORE</div>
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <div className="flex flex-col items-center">
              <h1 className="mt-16 font-bold text-center text-[32px] text-gov">
                Learn about the rest of our products.
              </h1>
              <div className="mt-4 border-black black-button hover:bg-transparent">
                PRODUCT OVERVIEW
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Careers Join us */}
      <div className="mt-10 bg-white">
        <div className="px-6 py-12 mx-auto lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <h2 className="text-center text-gov">CAREERS</h2>
          <h1 className="mb-24 font-bold text-center text-gov text-[54px]">
            Join us
          </h1>
          <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3">
            <div className="flex flex-col items-center px-3 pb-8">
              <Image src={manager} alt="product manager" />
              <h2 className="do-subheader">Product Manager</h2>
              <p className="do-para">
                You chart product goals. You plug gaps and gel things together
                to drive the project forward.
              </p>
              <div className="readmore">READ MORE</div>
            </div>
            <div className="flex flex-col items-center px-3">
              <Image src={software} alt="software engineer" />
              <h2 className="do-subheader">Software Engineer</h2>
              <p className="do-para">
                You solve problems. You design and build systems and make sure
                they work.
              </p>
              <div className="readmore">READ MORE</div>
            </div>
            <div className="flex flex-col items-center px-3">
              <Image src={designer} alt="product designer" />
              <h2 className="do-subheader">Product Designer</h2>
              <p className="do-para">
                You bridge user needs and business goals. You make the product
                work well and look good.
              </p>
              <div className="readmore">READ MORE</div>
            </div>
          </div>
        </div>
      </div>

      {/* INTERNS */}
      <div className=" bg-[#f7f7f7]">
        <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto lg:flex-row lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <div className="">
            <Image src={interns} alt="interns" />
          </div>
          <h2 className="mt-2 mb-4 text-3xl font-bold text-center text-black lg:my-0 lg:ml-4 lg:mr-12">
            are welcome all year round
          </h2>
          <div className="">
            <div className="border-black black-button hover:bg-transparent">
              LEARN MORE
            </div>
          </div>
        </div>
      </div>

      {/* Apply now */}
      <div className="bg-contain bg-people-pattern">
        <div className="flex flex-col items-center justify-center px-6 py-12 mx-auto lg:flex-row lg:max-w-5xl lg:px-7 xl:max-w-7xl 1.5xl:max-w-[1380px]">
          <div className="flex justify-center mb-4">
            <div className="flex flex-col items-center  lg:px-36">
              <h1 className="z-10 mt-16 font-bold text-center text-white text-[32px] lg:text-[44px]">
                Join us on our mission to build tech for public good.
              </h1>
              <div className="mt-4 text-white bg-transparent border-white black-button">
                APPLY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
