import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
import DotLoader from "react-spinners/DotLoader";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import { css } from "@emotion/core";
import React from "react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function LoadingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="bg-transparent shadow-none"
      centered
    >
      <Modal.Body className="my-5 justify-content-center text-center">
        {props.isLoading ? (
          <DotLoader
            css={override}
            size={100}
            //size={"150px"} this also works
            color={"#28A745"}
            loading={props.isLoading}
          />
        ) : (
            <div>
                <OfflinePinIcon style={{ color: "green", fontSize: 100 }}/>
                <h3 className="mt-4">Your CV has been sent, check your inbox!</h3>
            </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
