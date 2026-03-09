import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attempts}</div>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRequestedAttempts(event.target.value);
                }}
            ></Form.Control>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    const toGain = Number.parseInt(requestedAttempts, 10);
                    if (!Number.isNaN(toGain)) {
                        setAttempts(attempts + toGain);
                    }
                }}
            >
                gain
            </Button>
        </div>
    );
}
