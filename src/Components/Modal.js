import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const ModalComp = (props) => {
  const [searchedUser, setSearchedUser] = useState(null);
  const db = getFirestore();
  const [email, setEmail] = useState("");
  const searchUser = async (email) => {
    const data = query(collection(db, "userinfo"), where("email", "==", email));

    const querySnapshot = await getDocs(data);
    querySnapshot.forEach((doc) => {
      setSearchedUser(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
  };

  const chatStarter = async (new_chat_user) => {
    const msgLink = uuidv4();
    console.log("OWN USER", props.user.uid);
    console.log("NEW USER", new_chat_user.uid);

    await setDoc(
      doc(db, "messages", msgLink),
      {
        messages: [{ msg: "Welcome to the chat", user: "system" }],
        participants: [props.user.uid, new_chat_user.uid],
      },
      { merge: true }
    );

    await setDoc(
      doc(db, "users", `${new_chat_user.uid}`),
      {
        msgcollection: [msgLink],
      },
      { merge: true }
    ).then(() => {
      console.log("CHAT STARTED SUCCESSFULLY new_chat_user");
    });

    await setDoc(
      doc(db, "users", `${props.user.uid}`),
      {
        msgcollection: [msgLink],
      },
      { merge: true }
    ).then(() => {
      console.log("CHAT STARTED SUCCESSFULLY props.user.uid");
    });
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Search User By Email
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
            className='userCard'>
            {searchedUser ? (
              <h5>{searchedUser.name}</h5>
            ) : (
              <h5>No User Found</h5>
            )}
            <Button onClick={() => chatStarter(searchedUser)}>
              Start Chat
            </Button>
          </div>
          <br />
          <Button
            variant='primary'
            type='button'
            onClick={() => searchUser(email)}>
            Search
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
