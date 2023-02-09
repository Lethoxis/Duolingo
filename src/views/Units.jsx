import Navbar from "components/Navbars/Navbar.jsx";
import UnitCard from "components/UnitCard";
import React from "react";

const Units = () => {
  return (
    <>
      <Navbar />
      <div
        className="bg-gradient-primary"
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
        }}
      />
      <main
        className="position-relative"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="mt-8 mx-auto" style={{ width: "700px" }}>
          {[0, 1, 2, 3].map((unit, i) => (
            <UnitCard index={i} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Units;
