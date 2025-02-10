



const WorkExperience = (props) => {
    return (
        <div class="section" id="work-experience">
            <div class="section-title">
                Work Experience
            </div>
            <div class="section-content">
                {
                    props.workExperience.titles.map((title, i) => (
                        <div class="section-subsection">
                            <div class="content-header">
                                {title}
                            </div>
                            <div class="content-body">
                                {props.workExperience.descriptions[i]}
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};


export default WorkExperience;