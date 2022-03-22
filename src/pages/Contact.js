import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
   const styles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: "bold",
    }
  return (
    <>
      <div style={styles}>
        <h3 style={{color: 'green'}}>Hello,contact me here........</h3>
      </div>
    </>
  );
};
export default NotMatch;
