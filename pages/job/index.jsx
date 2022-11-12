import Link from "next/link";
import React from "react";
import { companiesData } from "../../data/companies";

function JobPage() {
  return (
    <div className=" min-h-screen bg-ciBackground p-4 ">
      <div className="flex justify-center">
        <p className="text-ciOrange font-bold text-xl ">
          تقدیم به خانم مهندس آقاملایی{" "}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {companiesData.map((item, index) => (
          <div
            key={index}
            className="flex basis-52 flex-col p-2 bg-ciForeground rounded-lg"
          >
            <Link
              legacyBehavior
              href={`https://sajar.mporg.ir/Company/CompanyDetail?cp=${item.CompanyID}&cr=${item.CertificateID}&crt=${item.CertificateTypeID}`}
            >
              <a target="_blank" rel="noreferrer">
                <p className="font-bold text-center mb-3">
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
