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




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
  const Footer = () => {

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <footer className="footer footer-center  w-full p-4 bg-gray-300 text-gray-800">
      <div className="text-center">
        <p>
          Copyright © 2022 -
          <a className="font-semibold" href="mailto:m.sohanemon@gmail.com"
            >SohanEmon</a
          >
        </p>
      </div>
    </footer>
        </>
      )}
    </Disclosure>
  )
}

export default Footer;