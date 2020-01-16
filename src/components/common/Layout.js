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
                <body className={bodyClass} />
            </Helmet>
            <Helmet link={[{"href": "https://res.cloudinary.com/dajwfihdi/raw/upload/v1579142507/2019_custom_ae0gri.css", "type": "text/css", "rel": "stylesheet" } ]}  />
            <Helmet script={[{"src": "https://unpkg.com/@tryghost/content-api@1.0.0/umd/content-api.min.js", "type": "text/javascript"} ]} /> 
            
            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head" style={{ ...site.cover_image && { backgroundImage: `url(${site.cover_image})` } }}>
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
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { isHome ?
                               
                               <div className="site-banner">
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
                                            
                                            <!---- search --->
                                                    let ghostAPI = new GhostContentAPI({
                                                    host: 'https://uilo.com',
                                                    ghostPath: 'ghost',
                                                    key: '26b4f0ad8f53b2bf222ab80c73',
                                                    version: 'v2'
                                                });

                                                ghostAPI.posts
                                                    .browse({
                                                        limit: "all",
                                                        fields: ["title", "html", "url"]
                                                    })
                                                    .then(data => initSearch(data))
                                                    .catch(err => {
                                                        console.error(err);
                                                    });

                                                function initSearch(data) {
                                                    const input_drop = document.getElementById("blog-uilo-search");
                                                    input_drop.querySelector("input").addEventListener("keyup", async e => {
                                                        input_drop.classList.remove("active");

                                                        input_drop.querySelector("ul").innerHTML = "";

                                                        const list = data
                                                            .map(record => {
                                                                var regex = new RegExp(
                                                                    `(${e.target.value
                                                                    .split(" ")
                                                                    .map(term => ` ($ {
                                                                        term
                                                                    })
                                                                    `)
                                                                    .join("|")})`,
                                                                    "gim"
                                                                );

                                                                record.counts = 0;

                                                                record.html.replace(regex, function(_, matched) {
                                                                    matched = matched.toLowerCase();
                                                                    record.counts++;
                                                                });

                                                                return record;
                                                            })
                                                            .filter(record => record.counts > 0)
                                                            .sort((a, b) => {
                                                                if (a.counts > b.counts) {
                                                                    return -1;
                                                                }
                                                                if (a.counts < b.counts) {
                                                                    return 1;
                                                                }
                                                                return 0;
                                                            });

                                                        const items = list.slice(0, 5);

                                                        items.forEach(async item => {
                                                            const li = document.createElement("li");
                                                            li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;
                                                            input_drop.querySelector("ul").appendChild(li);
                                                        });

                                                        setTimeout(() => {
                                                            if (!input_drop.querySelector("input").value.length) {
                                                                input_drop.classList.remove("active");
                                                                input_drop.querySelector("ul").innerHTML = "";
                                                            }
                                                        }, 500);

                                                        input_drop.classList.add("active");
                                                    });
                                                }
                                                <!---- search --->
                                            `,
                                      }}
                                    />
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
                                    
                                    <div id="blog-uilo-search" style={{fontSize: '1.2em !important'}} className="input-drop"> <input type="text" placeholder="Search..." /> <ul /> </div>
                                    <Link className="site-nav-button" to="/about">About</Link>
                                </div>
                            </nav>
                        </div>
                    </header>

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
