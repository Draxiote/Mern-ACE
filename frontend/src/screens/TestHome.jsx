import { useSelector } from 'react-redux';


const TestHome = () => {
    const { userInfo } = useSelector((state) => state.auth);

return(
    <div className="container py-4">

    <header className="pb-3 mb-4 fs-4 border-bottom">
        <a className="d-flex align-items-center">
        <span className="fs-3"style={{whiteSpace: 'nowrap'}}>
            <strong>Welcome, {userInfo.name} </strong>
        </span>
        
        <div className="container" style={{textAlign: "end"}}>  
            <button className="btn btn-primary float-right" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            Ongoing Events
            </button>
        </div>
        </a>
    </header>

    

    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasScrollingLabel"> Ongoing Events </h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <header className="pb-3 mb-4 border-bottom">
            <a className="d-flex align-items-center">
            <span className="fs-4">
                <strong> 
                "Topic"
                </strong>
            </span>
            </a>
        </header>
        <p>
            <a className="d-flex align-items-center">
            <p>
                "Body"
            </p>
            </a>
        </p>
        </div>
    </div>


    <div className="container py-3">
        <div className="mask">
        <div className="p-5 mb-4 bg-body-tertiary text-bg-dark rounded-3" >
            <div className="d-flex justify-content-center align-items-center h-100">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold"><u><strong>Academic Companion and Explorer</strong></u></h1>
                <p className="col-md-8 fs-4">A Student-Based Personalized Website:
                <br/>
                It provides ease of access to the users, which consists of many quality of life features with some flexibility for the users.
                </p>
            </div>
            </div>
        </div>
        </div> 
    </div>

    <div className="row align-items-md-stretch">
        <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2><u> Check out the Forums </u></h2>
            <h6>
            View the Forums.
            <br/>
            Be sure to discuss with other users incase of queries, etc.
            </h6>
            <a href="forum_index" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Forum</a>
        </div>
        </div>

        <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2><u> Check out the Planner </u></h2>
            <h6>
            View the Planner.
            <br/>
            Look for new events and other interesting topics.
            </h6>
            <a href="planner" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Planner</a>
        </div>
        </div>
    </div> 

    </div>
)}

export default TestHome;