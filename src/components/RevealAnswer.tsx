import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isAnswerVisible, setIsAnswerVisible] = useState<boolean>(false);
    return (
        <div>
            <Button onClick={() => setIsAnswerVisible((visible) => !visible)}>
                Reveal Answer
            </Button>
            {isAnswerVisible && <div>42</div>}
        </div>
    );
}
