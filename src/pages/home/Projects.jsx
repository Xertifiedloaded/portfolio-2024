import React, { useState, useEffect } from "react";
import {
  GridBox,
  BoxInfo,
  Title,
  Para,
  Button,
  BtnDiv,
  Description,
} from "../../utils";
import Pagination from "../../components/pagination/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";

const URL = "https://portfolio-backend-hama.onrender.com/api/v1/get";

export default function Projects() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(URL);
        const {
          data: { portfolioEntries },
        } = response.data;
        setData(portfolioEntries);
        setIsLoading(false); 
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false); 
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div>
        <h1>Projects</h1>
        {isLoading ? (
          <div className="loaderDiv">
            <div class="loader"></div> 
          </div>
        ) : (
          <GridBox>
            {data.map((project) => (
              <BoxInfo
                key={project._id}
                style={{
                  backgroundImage: `url(${project.projectImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "all 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundSize = "110%")}
                onMouseLeave={(e) => (e.target.style.backgroundSize = "100%")}
              >
                <Title>
                  <Para>{project.projectName}</Para>
                  <BtnDiv>
                    <Button>
                      <Link to={project.imageGithubUrl}>Source Code</Link>
                    </Button>
                    <div className="-tools">{project.tools}</div>
                  </BtnDiv>
                </Title>
              </BoxInfo>
            ))}
          </GridBox>
        )}
      </div>
    </>
  );
}
