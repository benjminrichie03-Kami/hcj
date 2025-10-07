"use client";
import { useState } from "react";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Table from "../../../components/Table";
import StatsCard from "../../../components/StatsCard";
import { Users2Icon, Calendar } from "lucide-react";
import { FaPlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";
import { MdOutlineFileUpload } from "react-icons/md";
import { PiClockClockwise } from "react-icons/pi";
import RegCard from "@/components/RegCard";
import { GetDropDowns } from "@/components/GetDropDowns";
import SearchableSelect from "@/components/SearchableSelect";

export default function AdminDashboard() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedExamType, setSelectedExamType] = useState("PSCLE");

  // GET DROPDOWN DATA
  const examTypes = GetDropDowns.getExamTypes();
  const examYears = GetDropDowns.getExamYears();
  const statusOptions = GetDropDowns.getStatusOptions();

  // DATABASE
  const allStudentsData = [
    {
      reg_number: "EDC001",
      name: "Ayomide Balogun",
      gender: "Male",
      exam_type: "PSCLE",
      year: "2025",
      total_score: 85,
    },
    {
      reg_number: "EDC002",
      name: "Chiukwuneme Olu",
      gender: "Male",
      exam_type: "PSCLE",
      year: "2025",
    },
    {
      reg_number: "EDC003",
      name: "Fatimatu Daniel",
      gender: "Female",
      exam_type: "PSCLE",
      year: "2025",
    },
    {
      reg_number: "EDC004",
      name: "Jennifer Anaghbogu",
      gender: "Male",
      exam_type: "PSCLE",
      year: "2025",
    },
    {
      reg_number: "EDC005",
      name: "James Dikeocha",
      gender: "Male",
      exam_type: "PSCLE",
      year: "2025",
    },
    {
      reg_number: "EDC006",
      name: "Promise",
      gender: "Male",
      exam_type: "PSCLE",
      year: "2025",
    },
    {
      reg_number: "GPT001",
      name: "Michael Johnson",
      gender: "Male",
      exam_type: "GPT",
      year: "2025",
      total_score: 92,
    },
    {
      reg_number: "GPT002",
      name: "Sarah Williams",
      gender: "Female",
      exam_type: "GPT",
      year: "2025",
      total_score: 88,
    },
    {
      reg_number: "GPT003",
      name: "David Brown",
      gender: "Male",
      exam_type: "GPT",
      year: "2025",
    },
    {
      reg_number: "GPT004",
      name: "Emma Davis",
      gender: "Female",
      exam_type: "GPT",
      year: "2025",
    },
  ];

  // FILTER STUDENTS BASED ON SELECTED EXAM TYPE
  const studentsData = allStudentsData.filter(
    (student) => student.exam_type === selectedExamType
  );

  // COUNTS BASED ON EXAM TYPE
  const totalStudents = studentsData.length;
  const registeredStudents = studentsData.filter(
    (student) => student.total_score
  ).length;
  const pendingStudents = totalStudents - registeredStudents;

  // DYNAMIC REGISTRATION DEADLINE BASED ON EXAM TYPE
  const registrationDeadline =
    selectedExamType === "PSCLE" ? "Nov. 23, 2025" : "Dec. 15, 2025";

  // DYNAMIC TABLE HEADERS
  const tableHeaders = [
    "S/N",
    "Reg Number",
    "Name",
    "Gender",
    "Exam Type",
    "Year",
    "Total Score",
  ];

  // Add S/N dynamically to studentsData
  const studentsDataWithSN = studentsData.map((student, idx) => ({
    ...student,
    s_n: idx + 1,
  }));

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* SCHOOL HEADER */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white py-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Efemini Primary School
              </h1>
              <div className="relative">
                <button
                  onClick={() => {
                    const dropdown =
                      document.getElementById("examTypeDropdown");
                    dropdown.classList.toggle("hidden");
                  }}
                  className="inline-flex items-center gap-2 bg-transparent text-gray-600 border border-[#5E9FF5] text-sm font-medium px-3 py-1 rounded-full"
                >
                  {selectedExamType}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id="examTypeDropdown"
                  className="hidden absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setSelectedExamType("PSCLE");
                        document
                          .getElementById("examTypeDropdown")
                          .classList.add("hidden");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      PSCLE
                    </button>
                    <button
                      onClick={() => {
                        setSelectedExamType("GPT");
                        document
                          .getElementById("examTypeDropdown")
                          .classList.add("hidden");
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      GPT
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Button variant="outline">View Report</Button> */}
          </div>
        </div>

        {/* REG CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <RegCard
            title="Registration Complete"
            subtitle={`${selectedExamType} ${selectedYear} - ${registeredStudents}/${totalStudents} students registered`}
            color="gray"
            bgColor="lightGreen"
            reportUrl="/reports/school-123"
            icon={<Users2Icon className="w-6 h-6" />}
          />

          <RegCard
            title="Pending Registration"
            subtitle={`${selectedExamType} ${selectedYear} - ${pendingStudents}/${totalStudents} students registered`}
            bgColor="lightBlue"
            reportUrl="/reports/school-123"
            reportLabel="View Report"
          />
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Total Registered"
            value={registeredStudents.toString()}
            color="gray"
            icon={<Users2Icon className="w-6 h-6" />}
          />

          <StatsCard
            title="Pending Registration"
            value={pendingStudents.toString()}
            color="gray"
            icon={<PiClockClockwise className="w-6 h-6" />}
          />

          <StatsCard
            title="Registration Deadline"
            value={registrationDeadline}
            color="gray"
            icon={<Calendar className="w-6 h-6" />}
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>

        {/* DROPDOWN AND SEARCH */}
        <div className="border border-gray-300 rounded-md p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* EXAM TYPE DROPDOWN */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Exam Type
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={selectedExamType}
                onChange={(e) => setSelectedExamType(e.target.value)}
              >
                {examTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* EXAM YEAR DROPDOWN */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Exam Year
              </label>
              <SearchableSelect
                options={examYears}
                value={selectedYear}
                onChange={setSelectedYear}
                placeholder="Search year..."
              />
            </div>

            {/* STATUS DROPDOWN */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                {statusOptions.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <Button
                text="Search"
                bgColor="bg-[#7AC52D]"
                hoverBgColor="hover:bg-white"
                hoverTextColor="hover:text-black"
                iconPosition="right"
                textColor="text-white"
                link="/dashboard"
                border="border-[#7AC52D]"
                rounded="rounded-full "
                icon={CiSearch}
                size="lg"
                className="w-full mt-5 sm:mt-0"
                onClick={() => {
                  console.log("Search clicked with:", {
                    examType: selectedExamType,
                    year: selectedYear,
                    status: selectedStatus,
                  });
                }}
              />
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS CONTROL */}
        <Card className="py-6 mb-6 text-black">
          <div className="flex flex-col space-y-4">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                text="Register New Student"
                bgColor="bg-transparent"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                textColor="text-[#182700]"
                link="/dashboard"
                border="border-[#7AC52D]"
                rounded="rounded-full "
                icon={FaPlus}
                size="sm"
              />

              <Button
                text="Import Students"
                bgColor="bg-transparent"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                textColor="text-[#182700]"
                link="/dashboard"
                border="border-[#7AC52D]"
                rounded="rounded-full "
                icon={MdOutlineFileUpload}
                size="sm"
              />

              <Button
                text="Print CA Sheet"
                bgColor="bg-transparent"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                textColor="text-[#182700]"
                link="/dashboard"
                border="border-[#7AC52D]"
                rounded="rounded-full "
                icon={RiArrowDropDownLine}
                size="sm"
              />

              <Button
                text="Print Practical Sheet"
                bgColor="bg-transparent"
                hoverBgColor="hover:bg-[#7AC52D]"
                hoverTextColor="hover:text-white"
                textColor="text-[#182700]"
                link="/dashboard"
                border="border-[#7AC52D]"
                rounded="rounded-full "
                icon={BsPrinter}
                size="sm"
              />
            </div>
          </div>
        </Card>

        {/* Students Table */}
        <Card className="overflow-hidden">
          <div className="py-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Registered Students
            </h2>
            <p className="text-sm text-gray-600">
              Total Registered: {studentsData.length} students
            </p>
          </div>

          <Table
            headers={tableHeaders}
            data={studentsDataWithSN}
            currentPage={1}
            totalPages={5}
            loading={false}
            title={`${selectedExamType} Students - ${selectedYear}`}
            onPageChange={(page) => {
              console.log("Fetching page:", page);
            }}
          />
        </Card>
      </div>
    </div>
  );
}
