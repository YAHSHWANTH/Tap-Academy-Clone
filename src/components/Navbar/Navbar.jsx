import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap, LogIn, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { dropdownVariants } from "../../animations/variants";
import { navLinks } from "../../data/navigation";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import Button from "../Common/Button";
import { useModal } from "../../context/ModalContext";

function NavDropdown({ items, isScrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={(e) => {
          if (!e.currentTarget.parentElement?.contains(e.relatedTarget)) setOpen(false);
        }}
        className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          isScrolled
            ? "text-slate-300 hover:text-white"
            : "text-white/90 hover:text-white"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Courses
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseEnter={() => setOpen(true)}
            className="absolute left-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-[0_0_35px_rgba(168,85,247,.25)] backdrop-blur-xl"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10"
              >
                <span className="block text-sm font-semibold text-white">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-xs text-slate-400">
                  {item.description}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDrawer({ open, onClose, onBookDemo }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col bg-gradient-to-br from-slate-950 to-slate-900 p-6 shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">TAP Academy</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.dropdown ? (
                    <div className="mb-2">
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
                        {link.label}
                      </p>
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-xl px-3 py-2.5 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
              <Button
                onClick={() => { window.location.href = "https://tai.thetapacademy.com/"; }}
                variant="ghost"
                className="w-full justify-center"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button onClick={() => { onClose(); onBookDemo(); }} className="w-full justify-center">
                Book Free Demo
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const isScrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openForm } = useModal();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/10 bg-slate-950/80 py-3 shadow-premium backdrop-blur-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-2.5">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg shadow-purple-500/30"
            >
              <GraduationCap className="h-5 w-5 text-white" />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white transition-colors">
                TAP
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-pink-300">
                Academy
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.dropdown ? (
                <NavDropdown key={link.label} items={link.dropdown} isScrolled={isScrolled} />
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isScrolled
                      ? "text-slate-300 hover:text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://tai.thetapacademy.com/"
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? "text-slate-300 hover:text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <LogIn className="h-4 w-4" />
              Login
            </a>
            <Button onClick={openForm}>Book Free Demo</Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onBookDemo={openForm}
      />
    </>
  );
}
