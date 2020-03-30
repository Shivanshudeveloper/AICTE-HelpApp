import React from "react";


const MainLandingPage = () => {
    const pictureDestination = {
        'background-image': 'url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)',
    }
    
    return(
        <>
            <section className="mt-2">
                <div className="jumbotron rounded card card-image" style={pictureDestination}>
                    <div className="text-white text-center py-1 px-4">
                        <div>
                        <h2 className="card-title h1-responsive pt-3 mb-5 font-bold"><strong>Search Nearest Shops</strong></h2>
                        <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-2">
            <form class="text-center  p-1" action="#!">
                <div className="row">
                    <div className="col">
                        <label>Emergency</label>
                        <select class="browser-default custom-select mb-4">
                            <option value="" disabled>Choose option</option>
                            <option value="1" selected>
                                Emergency
                            </option>
                            <option value="2">Report a bug</option>
                            <option value="3">Feature request</option>
                            <option value="4">Feature request</option>
                        </select>
                    </div>
                    <div className="col">
                        <label>Location</label>
                        <select class="browser-default custom-select mb-4">
                            <option value="" disabled>Choose option</option>
                            <option value="1" selected>Feedback</option>
                            <option value="2">Report a bug</option>
                            <option value="3">Feature request</option>
                            <option value="4">Feature request</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary btn-block" type="submit">Search</button>
            </form>
            </section>

            <section className="mt-2">
                <div className="card chart-card">

                    <div className="card-body pb-0">
                        <button className="btn btn-danger float-right">
                            <i class="fas mr-2 fa-hospital-alt"></i>
                            Call for Emergency
                        </button>
                        <h4 className="card-title font-weight-bold">Corona Cases</h4>
                        <p className="card-text mb-1">INDIA</p>
                        <p className="card-text mb-3">Emergency Contact: +91 2837 384 881</p>
                        <div className="d-flex justify-content-between">
                        <p className="display-4 align-self-end">1024</p>
                        <p className="align-self-end pb-2">1024</p>
                        </div>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                            <img src="https://img.icons8.com/officel/40/000000/wash-your-hands.png"/>
                                <span className="mt-5 ml-4">
                                    Wash Hands
                                </span> 
                            </li>
                            <li className="list-group-item">
                            <img src="https://img.icons8.com/color/40/000000/doctors-bag.png"/>
                                <span className="mt-5 ml-4">
                                    Take Pills
                                </span> 
                            </li>
                            <li className="list-group-item">
                            <img src="https://img.icons8.com/color/40/000000/home.png"/>
                                <span className="mt-5 ml-4">
                                    Stay at Home
                                </span> 
                            </li>
                            <li className="list-group-item">
                            <img src="https://img.icons8.com/color/48/000000/ignore.png"/>
                                <span className="mt-5 ml-4">
                                    Avoid Contact
                                </span> 
                            </li>
                        </ul>

                    </div>


                    </div>
            </section>
        </>
    )
}
export default MainLandingPage;