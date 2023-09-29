import Link from 'next/link';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          {/* Search bar */}
          <div className="flex-1 flex justify-center">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* ...Search icon */}
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden sm:flex sm:ml-6 sm:flex-grow">
            <div className="flex space-x-4">
              {/* Menu items */}
              <NavItem href="/home" label="Home" />
              {isLoggedIn ? (
                <>
                  <NavItem href="/profile" label="Profile" />
                  <NavItem href="/signout" label="Sign out" />
                </>
              ) : (
                <>
                  <NavItem href="/signin" label="Sign in" />
                  <NavItem href="/register" label="Register" />
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* ...Mobile menu icon */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="bg-white px-2 pt-2 pb-3 space-y-1">
          {/* ...Mobile menu items */}
        </div>
      </div>
    </nav>
  );
};

// Component for individual menu items
const NavItem = ({ href, label }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
        {label}
      </a>
    </Link>
  );
};

export default Navbar;
