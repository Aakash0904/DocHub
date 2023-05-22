import React from "react";
import cardiology from "../../assets/services/heart.png";
// import cancer from "../../assets/services/cancer.png";
import Nurologist from "../../assets/services/icon.png";
import Nephrology from "../../assets/services/kidney.png";
import Dermatology from "../../assets/services/pimple.png";
import Urologist from "../../assets/services/kidneyplus.png";
import Oncologist from "../../assets/services/cancer.png";

import Dental from "../../assets/services/dental.png";
import Ophthalmologist from "../../assets/services/eye.png";
import ortho from "../../assets/services/ortho.png";

const Service = () => {
  return (
    <section className="ser">
      <section className="title_ser">
        <h3>Our Services</h3>
      </section>
      <section className="specialist">
        <div class="container d-flex justify-content-center flex-column ">
          <div class="row ">
            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz">
                <img src={cardiology} className="p-2 clr" width="100px" />

                <h6 className="">Cardiology</h6>
              </div>
              <p>
                Cardiology is the study and treatment of disorders of the heart
                and the blood vessels. A person with heart disease or
                cardiovascular disease may be referred to a cardiologist.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz">
                <img src={Nurologist} className="p-2" width="100px" />
                <h6 className=" ">Neurology</h6>
              </div>
              <p>
                A neurologist is a medical doctor who specializes in diagnosing
                and treating diseases of the brain, spinal cord and nerves.
              </p>
            </div>

            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz">
                <img src={Dental} className="p-2" width="90px" />
                <h6 className=" ">Dental Surgeon</h6>
              </div>
              <p>
                Dental surgery is any of a number of medical procedures that
                involve artificially modifying dentition; in other words,
                surgery of the teeth, gums and jaw bones.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz nepphro">
                <img src={Nephrology} className="p-2" width="100px" />
                <h6 className=" ">Nephrology</h6>
              </div>
              <p>
                Nephrology is the adult and pediatric study of the kidneys and
                its diseases. The nephrologist deals with the diagnosis and
                management of kidney disease.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz nepphro">
                <img src={Dermatology} className="p-2" width="100px" />
                <h6 className=" ">Dermatology</h6>
              </div>
              <p>
                A dermatologist is a medical doctor who specializes in
                conditions that affect the skin, hair, and nails.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 bor">
              <div className="d-flex flex-row xyz nepphro">
                <img src={Urologist} className="p-2" width="100px" />
                <h6 className=" ">Urology</h6>
              </div>
              <p>
                A urologist is a medical doctor specializing in conditions that
                affect the urinary tract in men, women and children.
              </p>
            </div>
          </div>
          <div id="hide">
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-4 bor">
                <div className="d-flex flex-row xyz nepphro">
                  <img src={ortho} className="p-2" width="100px" />
                  <h6 className=" ">Orthology</h6>
                </div>
                <p>
                  Orthopedic surgeons are doctors who specialize in the
                  musculoskeletal system - the bones, joints, ligaments,
                  tendons, and muscles.
                </p>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 bor">
                <div className="d-flex flex-row xyz nepphro">
                  <img src={Oncologist} className="p-2" width="100px" />
                  <h6 className=" ">Oncology</h6>
                </div>
                <p>
                  An oncologist is a healthcare provider who specializes in
                  diagnosing and treating cancer. They'll diagnose your cancer
                  and identify treatment options.
                </p>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 bor">
                <div className="d-flex flex-row xyz nepphro">
                  <img src={Ophthalmologist} className="p-2" width="100px" />
                  <h6 className=" ">Ophthalmology</h6>
                </div>
                <p>
                  An ophthalmologist is a medical or osteopathic doctor who
                  specializes in eye and vision care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Service;
