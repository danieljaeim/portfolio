import "../Skills/skills.css"
/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
    return (
        <>
            <div className="col-span-6">
                <div className={props.id.main + " feature-box-03"}>
                    <div className="overlay-box">
                        <img src={props.img}></img>
                    </div>
                    <span className="description-box"> DESCRIPTION </span>
                </div>
            </div>
        </>
    );
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {

    const skill_list = [
        {id:{main:'bg-3', icon:'fab fa-react'}, title:'Discord Bot', img:"img/secret-hitler.png"},
        {id:{main:'bg-1', icon:'fab fa-node-js'}, title:'Pathfinder', img: "img/pathfinder.png"},
        {id:{main:'bg-2', icon:'fas fa-signal'}, title:'Spotluck', img: "img/spotluck.png" },
        {id:{main:'bg-4', icon:'fas fa-brain'}, title:'Data Structures, Algorithms' },
        {id:{main:'bg-5', icon:'fas fa-map-signs'}, title:'System Design' },
        {id:{main:'bg-6', icon:'fab fa-android'}, title:'App Dev' },
    ]

    return (
        <>
            <section data-scroll-data="2" id="projects" className="section experience-section !pb-0">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
                        <div className="lg:col-span-6 lg:pl-9">
                            <div className="section-heading">
                                <h3 className="m-0"><span>Projects</span></h3>
                            </div>
                            <div className="skill-box">
                                <div className="grid gap-4 grid-cols-12">
                                    {
                                        skill_list.map((val, i)=>{
                                            return <Skill key={i} id={val.id} title={val.title} img={val.img}/>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 text-center pt-[40px] md:pt-0">
                            <img className="mx-[auto]" src="img/skills.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                
            </section>
        </>
    );
}
