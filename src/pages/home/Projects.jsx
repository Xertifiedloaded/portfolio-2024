import React, { useState } from "react";
import {
  GridBox,
  BoxInfo,
  Title,
  Para,
  projectsData,
  Button,
  BtnDiv,
  Description,
} from "../../utils";
import Pagination from "../../components/pagination/Pagination";
export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalProjects = projectsData.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProjects = projectsData.slice(startIndex, endIndex);

  return (
    <>
      <div>
        <h1>Projects</h1>
        <GridBox>
          {visibleProjects.map((project) => (
            <BoxInfo
              key={project.id}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "all 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundSize = "110%")}
              onMouseLeave={(e) => (e.target.style.backgroundSize = "100%")}
            >
              <Title>
                <Para>{project.project}</Para>
                <Description>Ilove Abg</Description>

                <BtnDiv>
                  <Button>Source Code</Button>
                  <div className="-tools">
                    <span className="-react">Reactjs</span>,
                    <span className="-node"> Nodejs</span>,
                    <span className="-node"> MongoDb</span>
                  </div>
                </BtnDiv>
              </Title>
            </BoxInfo>
          ))}
        </GridBox>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
