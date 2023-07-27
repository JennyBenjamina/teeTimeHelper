import React, { useEffect, useState } from 'react';
import Useranswers from './Useranswers';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Confidence from './Confidence';
import { Modal, Spinner } from 'react-bootstrap';

function Answers({ answers }) {
  const [showAns, setShowAns] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(answers);

  const [confidence, setConfidence] = useState('');

  const [load, setLoad] = useState(false);

  const handleSwitch = () => {
    setShowAns(!showAns);
  };

  useEffect(() => {
    fetchAnswers();
  }, [userAnswer]);

  const fetchAnswers = () => {
    if (userAnswer !== null) {
      setLoad(true);
      axios
        .post('http://localhost:5000/checkAnswers', {
          user: userAnswer,
          corrAns: correctAnswer,
        })
        .then((res) => {
          setLoad(false);
          setConfidence(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Form className="questions_container">
        <Form.Check
          type="switch"
          id="ans-switch"
          label="Show Answer"
          onChange={handleSwitch}
        />
      </Form>
      {showAns && <div className="answers">{answers}</div>}

      <Useranswers sendUserData={(d) => setUserAnswer(d)} />
      {load ? <Spinner animation="border" variant="success" /> : null}
      {userAnswer && !load ? <Confidence confidence={confidence} /> : null}
    </>
  );
}

export default Answers;
