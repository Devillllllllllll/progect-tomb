import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import './tailwind.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AuthContext, AuthProvider } from './Auth'
import firebaseConfig from '../config'
import LogIn from './LogIn'


const navigation = [
  { name: 'จัดการข้อมูล', href: 'dashboard', currentNav: true },
  { name: 'เพิ่มข้อมูล', href: 'inputdata', currentNav: false },
  { name: 'แก้ไขข้อมูล', href: 'editdata', currentNav: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  const Navbars = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-14 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="false" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    className="block h-9 w-auto lg:hidden"
                    src="https://cdn-icons-png.flaticon.com/512/5783/5783177.png"
                    alt="Your Company"
                  />
                </a>
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    className="hidden h-9 w-auto lg:block"
                    src="https://cdn-icons-png.flaticon.com/512/5783/5783177.png"
                    alt="Your Company"
                  />
                </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.currentNav ? 'no-underline bg-gray-900 text-white' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.currentNav ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              {currentUser ? (
                    
                  <button onClick={() => firebaseConfig.auth().signOut()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
                    
                ) : (
                  // <button onClick={() => firebaseConfig.auth().logIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                  // <button onClick={() => firebaseConfig.auth().signIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                  <p><Link to="LogIn" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Log In</Link></p>         
                )}

            
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.currentNav ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.currentNav ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbars;