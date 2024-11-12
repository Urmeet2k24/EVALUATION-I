import React, { useState, useEffect } from 'react';

const JobListing = () => {
    const [jobs, setJobs] = useState([]);
    const [searchParams, setSearchParams] = useState({
        title: '',
        location: '',
        experience: '',
    });

    useEffect(() => {
    
        const jobData = [
            { id: 1, title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA', logo: 'google-1088004_640.png', description: 'Design and develop scalable software solutions.', postedDate: '2 days ago' },
            { id: 2, title: 'Product Manager', company: 'Facebook', location: 'Menlo Park, CA', logo: 'download.jpg', description: 'Lead product initiatives and define product roadmap.', postedDate: '5 days ago' },
            { id: 3, title: 'Data Scientist', company: 'Netflix', location: 'Los Gatos, CA', logo: 'netflix.png', description: 'Analyze large datasets and build predictive models.', postedDate: '1 week ago' },
            { id: 4, title: 'UX Designer', company: 'Apple', location: 'Cupertino, CA', logo: 'apple.png', description: 'Create intuitive user experiences.', postedDate: '3 days ago' },
            { id: 5, title: 'Full Stack Developer', company: 'Airtel', location: 'Vasant Kunj, New Delhi', logo: 'airtel.png', description: 'Develop and maintain front-end and back-end.', postedDate: '1 day ago' },
            { id: 6, title: 'CA', company: 'Microsoft', location: 'Noida', logo: 'micro.png', description: 'Manage financial records and audits.', postedDate: '8 days ago' },
        ];
        setJobs(jobData);
    }, []);

    const handleSearch = () => {
       
        alert(`Searching for ${searchParams.title} in ${searchParams.location} with experience ${searchParams.experience}`);
    };

    const handleInputChange = (e) => {
        setSearchParams(prevParams => ({ ...prevParams, [e.target.name]: e.target.value }));
    };
    

    return (
        <div>
            <Header />
            <SearchBar searchParams={searchParams} onInputChange={handleInputChange} onSearch={handleSearch} />
            <main className="main">
                <JobListingSection jobs={jobs} />
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

const SearchBar = ({ searchParams, onInputChange, onSearch }) => (
    <div className="search-bar">
        <input type="text" name="title" value={searchParams.title} placeholder="Skills, Job Title, Designation" onChange={onInputChange} />
        <input type="text" name="location" value={searchParams.location} placeholder="Location" onChange={onInputChange} />
        <input type="text" name="experience" value={searchParams.experience} placeholder="Experience" onChange={onInputChange} />
        <button type="button" onClick={onSearch}>Search</button>
    </div>
);

const JobListingSection = ({ jobs }) => (
    <section className="job-listing">
        {jobs.map((job) => (
            <JobCard
                key={job.id}
                title={job.title}
                company={job.company}
                location={job.location}
                logo={job.logo}
                description={job.description}
                postedDate={job.postedDate}
            />
        ))}
    </section>
);

const JobCard = ({ title, company, location, logo, description, postedDate }) => {
    const viewDetails = () => {
        alert(`View details for ${title} at ${company} in ${location}.\n\nDescription: ${description}`);
    };

    const applyNow = () => {
        window.location.href = `apply.html?job=${encodeURIComponent(title)}`;
    };

    return (
        <div className="job-card">
            <div className="job-header">
                <h2>{title}</h2>
                <img src={logo} alt={`${company} Logo`} className="company-logo" />
            </div>
            <p>{company} - {location}</p>
            <p>Posted: {postedDate}</p>
            <div className="buttons">
                <button className="view-details-btn" onClick={viewDetails}>View Details</button>
                <button className="apply-now-btn" onClick={applyNow}>Apply Now</button>
            </div>
        </div>
    );
};

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
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 JobPro. All Rights Reserved. | <a href="#">Terms of Service</a></p>
            </div>
        </div>
    </footer>
);

export default JobListing;
