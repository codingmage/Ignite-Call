import { useState } from "react";
import { CalendarStep } from "./CalendarStep";

import { ConfirmStep } from "./ConfirmStep";

export function ScheduleForm() {
    const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

    function handleClearSelectTime() {
        setSelectedDateTime(null)
    }

    if (selectedDateTime) {
        return <ConfirmStep 
            schedulingDate={selectedDateTime} 
            onCancelConfirmation={handleClearSelectTime} 
        />
    }


    return (
        <CalendarStep onSelectDateTime={setSelectedDateTime} />
    )
}