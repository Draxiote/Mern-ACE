import { useSelector } from "react-redux";

const TestForum = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const { forumInfo } = useSelector((state) => state.auth);
    
    return (
    <div class="container">
        <div class="row">
            <div class="col-md-8 mt-3 left">
                <div class="card mb-3">
                    <div class="card-body">
                    <h2 class="card-title"> Test1 </h2>
                    <p class="card-text h6">test123 | Dec. 28, 2023, 5:12 p.m. </p>
                    <p class="card-text">Changes to the website</p>
                    <a>-</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Exciting Updates</h2>
                        <p class="card-text h6">tester007 | Apr. 10, 2024, 8:15 a.m.</p>  
                        <p class="card-text">Introduced new design elements</p>
                        <a>Discover Now</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Feature Enhancement</h2>
                        <p class="card-text h6">developer321 | May 1, 2024, 12:00 p.m.</p>  
                        <p class="card-text">Improved user experience</p>
                        <a>See Improvements</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Latest Release</h2>
                        <p class="card-text h6">projectmanager999 | Jun. 22, 2024, 2:30 p.m.</p>  
                        <p class="card-text">Added support for new languages</p>
                        <a>Explore Now</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Important Announcement</h2>
                        <p class="card-text h6">leaddev456 | Jul. 17, 2024, 10:45 a.m.</p>  
                        <p class="card-text">Security patches applied</p>
                        <a>Review Changes</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Feature Spotlight</h2>
                        <p class="card-text h6">designer123 | Aug. 5, 2024, 4:00 p.m.</p>  
                        <p class="card-text">Introduced dark mode</p>
                        <a>Try Dark Mode</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Code Refactoring</h2>
                        <p class="card-text h6">coder567 | Sep. 18, 2024, 9:20 a.m.</p>  
                        <p class="card-text">Optimized backend performance</p>
                        <a>Check Enhancements</a>
                    </div>
                </div>

                <div class="card mb-3">
                    <div class="card-body">
                        <h2 class="card-title">Community Update</h2>
                        <p class="card-text h6">communitymember001 | Oct. 30, 2024, 11:55 a.m.</p>  
                        <p class="card-text">Added new forum sections</p>
                        <a>Join Discussions</a>
                    </div>
                </div>

            </div>

            <div class="col-md-4 float-right">
                <div class="card my-4">
                    <h5 class="card-header">Create Forum</h5>
                    <div class="card-body">
                        <p class="card-text"> Click this button to create a forum </p>
                        <a href="c_forum" class="btn btn-primary">
                            Create
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TestForum;
