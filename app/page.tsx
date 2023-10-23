import React from "react"
import Link from "next/link"
import { DatePicker } from "@/components/DatePicker"
import { Dropdown } from "@/components/Dropdown"

const page = () => {
  return (
    <div>
      <DatePicker />
      <div className="my-5">
        <Dropdown />
        <div>Hello guys</div>
      </div>
    </div>
  )
}

export default page
