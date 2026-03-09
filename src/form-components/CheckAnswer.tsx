import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");
    const isCorrect = givenAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                value={givenAnswer}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setGivenAnswer(event.target.value);
                }}
            ></Form.Control>
            <div>{isCorrect ? "✔️" : "❌"}</div>
        </div>
    );
}
