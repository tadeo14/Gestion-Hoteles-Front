
import React, { useEffect, useState } from "react";
import { Table, Row, Col, Container } from "react-bootstrap";
import CardComponent from "../components/CardComponent/CardComponent.jsx";
import axiosConfig from "../config/axiosConfig.jsx"
import "../main.jsx";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axiosConfig.get("/users/");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="container main-home d-flex  flex-wrap align-items-start justify-content-center pt-5">
      <Container>
        <Row>
          <Col lg="8" className="text-center">
            <h1>Personal administrativo</h1>
            <div className="mt-4">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre completo</th>
                    <th>Contacto</th>
                    <th>Dirección</th>
                    <th>Cursos a cargo</th>
                    <th>Habilitación</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, i) => (
                    <tr key={i}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>
                        {user.email} - {user.phone}
                      </td>
                      <td>{user.adress}</td>
                      <td>{user.courseInCharge}</td>
                      <td>{user.state ? "Habilitado" : "No habilitado"}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col xs lg="4" className="text-center">
            <h1>Alumnos</h1>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-center flex-lg-column align-items-lg-center">
              <CardComponent
                name={"Ver alumnos"}
                img={
                  "https://media.istockphoto.com/photos/teenage-school-kids-smiling-to-camera-in-school-corridor-picture-id826212368?b=1&k=20&m=826212368&s=170667a&w=0&h=gYQ2zFTRSClCOoGI0P__MmDjFZZvQkKhcYC7_zDZefk="
                }
                url={"/students"}
              />
            </div>
            <h1>Materias</h1>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-center flex-lg-column align-items-lg-center">
              <CardComponent
                name={"Ver materias"}
                img={
                  "https://as2.ftcdn.net/v2/jpg/01/93/92/99/1000_F_193929975_aljh2eRP7pZ5MhnuO9R3WrbcEpQGkljB.jpg"
                }
                url={"/subjects"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
