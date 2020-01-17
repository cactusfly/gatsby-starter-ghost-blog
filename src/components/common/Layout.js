import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Navigation } from '.'
import config from '../../utils/siteConfig'


// Styles
import '../../styles/app.css'


/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <meta name="description" content="UILO" />
                <meta name="keywords" content="sales enablement, sales outsourcing" />    
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
                <body className={["home-template",bodyClass].join(' ')} />
            </Helmet>           
                
            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
                    
                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                            var body = document.body;
                            body.classList.add("home-template");
                            function change() {
                                   var elem = document.getElementById("changeText");
                                var myArray = ["Outsourced Sales Development", "Fractional Sales Leadership", "Sales Development Consulting", "Sales Enablement Consulting", "Sales Training", "Enterprise Selling", "Big Ticket Sales Coaching", "Sales Assessments", "Sales Management Training", "Sales Alignment", "Growth Consulting", "Hiring for Sales", "Leadership Coaching", "Sales Conversations", "Sales Productivity", "Sales Resources", "Business Strategy", "Customer Value Marketing", "Lead Nurturing", "Lead Generation", "Lead Scoring", "Customer Experience", "Real-time Sales Personalization", "Sales Intelligence", "Inbound Marketing", "CX Lifecycle Management", "Customer Experience!", "Big Data Marketing", "Deep Data Integration", "Analytics Automation", "Transaction Automation", "Marketing Automation", "Multichannel Marketing", "Dynamic Lead Generation", "Sales Automation", "Predictive marketing", "Customer Referrals", "Responsive Sales", "Growth Hacking!", "CRM Integrations", "ERP Integrations", "Sales Development", "Sales Engagement", "Sales Management", "Sales Operations", "Sales Process", "Sales Technology"];
                                elem.innerHTML = myArray[Math.floor(Math.random() * myArray.length)]; } 
                            function homePageOnly() { var inst = setInterval(change, Math.floor(Math.random() * 2000) + 5000); }
                            if(window.location.pathname == "/"){ homePageOnly(); }
                            `, }} />


                    <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { isHome ? <div id="blog-uilo-search" style={{fontSize: '1.2em !important'}} className="input-drop"> <input type="text" placeholder="Search..." /> <ul /> </div> : null }
                                 </div>
                            </div>
                            { isHome ?
                               <div className="site-banner">                              
    
                                    {/* <h1 className="site-banner-title">{site.title}</h1> */}
                                    <center><a style={{textDecoration: 'none !important'}} href="/"><p style={{marginTop: '30px', color: '#000', fontSize: '50px', marginBottom: 0, textTransform: 'uppercase', transform: 'rotate(-20deg) skew(-20deg)', backgroundColor: 'transparent', fontWeight: 'bold'}}><span style={{lineHeight: '1.25', marginBottom: 0, backgroundColor: 'white', color: 'black', position: 'relative', zIndex: 9999, textAlign: 'center'}}>UILO</span><br /></p><p className="em-zap" /></a></center> <br />
                                    {/* <p className="site-banner-desc">{site.description}</p> */}
                                    <div style={{fontSize: '1.25em', textTransform: 'uppercase', marginRight: '0px', fontWeight: 'normal', letterSpacing: '2.25px', color: 'slategrey !important'}} id="changeText" />
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation data={site.navigation} navClass="site-nav-item" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="site-nav-button" to="/about">About</Link>
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>

                                </div>
                            </nav>
                        </div>
                    </header>
    
                    { isHome ?    
                    <div className="container">
                    <div style={{padding: '0 4vw !important', marginBottom: '60px !important', marginTop: '20px !important', maxWidth: '100% !important'}} className="inner site-main hiddenZ"><center className="inner"> <div className="post-feed"> <article className="post-card post post-card-large" style={{flex: '1 1 350px'}}> <a href="./partners" style={{textDecoration: 'none'}}><div className="post-card-content"> <div className="post-card-content-link"> <header className="post-card-header center"> <img src="https://res.cloudinary.com/dw4k14rp7/image/upload/v1556959081/adskore-1.png" className="img-responsive" alt="ADskore" /> </header> <section className="post-card-excerpt"> <center><h2 style={{margin: '0 !important'}}>⟶</h2><b>PARTNER PROGRAMS</b><p>I have a B2B customer base and would like to hear more about the opportunities to build value through a partnership. </p></center> </section> </div> </div> </a> </article> <article className="post-card post post-card-large" style={{flex: '1 1 350px'}}> <a href="./about" style={{textDecoration: 'none'}}><div className="post-card-content"> <div className="post-card-content-link"> <header className="post-card-header center"> <img src="https://res.cloudinary.com/dw4k14rp7/image/upload/v1563358556/156333578331423546.png" className="img-responsive" alt="WeLoveSales" /></header> <section className="post-card-excerpt"><center><h2 style={{margin: '0 !important'}}>⟶</h2><b>EXPLORE SERVICES</b><p>I am running a small or medium sized business and I am interested to find how UILO can increase my sales.</p><br /></center> </section> </div> </div> </a></article><article className="hiddenX post-card post post-card-large" style={{boxShadow: 'none !important', background: 'transparent !important', flex: '1 1 200px'}}> <div className="post-card-content"> <div className="pricingTableX"> <div className="pricingTableX-header"> <span className="heading"> {/*<h4>Standard</h4> -*/} </span> <span className="price-value"><sup>$</sup>10<sub>/Mo</sub><span className="month">CONSULTING</span></span> </div> <div className="pricingTableX-sign-up"> <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JGZQNDL43A2T6" style={{textDecoration: 'none !important', color: '#152a38'}} className="btn btn-default">PURCHASE</a></div> </div> </div> </article></div></center></div>
                    </div> : null }


                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot">
                        <div className="site-foot-nav container">
                            <div className="site-foot-nav-left">
                                <Link to="/">{site.title}</Link> © OPENBRACE
                            </div>
                            <div className="site-foot-nav-right">
                                <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
