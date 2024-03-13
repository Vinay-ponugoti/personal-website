// Import Assets
import plant from '../assets/plant.jpg';
import stack from '../assets/Stack.png';
import vote from '../assets/voting.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">
                <div className="projects__card">
                    <h3><strong>Stackoverflow-Clone</strong></h3>
                    <img src={stack} alt="stack-overflow" />
                    <p>Stack Overflow is a question and answer website for programmers to share their knowledge and expertise with others.
                         Users can ask and answer technical questions, share code snippets, and collaborate on solutions to programming problems. 
                         </p>
                    <a href="https://github.com/Vinay-ponugoti/Plant-Disease-Detection" target="_blank" className="button">Code</a>
                    {/* <a className="button">Result</a> */}
                </div>
                
                <div className="projects__card">
                    <h3><strong>Decentralised-voting-app</strong></h3>
                    <img src={vote} alt="Voteing" />
                    <p>Stack Overflow is a question and answer website for programmers to share their knowledge and expertise with others.
                         Users can ask and answer technical questions, share code snippets, and collaborate on solutions to programming problems. 
                         </p>
                    <a href="https://github.com/Vinay-ponugoti/Decentralised-voting-app.git" target="_blank" className="button">Code</a>
                    {/* <a className="button">Result</a> */}
                </div>

                <div className="projects__card">
                    <h3><strong>Plant Disease Detection</strong></h3>
                    <img src={plant} alt="plant" />
                    <p>Plant disease detection using machine learning involves training a model on a dataset of labeled plant images,
                         where the labels indicate the presence or absence of a particular disease. The model can then be used to predict
                          the likelihood of a disease.</p>

                    <a href="https://github.com/Vinay-ponugoti/Plant-Disease-Detection" target="_blank" className="button">Code</a>
                    {/* <a className="button">Result</a> */}
                </div>
                
            </div>
        </section>
    );
}

export default Projects;
