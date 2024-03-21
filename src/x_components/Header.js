import React from 'react';

function  Header() {

    const client = "Programmer";
    const tittle = {
      designer: "Design ",
     programmer:"Programming ",
    }
   const info = {
      name: "Yazan",
      nick: "Monther"

   }

    return (
             <div className="navbar bg-dark rounded text-white">
              Hallo {info.name + " " + info.nick}
                <h2>
                  {client === "Designer" ? tittle.designer : tittle.programmer }
                   is my life.
                </h2>
             </div>
    );
  
  }

export default Header;