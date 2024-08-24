import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Nav menu={menu} setMenu={setMenu} />
      <AnimatePresence>
        {menu && (
          <motion.div
            className="blur"
            key="blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <div className={menu ? "content blurred" : "content"}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;