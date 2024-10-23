
    function viewDetails(title, company, location, description) {
    
        alert(`Job Title: ${title}\nCompany: ${company}\nLocation: ${location}\nDescription: ${description}`);
    }
    function applyNow(jobTitle) {
        
        window.location.href = `apply.html?job=${encodeURIComponent(jobTitle)}`;
    }

  
