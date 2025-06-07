'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const menuItems = [
    {
      name: 'New & Featured',
      href: '/new',
      dropdown: [
        {
          title: 'Featured',
          items: [
            'New & Upcoming Drops',
            'New Arrivals',
            'Bestsellers',
            'SNKRS Launch Calendar',
            'Customize with Nike By You',
            'Jordan'
          ]
        },
        {
          title: 'Trending',
          items: [
            'Summer Essentials',
            'Air Max Day',
            "What's Trending",
            'Nike 24/7',
            'Colours of the Season: Pastel',
            'Retro Running',
            'Running Shoe Finder'
          ]
        },
        {
          title: 'Shop Icons',
          items: [
            'Lifestyle',
            'Air Force 1',
            'Air Jordan 1',
            'Air Max',
            'Dunk',
            'Cortez',
            'Blazer',
            'Pegasus',
            'Vomero'
          ]
        }
      ]
    },
    {
      name: 'Men',
      href: '/men',
      dropdown: [
        {
          title: 'Featured',
          items: [
            'New Arrivals',
            'Bestsellers',
            'Shop All Sale'
          ]
        },
        {
          title: 'Shoes',
          items: [
            'All Shoes',
            'Lifestyle',
            'Jordan',
            'Running',
            'Football',
            'Basketball',
            'Gym and Training',
            'Skateboarding',
            'Sandals and Slides',
            'Nike By You'
          ]
        },
        {
          title: 'Clothing',
          items: [
            'All Clothing',
            'Tops and T-Shirts',
            'Shorts',
            'Pants and Leggings',
            'Hoodies and Sweatshirts',
            'Jackets and Gilets',
            'Jerseys and Kits',
            'Jordan'
          ]
        },
      ]
    },
    {
      name: 'Women',
      href: '/women',
      dropdown: [
        {
          title: 'Featured',
          items: [
            'New Arrivals',
            'Bestsellers',
            'Shop All Sale'
          ]
        },
        {
          title: 'Shoes',
          items: [
            'All Shoes',
            'Lifestyle',
            'Jordan',
            'Running',
            'Gym and Training',
            'Football',
            'Basketball',
            'Sandals and Slides',
            'Nike By You'
          ]
        },
        {
          title: 'Clothing',
          items: [
            'All Clothing',
            'Performance Essentials',
            'Tops and T-Shirts',
            'Sports Bras',
            'Pants and Leggings',
            'Shorts',
            'Hoodies and Sweatshirts',
            'Jackets and Gilets',
            'Skirts and Dresses',
            'Modest Wear',
            'Nike Maternity',
            'Plus Size'
          ]
        },
      ]
    },
    {
      name: 'Kids',
      href: '/kids',
      dropdown: [
        {
          title: 'Featured',
          items: [
            'New Arrivals',
            'Bestsellers',
            'Back to School',
            'Sport Gear',
            'Lifestyle Looks'
          ]
        },
        {
          title: 'Shoes',
          items: [
            'All Shoes',
            'Lifestyle',
            'Jordan',
            'Football',
            'Running',
            'Basketball'
          ]
        },
        {
          title: 'Clothing',
          items: [
            'All Clothing',
            'Tops and T-Shirts',
            'Sport Bras',
            'Hoodies and Sweatshirts',
            'Pants and Leggings',
            'Shorts',
            'Jackets and Gilets'
          ]
        },
        {
          title: 'Kids By Age',
          items: [
            'Older Kids (7 - 14 years)',
            'Younger Kids (4 - 7 years)',
            'Babies & Toddlers (0 - 4 years)'
          ]
        }
      ]
    },
    {
      name: 'Sale',
      href: '/sale',
      dropdown: [
        {
          title: 'Sale & Offers',
          items: [
            'Shop All Sale',
            'Bestsellers',
            'Last Chance'
          ]
        },
        {
          title: "Men's Sale",
          items: [
            'Shoes',
            'Clothing',
            'Accessories and Equipment'
          ]
        },
        {
          title: "Women's Sale",
          items: [
            'Shoes',
            'Clothing',
            'Accessories and Equipment'
          ]
        },
        {
          title: "Kids' Sale",
          items: [
            'Shoes',
            'Clothing',
            'Accessories and Equipment'
          ]
        }
      ]
    },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold">NIKE</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 relative">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeMenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-max bg-white shadow-lg rounded-md py-4 px-6 z-50"
                      style={{ minWidth: '600px' }}
                    >
                      <div className="grid grid-cols-3 gap-8">
                        {item.dropdown.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-sm font-bold mb-3 uppercase">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="text-sm text-gray-600 hover:text-black"
                                  >
                                    {subItem}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth and Cart Links */}
          <div className="flex items-center space-x-4">
            {/* Auth Links */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-sm text-gray-700">Welcome, {user.email}</span>
                  <button
                    onClick={() => logout()}
                    className="text-sm text-gray-700 hover:text-black"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="text-sm text-gray-700 hover:text-black"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="text-sm text-gray-700 hover:text-black"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Cart Icon */}
            <Link href="/cart" className="relative text-gray-700 hover:text-black">
              <ShoppingCartIcon className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4">
                  {item.dropdown.map((section, index) => (
                    <div key={index} className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-500 px-3 py-1">{section.title}</h4>
                      <ul className="space-y-1">
                        {section.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={`${item.href}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-gray-700 hover:text-black block px-3 py-1 text-sm"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {user ? (
            <>
              <div className="px-3 py-2 text-base font-medium text-gray-700">
                Welcome, {user.email}
              </div>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium w-full text-left"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Cart Link in Mobile Menu */}
          <Link
            href="/cart"
            className="text-gray-700 hover:text-black block px-3 py-2 text-base font-medium relative"
            onClick={() => setIsOpen(false)}
          >
            Cart ({totalItems})
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
