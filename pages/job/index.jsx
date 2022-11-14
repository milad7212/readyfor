import Link from "next/link";
import React, { useState, useEffect } from "react";
import BookMarkIcon from "../../components/icons/BookMarkIcon";
import { companiesData } from "../../data/companies";

function JobPage() {
  const [companies, setCompanies] = useState(companiesData);
  const [search, setSearch] = useState("");
  const [witchCompany, setWitchCompany] = useState(1)

  function searching(word) {
    if (word == "") {
      
      if (witchCompany == 1) {
        setCompanies(companiesData);
      }
      if (witchCompany == 2) {
        let filterPayman = companiesData.filter(
          (item) => item.CertificateTypeName == "پیمانکار"
        );
        setCompanies(filterPayman);
      }
      if (witchCompany == 3) {
        let filterHelper = companiesData.filter(
          (item) => item.CertificateTypeName == "مشاور"
        );
        setCompanies(filterHelper);
      }
    } else {
      let searched = companies.filter((item) =>
        item.LatestCompanyName.includes(word)
      );
      setCompanies(searched);
    }
  }

  function onChangeValue(event) {
    const value = event.target.value;
    setWitchCompany(value)
    if (value == 1) {
      setCompanies(companiesData);
    }
    if (value == 2) {
      let filterPayman = companiesData.filter(
        (item) => item.CertificateTypeName == "پیمانکار"
      );
      setCompanies(filterPayman);
    }
    if (value == 3) {
      let filterHelper = companiesData.filter(
        (item) => item.CertificateTypeName == "مشاور"
      );
      setCompanies(filterHelper);
    }
    setSearch("");
  }

  return (
    <div className=" min-h-screen bg-ciBackground p-4 ">
      <div className="flex justify-center">
        <p className="text-ciOrange font-bold text-xl ">
          تقدیم به خانم مهندس آقاملایی{" "}
        </p>
      </div>
      <div className="my-4">
        <input
          value={search}
          onChange={(v) => {
            setSearch(v.target.value);
            searching(v.target.value);
          }}
          type="text"
          className=" w-full h-16 rounded-lg outline-none p-4"
          placeholder="جستجو نام شرکت"
        />
      </div>
      <div className="flex justify-around items-center my-2">
        <p className="text-ciOrange">
          <span className="">تعداد شرکتها :</span>
          <span className=" mr-4 font-bold">{companies.length}</span>
        </p>
        <div
          onChange={() => onChangeValue(event)}
          className="text-ciOrange flex items-center cursor-pointer"
        >
          <RadioInput
            label="همه شرکت ها"
            name="filter"
            defaultChecked
            value="1"
            id="allCompany"
          />
          <RadioInput
            label="فقط پیمانکاران"
            name="filter"
            value="2"
            id="justPeyman"
          />
          <RadioInput
            label="فقط مشاورین"
            name="filter"
            value="3"
            id="justHelper"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {companies.map((item, index) => (
          <div
            key={index}
            className="flex basis-52 flex-col p-2 bg-ciForeground rounded-lg hover:bg-gray-200"
          >
            <Link
              legacyBehavior
              href={`https://sajar.mporg.ir/Company/CompanyDetail?cp=${item.CompanyID}&cr=${item.CertificateID}&crt=${item.CertificateTypeID}`}
            >
              <a target="_blank" rel="noreferrer">
                <p className="font-bold text-center my-2 ">
                  {item.LatestCompanyName}
                </p>
              </a>
            </Link>
            <div className="flex justify-between mt-6 ">
              <p className="text-sm  font-semibold">
                {item.CertificateTypeName}
              </p>
              <BookMarkIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPage;

function RadioInput({ label, name, defaultChecked = false, value, id }) {
  return (
    <>
      <div className="mx-2">
        <input
          className="cursor-pointer"
          type="radio"
          value={value}
          id={id}
          name={name}
          defaultChecked={defaultChecked}
        />
        <label className="mr-2 cursor-pointer" htmlFor={id}>
          {" "}
          {label}
        </label>
      </div>
    </>
  );
}
