import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [isQuizInProgress, setIsQuizInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setAttempts((currentAttempts) => currentAttempts - 1);
        setIsQuizInProgress(true);
    }

    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Button
                onClick={startQuiz}
                disabled={isQuizInProgress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setIsQuizInProgress(false)}
                disabled={!isQuizInProgress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts((currentAttempts) => currentAttempts + 1)}
                disabled={isQuizInProgress}
            >
                Mulligan
            </Button>
        </div>
    );
}
