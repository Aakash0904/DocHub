import React from "react";

const ConList = ()=> {
    return(
        <>
        <section className="border-bottom mt-1">
    <div className="row container-fluid mt-2 mb-1">
      <div className="col-8 banner mx-auto">
        <h2 className="mt-1">Best doctors in Gujarat - Updated 2023</h2>
        <p className="mt-2">Doctors are medical professionals who are trained to diagnose and treat illnesses and
          injuries in patients. They are also responsible for providing preventative care and promoting
          overall health and wellness.

          Doctors have a wide range of specialties, including general practitioners, pediatricians, surgeons,
          psychiatrists, and many more. Each specialty requires specific training and expertise to properly
          diagnose and treat patients.

          When you visit a doctor, you can expect to receive a thorough examination and a detailed diagnosis
          of your symptoms. Depending on the diagnosis, your doctor may prescribe medication, suggest
          lifestyle changes, or recommend further testing or specialist care..

        </p>
      </div>
      <div className="col-3 mx-auto banner">

        <form className="form1">
          <h3 className="mt-1">Assistence, Over Call</h3>
          <div className="form-group mt-1">
            <label for="exampleInputPassword1" className="mt-1">Full Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Full Name"/>
          </div>
          <div className="form-group mt-1">
            <label for="exampleInputEmail1" className="mt-1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
          </div>
          <div>
            <label for="message" className="mt-1">Mobile No.</label>
            <input className="form-control" type="number" placeholder="Mobile Number"/>
          </div>
          <button type="submit" className="btn btn-primary mt-2 mb-2 btn1">Submit</button>
        </form>
      </div>
    </div>
  </section>

  <section className="container-fluid">
    {/* <!-- Cancer Hospital list --> */}
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <div className="col">
        <div className="card_con h-100">
          <img src="/Images/appollo cbcc.webp" className="card-img-top" alt="Apollo CBCC"/>
          <div className="card-body">
            <h5 className="card-title">Appollo CBCC</h5>
            <p className="card-text"> Ellisbridge, Ahmedabad, Gujarat - 380006</p>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-primary mt-1 mb-1 btn1" data-bs-toggle="modal"
              data-bs-target="#cbcc">Show Details</button>
          </div>
        </div>
      </div>

      {/* <!-- Modal of appollo cbcc --> */}
      <div className="modal fade" id="cbcc" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Enquire Now</button>
              <button type="button" className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>


      <div className="col">
        <div className="card h-100">
          <img src="/Images/hcg.svg" height="180px" className="card-img-top pt-5" alt="HCG Cancer Center"/>
          <div className="card-body">
            <h5 className="card-title">HCG Cancer Center</h5>
            <p className="card-text">Sola, Ahmedabad, Gujarat - 380060</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1" data-bs-toggle="modal"
              data-bs-target="#hcg">Show Details</button>
          </div>
        </div>
      </div>
      {/* <!-- HCG modal --> */}
      <div className="modal fade" id="hcg" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">HCG Hospital</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Enquire Now</button>
              <button type="button" className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>


      <div className="col">
        <div className="card h-100">
          <img src="/Images/Zanish.jpg" height="180px" className="card-img-top pt-5" alt="HCG Cancer Center"/>
          <div className="card-body">
            <h5 className="card-title">Zanish Cancer Hospital</h5>
            <p className="card-text">Naranpura, Ahmedabad, Gujarat - 380060</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1" data-bs-target="#zanish"
              data-bs-toggle="modal">Show Details</button>
          </div>
        </div>
      </div>
      {/* <!-- Zanish cancer care --> */}
      <div className="modal fade" id="zanish" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Zanish Cancer Care</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Enquire Now</button>
              <button type="button" className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>



      <div className="col">
        <div className="card h-100">
          <img src="/Images/zydus.jpg" className="card-img-top" alt="zydus"/>
          <div className="card-body">
            <h5 className="card-title">Zydus Hospital</h5>
            <p className="card-text">Nr. Sola Bridge, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1" data-bs-toggle="modal"
              data-bs-target="#zydus">Show Details</button>
          </div>
        </div>
      </div>
      {/* <!-- Zydus modal --> */}
      <div className="modal fade" id="zydus" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Zydus Hospital</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Enquire Now</button>
              <button type="button" className="btn btn-primary">Book Appointment</button>
            </div>
          </div>
        </div>
      </div>





      <div className="col">
        <div className="card h-100">
          <img src="/Images/hospital.png" className="card-img-top" alt="hospitals"/>
          <div className="card-body">
            <h5 className="card-title"></h5>
            {/* <!-- <p className="card-text "><a href=""><h5>Show more</h5></a></p> --> */}
          </div>
          <div className="card-footer text-center">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Cardiology Hospitals --> */}
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <div className="col">
        <div className="card h-100">
          <img src="/Images/Apex heart hospital.webp" className="card-img-top pt-5" alt="Apex hospital"/>
          <div className="card-body">
            <h5 className="card-title">Apex Heart Hospital</h5>
            <p className="card-text"> Ellisbridge, Ahmedabad, Gujarat - 380006</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/Sterling hospital.webp" height="" className="card-img-top pt-5" alt="HCG Cancer Center"/>
          <div className="card-body">
            <h5 className="card-title">Sterling Hospital</h5>
            <p className="card-text">Memnagar, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>

          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/k d hospital.jpg" className="card-img-top" height="180px" alt="zydus"/>
          <div className="card-body">
            <h5 className="card-title">Zydus Hospital</h5>
            <p className="card-text">Nr. Sola Bridge, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src="/Images/k d hospital.jpg" className="card-img-top" height="180px" alt="zydus"/>
          <div className="card-body">
            <h5 className="card-title">U N Mehta</h5>
            <p className="card-text">Nr. Sola Bridge, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src="/Images/hospital.png" className="card-img-top" alt="hospitals"/>
          <div className="card-body">
            <h5 className="card-title"></h5>
            {/* <!-- <p className="card-text "><a href=""><h5>Show more</h5></a></p> --> */}
          </div>
          <div className="card-footer text-center">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></a>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- IVF Hospitals --> */}
    <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
      <div className="col">
        <div className="card h-100">
          <img src="/Images/Sunflower ivf.webp" className="card-img-top pt-5" alt="Apex hospital"/>
          <div className="card-body">
            <h5 className="card-title">Sunflower IVF Hospital</h5>
            <p className="card-text"> Memnagar, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/Appollo IVF.webp" height="" className="card-img-top" alt="HCG Cancer Center"/>
          <div className="card-body">
            <h5 className="card-title">Appollo IVf Hospital</h5>
            <p className="card-text">Memnagar, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>

          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/Lifelife ivf.webp" className="card-img-top" height="180px" alt="zydus"/>
          <div className="card-body">
            <h5 className="card-title">Lifelife</h5>
            <p className="card-text">Nr. Sola Bridge, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/k d hospital.jpg" className="card-img-top" height="180px" alt="zydus"/>
          <div className="card-body">
            <h5 className="card-title">U N Mehta</h5>
            <p className="card-text">Nr. Sola Bridge, Ahmedabad, Gujarat</p>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary mt-1 mb-1 btn1">Enquire Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card h-100">
          <img src="/Images/hospital.png" className="card-img-top" alt="hospitals"/>
          <div className="card-body">
            <h5 className="card-title"></h5>
            {/* <!-- <p className="card-text "><a href=""><h5>Show more</h5></a></p> --> */}
          </div>
          <div className="card-footer text-center">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg></a>
          </div>
        </div>
      </div>
    </div>

  </section>

        </>
    );
};
export default  ConList;