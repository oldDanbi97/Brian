import React, {useState} from 'react';
import BrianHeader from "./BrianHeader";
import styles from "../../styles/Home.module.scss";
import BrianDrawer from "./BrianDrawer";

const BrianLayout = (prop) => {
  return (
    <div style={{height: "fit-content"}}>
      <BrianHeader />
      <BrianDrawer />
      <div className={styles.container}>
        {prop.children}
      </div>
    </div>
  );
};

export default BrianLayout;