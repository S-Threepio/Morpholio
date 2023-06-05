import React, { useContext } from "react";
import Certification from "./Certification";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Certifications = () => {
  const certifications = useContext(GlobalDataContext).certifications;
  return (
    <div className="overflow-scroll">
      <div className="text-center text-4xl md:text-5xl font-bold p-4 md:mt-6">
        Certifications
      </div>
      <div className="flex flex-col gap-10 items-center p-10">
        {certifications.certs.map((cert, index) => (
          <Certification cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
