function change() {
    var elem = document.getElementById("changeText");
    var myArray = ["Outsourced Sales Development", "Fractional Sales Leadership", "Sales Development Consulting", "Sales Enablement Consulting", "Sales Training", "Enterprise Selling", "Big Ticket Sales Coaching", "Sales Assessments", "Sales Management Training", "Sales Alignment", "Growth Consulting", "Hiring for Sales", "Leadership Coaching", "Sales Conversations", "Sales Productivity", "Sales Resources", "Business Strategy", "Customer Value Marketing", "Lead Nurturing", "Lead Generation", "Lead Scoring", "Customer Experience", "Real-time Sales Personalization", "Sales Intelligence", "Inbound Marketing", "CX Lifecycle Management", "Customer Experience!", "Big Data Marketing", "Deep Data Integration", "Analytics Automation", "Transaction Automation", "Marketing Automation", "Multichannel Marketing", "Dynamic Lead Generation", "Sales Automation", "Predictive marketing", "Customer Referrals", "Responsive Sales", "Growth Hacking!", "CRM Integrations", "ERP Integrations", "Sales Development", "Sales Engagement", "Sales Management", "Sales Operations", "Sales Process", "Sales Technology"];
    elem.innerHTML = myArray[Math.floor(Math.random() * myArray.length)];
} 

function homePageOnly() {
    var inst = setInterval(change, Math.floor(Math.random() * 2000) + 5000);
}

if(window.location.pathname == "/"){
	homePageOnly();
}
