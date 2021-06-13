import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import React, { useRef } from "react";
import { Box, Input } from "@chakra-ui/react";
// import Firebase from "../components/Firebase";

const Intro = () => {
  const childRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    childRef.current.changeValue(e.target.value);
  };

  // const submit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   try {
  //     await Firebase.auth.createUserWithEmailAndPassword("tri.nguyen@naivecat.com", "acb909qpm")
  //     .then((userCredential) => {
  //       // Signed in 
  //       var user = userCredential.user;
  //       console.log("user: " + user.email);
  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log(errorCode + " : " + errorMessage);
  //       // ..
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Box className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={childRef} />
        <Input onChange={onChange} placeholder="Enter some texts" />
        {/* <button onClick={submit}>Submit</button> */}
      </main>
    </Box>
  );
};

export default Intro;
