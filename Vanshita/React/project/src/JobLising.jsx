import React from 'react';
const JobListing = () => {
    return (
        <div>
            <Header />
            <SearchBar />
            <main className="main">
                <JobListingSection />
            </main>
            <Footer />
        </div>
    );
};

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src="https://www.webstrot.com/html/jobpro/job_dark/images/header/logo.png" alt="JobPro Logo" />
            <h1>JobPro</h1>
        </div>
        <nav className="nav">
            <ul>
                <li><a href="/homepage">Home</a></li>
                <li><a href="#">Company Details</a></li>
                <li><a href="#">Internships</a></li>
                <li><a href="#">Plans</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>
);

const SearchBar = () => (
    <div className="search-bar">
        <input type="text" placeholder="Skills, Job Title, Designation" />
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Experience" />
        <button type="button">Search</button>
    </div>
);

const JobListingSection = () => (
    <section className="job-listing">
        <JobCard
            title="Software Engineer"
            company="Google"
            location="Mountain View, CA"
            logo="google-1088004_640.png"
            description="Design and develop scalable software solutions. Collaborate with cross-functional teams to define and implement features."
            postedDate="2 days ago"
        />
        <JobCard
            title="Product Manager"
            company="Facebook"
            location="Menlo Park, CA"
            logo="download.jpg"
            description="Lead product initiatives, define product roadmap, and work with engineers and designers to implement features."
            postedDate="5 days ago"
        />
        <JobCard
            title="Data Scientist"
            company="Netflix"
            location="Los Gatos, CA"
            logo="netflix.png"
            description="Analyze large datasets, build predictive models, and support decision-making through data insights."
            postedDate="1 week ago"
        />
        <JobCard
            title="UX Designer"
            company="Apple"
            location="Cupertino, CA"
            logo="apple.png"
            description="Create intuitive user experiences by designing interfaces and workflows that enhance user satisfaction."
            postedDate="3 days ago"
        />
        <JobCard
            title="Full Stack Developer"
            company="Airtel"
            location="Vasant Kunj, New Delhi"
            logo="airtel.png"
            description="Develop and maintain both front-end and back-end of web applications. Collaborate with UI/UX designers and other developers."
            postedDate="1 day ago"
        />
        <JobCard
            title="CA"
            company="Microsoft"
            location="Noida"
            logo="micro.png"
            description="Manage financial records, audits, and ensure compliance with regulations. Provide financial insights for business decisions."
            postedDate="8 days ago"
        />
    </section>
);

const JobCard = ({ title, company, location, logo, description, postedDate }) => (
    <div className="job-card">
        <div className="job-header">
            <h2>{title}</h2>
            <img src={logo} alt={`${company} Logo`} className="company-logo" />
        </div>
        <p>{company} - {location}</p>
        <p>Posted: {postedDate}</p>
        <div className="buttons">
            <button className="view-details-btn" onClick={() => viewDetails(title, company, location, description)}>View Details</button>
            <button className="apply-now-btn" onClick={() => applyNow(title)}>Apply Now</button>
        </div>
    </div>
);

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer-columns">
                <div className="footer-column">
                    <h5>About Us</h5>
                    <p>Your trusted job portal to connect with top employers.</p>
                </div>
                <div className="footer-column">
                    <h5>Follow Us</h5>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                             Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 JobPro. All Rights Reserved. | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </footer>
);



function viewDetails(title, company, location, description) {
    // Add view details logic here
    alert(`View details for ${title} at ${company} in ${location}.\n\nDescription: ${description}`);
}


function applyNow(title) {
    window.location.href = `apply.html?job=${encodeURIComponent(title)}`;
}


export default JobListing;
