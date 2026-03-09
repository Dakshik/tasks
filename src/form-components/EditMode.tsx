import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const displayedName = name || "Your Name";

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEditMode(event.target.checked);
                }}
            ></Form.Check>
            {editMode ? (
                <div>
                    <Form.Control
                        aria-label="Name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setName(event.target.value);
                        }}
                    ></Form.Control>
                    <Form.Check
                        type="checkbox"
                        label="Student"
                        aria-label="Student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    ></Form.Check>
                </div>
            ) : (
                <div>
                    {displayedName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
