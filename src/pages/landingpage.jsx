import React from 'react';

const LandingPage = () => {
  // Fungsi toggleMenu harus didefinisikan di dalam komponen React
  const toggleMenu = () => {
    const subMenu = document.getElementById("subMenu");
    if (subMenu) {
      subMenu.classList.toggle("open-menu");
    }
  };

  return (
    <div className="w-full">
      <section className="header">
        <a href="#">
          <img
            src="image/logo cadetblue.png"
            width="200px"
            height="auto"
            className="logo"
            alt=""
          />
        </a>

        <div>
          <ul className="navbar">
            <div className="search">
              <input type="text" placeholder="Search" />
              <a href="#">
                <i className="fas fa-search"></i>
              </a>
            </div>
            <div className="phonesearch">
              <i className="fas fa-search" id="phone-search-icon"></i>
            </div>
            <li><a className="active" href="index.html">Home</a></li>
            <li><a href="articels.html">Articels</a></li>
            <li><a href="createArticel.html">Create Articels</a></li>
            <li>
              <a href="#">
                <img
                  src="image/profile icon.png"
                  className="image-profile"
                  onClick={toggleMenu}
                  alt=""
                />
                <div className="sub-menu-wrap" id="subMenu">
                  <div className="sub-menu">
                    <div className="user-info">
                      <img
                        src="image/profile icon.png"
                        width="60px"
                        height="auto"
                        alt=""
                      />
                      <h3>John Smith</h3>
                    </div>
                    <hr className="sub-menu-hr" />
                    <a href="editProfile.html" className="sub-menu-link">
                      <p>Edit Profile</p>
                      <span></span>
                    </a>

                    <a href="setting&privacy.html" className="sub-menu-link">
                      <p>Setting & Privacy</p>
                      <span></span>
                    </a>
                    <a href="help&support.html" className="sub-menu-link">
                      <p>Help & Support</p>
                      <span></span>
                    </a>
                    <a href="logOut.html" className="sub-menu-link">
                      <p>Log Out</p>
                      <span></span>
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
