import React from "react";
import styles from "../styles/main.module.css";
import {motion} from 'framer-motion'
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import face_emoji from "../svg/facemoji.svg";
import { useAuth } from "../Context/AuthContext";

function Main() {
    const{signInWithGoogle,signInWithGithub} = useAuth();

    const loginVarient ={
        hidden:{
            y:'-100vw',
            opacity:0,
            transition:{
                delay:5
            }
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                type:'spring',
                stiffness:70,
                duration:0.1
            }
        },
        hiddendown:{
            y:'100vw',
            opacity:0
        },
        out:{
            y:'100vw',
            transition:{
                type:'spring',
                stiffness:70,
                duration:5
            }
        }
    }

  return (
    <motion.div className={styles.main}
    variants={loginVarient}
    exit="hidden"
    >
      <motion.div 
      className={styles.heading}
      variants = {loginVarient}
      initial="hidden"
      animate="visible"
      exit="out"
      >
        <h1>Welcome</h1>
        <img src={face_emoji} alt="Emoji" className={styles.emoji} />
      </motion.div>
        <motion.button 
        className={styles.loginBtn}
        variants = {loginVarient}
        initial="hiddendown"
        animate="visible"
        exit="out"
        onClick={()=>signInWithGoogle()}
        >
          <FcGoogle size="45" /> <p>Login</p>
        </motion.button>

        <motion.button 
        className={styles.loginBtn}
        variants = {loginVarient}
        initial="hiddendown"
        animate="visible"
        exit="out"
        onClick={()=>signInWithGithub()}
        >
          <VscGithubInverted size="45" /> <p>Login</p>
        </motion.button>
    </motion.div>
  );
}

export default Main;
