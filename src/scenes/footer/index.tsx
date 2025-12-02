import Logo from '@/assets/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-9">
      <div className="mx-auto w-5/6 max-w-[1200px] flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Левый блок — логотип */}
        <div className="flex items-center">
          <a href="/">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          </a>
        </div>

        {/* Центр — контакты */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h4 className="text-lg font-semibold">Brand Name</h4>
          <p>2 Rue du Port, 1204 Geneva - Switzerland</p>
          <p>
          <a href="tel:+477- 77- 77" className="footer-link">
            +41 (0)77- 77- 77
          </a> | 
          <a href="mailto:info@brandname.ch" className="footer-link">
            info@brandname.ch
          </a>

          </p>
        </div>

        {/* Правый блок — соцсети */}
        <div className="flex gap-4">
          <a href="#" className="footer-link">
            <span className="sr-only">Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 1 0-11 9.95V14.89h-2v-3h2v-2c0-2 1.2-3 3-3 .87 0 1.8.15 1.8.15v2h-1c-1 0-1.3.62-1.3 1.25v1.6h2.5l-.4 3h-2.1v7.06A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a href="#" className="footer-link">
            <span className="sr-only">Instagram</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Нижняя строка */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © 2025 - Brandname. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
