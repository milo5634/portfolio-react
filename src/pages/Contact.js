import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsButtom from "../components/ButtonsButtom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {

/* transition entre les pages */
const variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.5 },
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0.4,
    transition: { duration: 0.35 },
    x: -800,
  },
};

  return (
    <main>
      <Mouse />
      <motion.div className="contact"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}>
        
        <Navigation />
              <Logo />
              <ContactForm />
        {/* contact form */}
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>adresse</h4>
              <p>11 rue de Maguelone</p>
              <p>34000 Montpellier</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>téléphone</h4>
              <CopyToClipboard text="0665675821" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  classname="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  0665675821
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>email</h4>
              <CopyToClipboard text="milo@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  classname="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  milo@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
        </div>
        <ButtonsButtom left={"/project-4"} right={"/"} />
      </motion.div>
    </main>
  );
};

export default Contact;
