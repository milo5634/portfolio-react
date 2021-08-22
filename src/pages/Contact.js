import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import ButtonsButtom from "../components/ButtonsButtom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Mouse />
      <div className="contact">
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
      </div>
    </main>
  );
};

export default Contact;
