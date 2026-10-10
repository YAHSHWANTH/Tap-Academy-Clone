import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Share2,
  Video,
} from "lucide-react";
import { useState } from "react";
import { footerLinks, socialLinks } from "../../data/footer";
import Button from "../Common/Button";
import FloatingBlobs from "../Common/FloatingBlobs";
import { useModal } from "../../context/ModalContext";

const socialIcons = {
  Facebook: Share2,
  Instagram: Globe,
  LinkedIn: MessageCircle,
  YouTube: Video,
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const { openForm } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    openForm();
    setEmail("");
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="aurora-bg-dark absolute inset-0" />
      <FloatingBlobs variant="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-2.5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-glow-purple">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold">TAP</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-pink-300">
                  Academy
                </span>
              </div>
            </motion.div>

            <p className="mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
              A premium tech education platform helping students and
              professionals advance their careers in software development.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 backdrop-blur-sm transition-all duration-300 focus:border-pink-500/50 focus:outline-none focus:shadow-glow-pink"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-3 shadow-lg shadow-purple-500/30 transition-all hover:shadow-glow-purple"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {[
              { title: "Programs", links: footerLinks.programs },
              { title: "Company", links: footerLinks.company },
              { title: "Resources", links: footerLinks.resources },
            ].map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-pink-400">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 transition-colors duration-300 hover:text-pink-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-pink-400">
              Connect
            </h3>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="h-4 w-4 shrink-0 text-purple-400" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="h-4 w-4 shrink-0 text-purple-400" />
                hello@tapacademy.com
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
                Bangalore, Karnataka, India
              </li>
            </ul>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-pink-500/30 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 hover:text-white hover:shadow-glow-purple"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TAP Academy. All rights reserved.
          </p>
          <Button onClick={openForm} className="text-xs">Book Free Demo</Button>
        </div>
      </div>
    </footer>
  );
}
