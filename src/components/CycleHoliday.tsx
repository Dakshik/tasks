import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎃" | "🎆" | "🍀" | "🦃" | "💘";
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    const nextAlphabetHoliday: Record<Holiday, Holiday> = {
        "🎃": "🍀",
        "🍀": "💘",
        "💘": "🎆",
        "🎆": "🦃",
        "🦃": "🎃"
    };

    const nextYearHoliday: Record<Holiday, Holiday> = {
        "🎃": "🦃",
        "🦃": "💘",
        "💘": "🍀",
        "🍀": "🎆",
        "🎆": "🎃"
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={() => setHoliday(nextAlphabetHoliday[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextYearHoliday[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}
