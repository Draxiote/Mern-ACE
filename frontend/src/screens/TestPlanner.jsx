import { useSelector } from 'react-redux';
import autumn from '../assets/img/seasons/autumn.jpg';
import autumn_evening from '../assets/img/seasons/autumn_evening.jpg';
import early_autumn from '../assets/img/seasons/early_autumn.jpg';
import late_autumn from '../assets/img/seasons/late_autumn.jpg';
import light_play from '../assets/img/seasons/light_play.jpg';
import summer from '../assets/img/seasons/summer.jpg';
import winter from '../assets/img/seasons/winter.jpg';

const TestPlanner = () => {
    const { userInfo } = useSelector((state) => state.auth);

return(

<main>

<section class="py-5 text-center container">
  <div class="row py-lg-5">
    <div class="col-lg-6 col-md-8 mx-auto">
      <h1 class="fw-light">Planner for Activities</h1>
      <p class="lead text-body-secondary">
        This page can be used to plan you future activities for better workflow and efficieny, for each month individually.
      </p>
      <p>
        <a href="c_plan" class="btn btn-primary my-2">Create an Event</a>
      </p>
    </div>
  </div>
</section>

    <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div class="col text-center">
                    <div class="card shadow-sm">
                        <img src={winter} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay">
                                <h5 class="mask text-light d-flex justify-content-center align-text-center">January</h5>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/1" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan1}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={winter} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay">
                                <h5 class="mask text-light d-flex justify-content-center align-text-center">February</h5>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/2" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan2}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={winter} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">March</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/3" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan3}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col">
                    <div class="card shadow-sm">
                        <img src={summer} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">April</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/4" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan4}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={summer} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">May</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/5" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan5}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={summer} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">June</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/6" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan6}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col">
                    <div class="card shadow-sm">
                        <img src={early_autumn} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">July</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/7" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan7}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={autumn_evening} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">August</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/8" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan8}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={late_autumn} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">September</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/9" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan9}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>




                <div class="col">
                    <div class="card shadow-sm">
                        <img src={light_play} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">October</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/10" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan10}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={light_play} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">November</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/11" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan11}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card shadow-sm">
                        <img src={light_play} class="w-100" alt="...">
                        </img>
                            <div class="card-img-overlay header-top=50%">
                                <h5 class="mask text-light d-flex justify-content-center align-items-center">December</h5>
                                <rect width="100%" height="100%" fill="#55595c"/>
                            </div>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="/planner/12" class="btn btn-sm btn-outline-primary active" role="button" aria-pressed="true">Visit</a>
                                </div>
                                {/* <small class="text-body-secondary"> {{plan12}} events</small> */}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
    </div>
    </div>
</main>
)}
    export default TestPlanner;