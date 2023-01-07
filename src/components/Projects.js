// Import Assets
import plant from '../assets/plant.jpg';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3><strong>Plant Disease Detection</strong></h3>
                    <img src={plant} alt="plant" />
                    <p>Plant disease detection using machine learning involves training a model on a dataset of labeled plant images,
                         where the labels indicate the presence or absence of a particular disease. The model can then be used to predict
                          the likelihood of a disease being present in a new, unseen plant image.</p>

                    <a href="https://github.com/Vinay-ponugoti/Plant-Disease-Detection" target="_blank" className="button">Code</a>
                    {/* <a className="button">Result</a> */}
                </div>
                
            </div>
        </section>
    );
}

export default Projects;