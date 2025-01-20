import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { Subdistrict } from "../components/subdistrict";
import { ModalSubdistrict } from "../components/modalSubdistrict";
import { Loading } from "../components/loading";
import { getCityById } from "../api/city";
import logo from "../assets/logo.png";

export const CityDetail = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(0);
  const [modalSubdistrict, setModalSubdistrict] = useState(false);
  const { id } = useParams();

  const loadData = async () => {
    try {
      const res = await getCityById(id);
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    loadData();
  }, [update]);

  const { name, subdistricts, province } = data;

  const toggleSubdistrict = () => {
    setModalSubdistrict(!modalSubdistrict);
  };

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="mt-3">
          <img src={logo} height={100} alt="image" loading="lazy" />
        </div>
        <div className="d-flex">
          <h3>Provinsi</h3>
          <h3 className="text-danger ms-2">{province.name}</h3>
        </div>
        <Card>
          <CardHeader className="d-flex justify-content-start align-content-center">
            <Link to="/">
              <Button color="link">
                <i className="bi-arrow-left"></i>
              </Button>
            </Link>
            <div className="align-content-center ms-3">
              <h4 className="m-0">{name}</h4>
            </div>
          </CardHeader>
          <CardBody>
            {subdistricts?.length > 0 ? (
              subdistricts.map((sub) => {
                return <Subdistrict data={sub} setUpdate={setUpdate}/>;
              })
            ) : (
              <div>Belum ada data yang ditambahkan.</div>
            )}
          </CardBody>
          <CardFooter>
            <Button
              className="custom-btn w-100 d-flex justify-content-center"
              onClick={() => {
                toggleSubdistrict();
              }}
            >
              <i className="bi bi-plus"></i>
              <div>Add Subdistrict</div>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <ModalSubdistrict
        modal={modalSubdistrict}
        toggle={toggleSubdistrict}
        city={data}
        setUpdate={setUpdate}
      ></ModalSubdistrict>
    </Fragment>
  );
};
