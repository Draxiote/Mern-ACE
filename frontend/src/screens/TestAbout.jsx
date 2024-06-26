import { useSelector } from 'react-redux';
import aboutpic from '../assets/img/aboutus.jpg'

const TestAbout = () => {
    const { userInfo } = useSelector((state) => state.auth);

return(
    
    <div className="container">
    <div class="d-flex justify-content-center align-items-center h-100">
        <img src={aboutpic} alt="" width="1400" height="600" />
    </div>
        <div class="container py-4">
            <div class="d-flex justify-content-center">
                <h1 class="fw-light">Goals</h1>
            </div>
        </div>

        <div class="container mb-4">
            <div class="d-flex justify-content-center">
                <p class="lead text-body-secondary">
                    Our motivation is to address Real-World Problems. 
                    <br />
                    <br />
                    Educational systems often face challenges in delivering personalized, efficient, and engaging learning experiences.
                    <br />
                    <br />
                    Our project can directly address these issues, making a meaningful impact on students' lives. 
                </p>
            </div>
        </div>

        <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
            <a class="d-flex align-items-center">
            <span class="fs-4">
                <strong>Contact Us</strong>
            </span>
            </a>
        </header>
        </div>

        <div class="container">
        <form method="post" action="/about">
            {/* {% csrf_token %} */}
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp" placeholder="Enter Your Name" />
                <div id="nameHelp" class="form-text">We'll never share your name with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">E-mail address</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter Your E-mail" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="phone" name="phone" aria-describedby="phoneHelp" placeholder="Enter your Phone Number" />
                <div id="phoneHelp" class="form-text">We'll never share your phone number with anyone else.</div>
            </div>

            <div class="mb-3">
                <label for="desc" class="form-label">Details</label>
                <textarea type="desc" class="form-control" id="desc" name="desc"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </div>

)}
    export default TestAbout;