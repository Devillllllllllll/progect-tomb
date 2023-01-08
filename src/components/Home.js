import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './Auth'
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './Auth'


/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from './Footer';



const Home = () => {
    const { currentUser } = useContext(AuthContext);
    
    const navigation = []

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



    return (
        <>
            {/* Navbars */}
            <div className="isolate bg-white">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                    <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                        id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                        >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                    </svg>
                </div>
                <div className="px-6 pt-6 lg:px-8">
                    <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-12" src="https://cdn-icons-png.flaticon.com/512/5783/5783177.png" alt="" />
                        </a>
                        </div>
                        
                        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Log In</Link>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                        <div className="flex h-9 items-center justify-between">
                            <div className="flex">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                className="h-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                                />
                            </a>
                            </div>
                            <div className="flex">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            </div>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                            <div className="py-6">
                            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Log In</Link>
                            </div>
                            </div>
                        </div>
                        </Dialog.Panel>
                    </Dialog>
                    </div>
                </div>
                <main>
                    <div className="relative px-6 lg:px-8">
                    <div className="items-center mx-auto max-w-3xl pt-20 pb-32 sm:pt-16 sm:pb-40">
                        <div>
                    <div className="mx-auto block h-1/3 w-1/3 object-cover">
                        <div
                            className="mx-auto">
                            <img className="object-fill" src="images/tmlogo.png" alt="images"/>
                        </div>
                    </div><br></br>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                            ฌาปนสถานวัดสะพานสูง
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                            เพื่อการจัดการเกี่ยวกับข้อมูลของผู้วายชนได้อย่างสะดวก คณะพระนักศึกษามหาวิทยาลัยราชภัฎสวนสุนันทา ศูนย์การศึกษาวัดไตรมิตร จึงได้จัดทำเว็บไซต์ฐานข้อมูลนี้ขึ้น ด้วยการนำเอา Node.JS มาใช้พัฒนาเว็บไซต์ เพื่อจัดเก็บข้อมูลที่ให้สะดวกและง่ายต่อการสรุปผลของข้อมูล ในการตอบคำถามเบื้องต้นของผู้ที่ต้องการทราบข้อมูลต่างๆ เกี่ยวกับ จำนวนศพที่ทำการฌาปนกิจในแต่ละปี เป็นต้น
                            </p>
                            <div className="mt-8 flex gap-x-4 sm:justify-center">
                            <a
                                href="#"
                                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                            >
                                Get started{' '}
                                <span className="text-indigo-200" aria-hidden="true">
                                &rarr;
                                </span>
                            </a>
                            <a
                                href="#"
                                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                            >
                                Live demo{' '}
                                <span className="text-gray-400" aria-hidden="true">
                                &rarr;
                                </span>
                            </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </main>
            </div>

            {/* footer */}
            <Footer />


        </>
    )
}

export default Home;