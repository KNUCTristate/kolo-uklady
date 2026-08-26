import { motion } from "framer-motion";

import {
  Navbar,
  Section,
  Map,
  AnimatedSection,
  JoinUs,
  Footer,
  ScrollToTopButton,
} from "../components";

import logo from "../images/logo.png";

export default function ContactPage() {

  return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navbar logo={logo} />

          <Map />
          <AnimatedSection>
            <JoinUs />
          </AnimatedSection>
          

          <Section
            id="kontakt"
            title="Kontakt"
            isContact={true}
            content="📧 kolo.tristate@interia.pl 🌐 Facebook / LinkedIn"
          />
          <Footer />
          <ScrollToTopButton />
        </motion.div>
  );
}
