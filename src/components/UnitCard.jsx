import React from "react";
import { Button, Card, CardBody, Progress } from "reactstrap";

const color = ["info", "danger", "primary", "warning"];

const UnitCard = ({ index }) => {
  return (
    <div className={`mt-5 mb-4`}>
      <Card
        className={`border border-white ${
          index <= 2 ? "bg-gradient-warning shadow" : "bg-gradient-light "
        }`}
      >
        <CardBody className="position-relative px-0">
          <div
            className="position-absolute d-flex justify-content-center text-dark text-uppercase text-center mx-auto w-100"
            style={{ left: "0", top: "-17px" }}
          >
            <h6 className="px-2 py-1 bg-gradient-warning border border-white rounded">
              Les bases {index + 1}
            </h6>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center align-items-center mt-2 mb-3">
            <Button
              color="white"
              className="position-absolute"
              style={{
                width: "60px",
                height: "60px",
                left: "0",
                borderRadius: "0% 100% 100% 0%",
                padding: "0",
                fontSize: "1.7rem",
              }}
            >
              <i className="fa fa-play" />
            </Button>

            <div className="d-flex justify-content-center align-items-center">
              {[0, 1, 2].map((lesson, i) => (
                <Button
                  key={i}
                  className="bg-gradient-warning mx-2"
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "solid 3px white",
                    borderRadius: "50%",
                    padding: "0",
                    fontSize: "1.4rem",
                  }}
                >
                  <i className="fa fa-user" />
                </Button>
              ))}
            </div>

            <Button
              color="white"
              className="position-absolute"
              style={{
                width: "60px",
                height: "60px",
                right: "0",
                borderRadius: "100% 0% 0% 100%",
                padding: "0",
                fontSize: "2rem",
              }}
            >
              <i className="fa fa-trophy" style={{ width: "20px" }} />
            </Button>
          </div>

          {/* Progress bar */}
          <div
            className="position-absolute w-100 p-0"
            style={{ bottom: "0", left: "0" }}
          >
            <div className="position-relative w-100">
              <div className="progress-label">
                <span className="ml-1 pb-0">9595959%</span>
              </div>
              <Progress
                className="m-0"
                max="100"
                value={String(Math.random() * 100)}
                color="dark"
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UnitCard;
