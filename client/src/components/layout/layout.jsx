import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactsContainer from '../contacts-container';
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen overflow-hidden bg-[#1c1d25]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 left-0 z-50 w-[280px] md:hidden"
          >
            <ContactsContainer onClose={() => setIsSidebarOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar - Always visible */}
      <div className="hidden md:block w-[280px] lg:w-[350px] flex-shrink-0">
        <ContactsContainer />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="bg-[#1c1d25] p-4 flex items-center justify-between md:hidden border-b border-[#2f303b]">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-[#2f303b]"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8338ec] to-[#3a86ff]">
              CLAIR
            </span>
            <span className="text-xs font-semibold text-[#8338ec]">AI</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

