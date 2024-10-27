import React from "react";

const Footer = () => {
    return(
    <footer className="py-6 md:px-8 md:py-0 bg-secondary text-white">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose md:text-left">
          email address: abc12345@abcde.com
        </p>
      </div>
    </footer>
    )
};

export default Footer;