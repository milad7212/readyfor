import Link from "next/link";
import React, { useState,useEffect } from "react";
import { companiesData } from "../../data/companies";

function JobPage() {
  const [companies, setCompanies] = useState(companiesData);
  const [search, setSearch] = useState("");
  const [isPeyman, setIsPeyman] = useState(true);
  const [isHelper, setIsHelper] = useState(true);

  function searching(word) {
    let searched = companiesData.filter((item) =>
      item.LatestCompanyName.includes(word)
    );
    setCompanies(searched);
  }
  useEffect(() => {
    if(isPeyman && isHelper){
        return
    }
    if(isPeyman){}
    if(isHelper){}
  }, [isPeyman,isHelper])
  

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
        <div className="text-ciOrange flex items-center cursor-pointer">
          <input onClick={()=>setIsPeyman((v)=>!v)} className='cursor-pointer'  checked={isPeyman} type="checkbox" id="peyman" />
          <label className="mr-2 cursor-pointer" htmlFor="peyman">
            {" "}
            پیمانکار
          </label>
        </div>
        <div className="text-ciOrange flex items-center">
          <input onClick={()=>setIsHelper((v)=>!v)}  className='cursor-pointer'  checked={isHelper} type="checkbox" id="helper" />
          <label className="mr-2 cursor-pointer" htmlFor="helper">
            مشاور
          </label>
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
                <p className="font-bold text-center mb-3 ">
                  {item.LatestCompanyName}
                </p>
              </a>
            </Link>
            <p className="text-center mb-3 text-sm  font-bold">
              {item.CertificateTypeName}
            </p>
            {/* <p className="">{item.IssueDate}</p>
                <p className="">{item.ExpireDate}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobPage;
