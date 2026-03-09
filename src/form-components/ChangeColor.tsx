import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
];

export function ChangeColor(): React.JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color-choices"
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setChosenColor(event.target.value);
                        }}
                    ></Form.Check>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    display: "inline-block",
                    padding: "8px 12px",
                    marginTop: "8px",
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
