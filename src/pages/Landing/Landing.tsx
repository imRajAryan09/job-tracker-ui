import styles from "./Landing.module.scss";
import HeroSvg from "../../assets/hero.svg";
import { useState } from "react";
import Modal from "../../components/global/Modal/Modal";

function Landing() {
  const [showModal, setShowModal] = useState(false);

  function handleClick(target:string) {
    switch(target) {
      case "signup":
        setShowModal(true);
        break;
    }
  }
  return (
    <>
      <main className={`main-container`}>
      <section className={styles["landing-container"]}>
        <header className={styles["landing-header"]}>
          <div className={styles["landing-logo"]}>
            <span>Job</span>
            <span className="material-symbols-outlined">location_on</span>
            <br />
            <span>Tracker</span>
          </div>
          <div className={styles["landing-nav"]}>
            <button className={styles["nav-link"]} onClick={()=>handleClick("signup")}>Signup</button>
          </div>
        </header>
        <div className={styles["landing-content"]}>
          <div className={styles["content-details"]}>
            <div className={styles["title-container"]}>
              <h3 className={styles["content-sub_title"]}>Lorem ipsum dolor</h3>
              <h1 className={styles["content-title"]}>
                Track To{" "}
                <span className={styles["content-title-span"]}>Win</span>
              </h1>
              <p className={styles["content-description"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles["cta-btn-container"]}>
              <button className={styles["cta-btn"]}>
                <span>Track Now</span>
                <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </div>
          </div>
          <div className={styles["content-image"]}>
            <img src={HeroSvg} alt="image" />
          </div>
        </div>
      </section>
    </main>
    {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Modal Title">
          <p>This is the modal content.</p>
        </Modal>
      )}
    </>
  );
}

export default Landing;
