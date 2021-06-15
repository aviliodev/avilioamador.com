import React, {useState,useEffect} from 'react'
import ProjectsInfo from '../data/projects.js';
import ProjectItem from './ProjectItem'
import '../style/componentstyle/portfolio.css'


const Portfolio = () => {

    const [searchText, setSearchText] = useState('')
    const [projectsData, setProjectsData] = useState(ProjectsInfo)

    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() => 
            ProjectsInfo.filter((item) => 
                item.name.toLowerCase.match(searchText.toLowerCase)
            )
        )
    }, [searchText])

    const handleFilter = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    };
    const handleTodos = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    setProjectsData(ProjectsInfo);
    };

    return (
        <section className="flex" id="portfolio">
            <div className="header wayp slide-in-right">
            PROJECTS
            </div>
            <div className="header-bar wayp slide-in-right dly3"></div>

            <div className="filter-wrap wayp fade-in">
                <div className="flex row">
                    <div className="filter " data-filter="all">ALL</div>
                    <div className="filter " data-filter=".rails">RUBY/RAILS</div>
                    <div className="filter" data-filter=".react">REACT-JS</div>
                    <div className="filter" data-filter=".js">JAVASCRIPT</div>
                </div>
                <div className="float-bar">
                    <div className="flex row">
                    <div className="filter" data-filter="all">ALL</div>
                    <div className="filter" data-filter=".rails">RUBY/RAILS</div>
                    <div className="filter" data-filter=".react">REACT-JS</div>
                    <div className="filter" data-filter=".js">JAVASCRIPT</div>
                    </div>
                </div>
            </div>
            <div id="gallery" className="container flex row wrap wayp">
                {projectsData.map((item) => (
                    <ProjectItem
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                    />
                ))

                }
            </div>

            {/* <div id="gallery" className="container flex row wrap wayp">
                <div className="mix react" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">ChowNow Ordering</div>
                        <span className="highlight">React JS / Python</span>
                    </div>
                    <div className="button" id="ordering">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix react" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">ChowNow Discover</div>
                        <span className="highlight">React JS / Python</span>
                    </div>
                    <div className="button" id="discover">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix react" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">New Relic</div>
                        <span className="highlight">React / Ruby on Rails / AEM</span>
                    </div>
                    <div className="button" id="newrelic">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix js" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">Roambi</div>
                        <span className="highlight">JavaScript</span>
                    </div>
                    <div className="button" id="roambi">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix rails" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">Walker Tracker</div>
                        <span className="highlight">JS / Ruby on Rails</span>
                    </div>
                    <div className="button" id="walker">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix js" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">MY STAND</div>
                        <span className="highlight">JS / Node.js on Sails</span>
                    </div>
                    <div className="button" id="mystand">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix js" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">NEVER SURRENDER</div>
                        <span className="highlight">JavaScript</span>
                    </div>
                    <div className="button" id="never">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix rails" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">Powur</div>
                        <span className="highlight">Angular / Ruby on Rails</span>
                    </div>
                    <div className="button" id="powur">LEARN MORE</div>
                    </div>
                </div>

                <div className="mix js" data-my-order="1">
                    <div>
                    <div className="card"></div>
                    <div className="text">
                        <div className="bold">The Mall</div>
                        <span className="highlight">React.js / Node</span>
                    </div>
                    <div className="button" id="themall">LEARN MORE</div>
                    </div>
                </div>
            </div> */}
        </section>    
    )}

export default Portfolio