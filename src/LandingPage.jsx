import { useState } from "react"
import roland_portrait from "../public/roland_portrait.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

function Header(){

    const [isOpen, setIsOpen] = useState(false)

    const handleBurgerClick = () =>{
        setIsOpen(!isOpen)
        console.log('burger clicked', isOpen)
    }

    return(
        <>
            <header className="flex min-w-screen justify-center">
                <a href="#" className="text-2xl font-bold py-2 px-1 absolute">roland.dev</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 absolute right-2 top-2 hover:cursor-pointer p-2 hover:size-14 hover:top-1 xsm:hover:right-1 z-20 hidden" onClick={handleBurgerClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <HiBars3 className="size-12 absolute right-2 top-2 hover:cursor-pointer p-2 hover:size-14 hover:top-1 xsm:hover:right-1 z-20" onClick={handleBurgerClick}/>

                {isOpen && 
                    <nav className="flex flex-col bg-white border-2 border-slate-500 absolute w-full min-h-64 pt-14 text-center">
                        <a href="#about" className="text-xl py-3 hover:bg-slate-700 hover:text-white h-full transition-all duration-200">About</a>
                        <a href="#" className="text-xl py-3 hover:bg-slate-700 hover:text-white h-full transition-all duration-200">Projects</a>
                        <a href="#" className="text-xl py-3 hover:bg-slate-700 hover:text-white h-full transition-all duration-200">Contact</a>
                    </nav>
                }
            </header>
        </>
    )
}

function Hero(){
    const handleDownload = () => {
        console.log("Downloading...")
    }
    return(
        <section id="intro" className="flex flex-col my-20 w-full min-h-intro md:flex-row md:my-32">
            <img src={roland_portrait} alt="roland_portrait" 
            className="rounded-full w-40 h-40 shadow-2xl shadow-black mx-auto hover:cursor-pointer hover:scale-150 transition-all duration-150 sm:h-52 sm:w-52"/>
            <div className="flex flex-col align-center text-center mt-10">
                <p className=" text-slate-700">Hello, I&apos;m</p>
                <h3 className="text-4xl font-bold">Roland Huang</h3>
                <h4 className="text-slate-700 text-2xl">Frontend Developer</h4>
                <div className="grid grid-flow-col gap-4 w-full justify-center my-10">
                    <button className="w-40 h-10 border-2 text-slate-800 border-slate-700 rounded-full hover:bg-slate-700 hover:text-white duration-200" onClick={handleDownload}>Download CV</button>
                    <FaGithub className=" size-8 m-1 hover:scale-150 transition-all duration-200 hover:cursor-pointer"/>
                    <FaLinkedin className=" size-8 m-1 hover:scale-150 transition-all duration-200 hover:cursor-pointer"/>
                    
                </div>
            </div>
           </section> 
    )
}

function About(){
    return(
        <section id="about" className="bg-slate-800 w-full min-h-about mt-20 text-slate-200">
            <h1>Hello World!</h1>
        </section>
    )
}

function Body(){
    return(
        <>
            <Header />
            <Hero />
            <About />
        </>
    )
}

export default function LandingPage(){
    return(
        <div className="min-h-screen min-w-screen bg-slate-100 font-poppins">
            
            <Body />
        </div>
    )
}