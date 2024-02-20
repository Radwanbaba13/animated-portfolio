import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span> Radwan Baba</span>
        <div className="social">
          <a
            href="https://github.com/Radwanbaba13"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="GitHub"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/radwan-baba-80543019a/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
          </a>

          <a
            href="https://www.instagram.com/radwan.baba13/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
