// Heroicons
import {
  ArrowDownIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

// Lucide or React Icons (for tech stack)
import { CodeIcon, Zap, LayoutDashboard } from "lucide-react";
import {
  FaGithub,
  FaGitAlt,
  FaSass,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const Icons = {
  ArrowDown: (props) => <ArrowDownIcon className="w-6 h-6" {...props} />,
  Phone: (props) => <PhoneIcon className="w-6 h-6" {...props} />,
  Mail: (props) => <EnvelopeIcon className="w-6 h-6" {...props} />,
  Map: (props) => <MapPinIcon className="w-6 h-6" {...props} />,
  Facebook: (props) => <FaFacebook className="w-6 h-6" {...props} />,
  LinkedIn: (props) => <FaLinkedin className="w-6 h-6" {...props} />,
  Instagram: (props) => <FaInstagram className="w-6 h-6" {...props} />,
  CodeIcon: (props) => <CodeIcon className="w-6 h-6 text-sky-500" {...props} />,
  Zap: (props) => <Zap className="w-6 h-6 text-sky-500" {...props} />,
  LayoutDashboard: (props) => (
    <LayoutDashboard className="w-6 h-6 text-sky-500" {...props} />
  ),
  LinkIcon: (props) => <Zap className="w-6 h-6 text-sky-500" {...props} />,
  Git: (props) => <FaGitAlt className="text-xl text-orange-500" {...props} />,
  Github: (props) => <FaGithub className=" w-6 h-6 text-white" {...props} />,
  Sass: (props) => <FaSass className="text-xl text-pink-400" {...props} />,
  React: (props) => (
    <FaReact className="text-xl text-cyan-400 animate-spin-slow" {...props} />
  ),
  Html: (props) => <FaHtml5 className="text-xl text-orange-600" {...props} />,
  Css: (props) => <FaCss3Alt className="text-xl text-blue-500" {...props} />,
};
