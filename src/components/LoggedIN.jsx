import React from "react";
import styles from "../styles/LoggedIN.module.css";
import { motion } from "framer-motion";
import face_emoji from "../svg/face2.svg";
import { useAuth } from "../Context/AuthContext";

function LoggedIN() {
  const { logout, currentUser } = useAuth();
  const loginVarient = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        when: "afterChildren",
        stiffness: 120,
        delay: 0,
        duration: 1,
      },
    },
    hiddendown: {
      y: 100,
      opacity: 0,
    },
    out: {
      y: 100,
      transition: {
        type: "spring",
        when: "afterChildren",
        stiffness: 120,
        delay: 3,
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.main}>
      <motion.div
        className={styles.userPic}
        variants={loginVarient}
        initial="hidden"
        animate="visible"
      >
        <img src={currentUser.photoURL} alt="" />
      </motion.div>
      <motion.div
        variants={loginVarient}
        initial="hidden"
        animate="visible"
        className={styles.heading}
      >
        <h2>Welcome</h2>
        <img src={face_emoji} alt="Emoji" className={styles.emoji} />
      </motion.div>

      <motion.div variants={loginVarient} initial="hidden" animate="visible">
        <h3>{currentUser.displayName}</h3>
      </motion.div>

      <motion.button
        variants={loginVarient}
        initial="hiddendown"
        animate="visible"
        className={styles.loginBtn}
        onClick={() => logout()}
      >
        <p>Logout</p>
      </motion.button>
    </div>
  );
}

export default LoggedIN;
