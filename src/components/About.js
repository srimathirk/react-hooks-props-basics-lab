import React from "react";
import Links from "./Links";


function About(user ) {
  const isBio=user.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     {(isBio) ? (<p>{isBio}</p>) : null}
      <Links github={user.github} linkedin={user.linkedin} />
    </div>
   
  );
}

export default About;
