import React from "react";
import fees from "../data/fees.json";

const Fees = () => {
  return (
    <>
      <div className="w-full bg-black/10 flex flex-col justify-center items-center">
        <div className="mt-4">
          <img
            src={fees.imgSrc}
            className="w-[1100px] h-[70vh] object-fill rounded-3xl shadow-lg shadow-black/20"
          />
        </div>

        {/* ////////////////////////---Fees Payment----////////////////////////// */}
        <div className="w-[85%] my-9">
          <h1 className="heading text-left pb-2">{fees.payment}</h1>
          <ul className="list-disc text-slate-700 text-lg">
            <li>
              The fee/other payments/ dues are to be paid as scheduled by the
              college authorities from time to time.
            </li>
            <li>Payment after the due date will be redived with fine.</li>
            <li>
              After the ecpiry of the extended scheduled program, the names are
              struck off.
            </li>
            <li>
              In such cases, the re-admission depends upon the permission of the
              Principal.
            </li>
            <li>
              Absence from the college, even in cases of long leave, cannot be
              an excuse for non payment of the fee/ dues.
            </li>
            <li>
              The Library security deposit will lapse if the student fails to
              retrieve it within two years after his college tenure.
            </li>
          </ul>
        </div>

        {/* //////////////////////----Fine Consission----//////////////////////// */}
        <div className="w-[85%] my-9">
          <h1 className="heading text-left pb-2">{fees.FineConcession}</h1>
          <ul className="list-disc text-slate-700 text-lg">
            <li>
              The Principal has the prerogative to grant tuition fee concession
              to the deserving students.
            </li>
            <li>
              The fee concession is conditioned with appreciable behaviour and
              regularity in studies.
            </li>
            <li>
              Fine worth five (05) rupees and ten (10) rupees is charged for one
              period absentee and full day absentee respectively.
            </li>
            <li>
              6-dat continuous absence or 10-day continual absence from the
              college during one month will lead to the removal of student from
              college rolls/ registration.
            </li>
            <li>
              The student can be re-admission to college only after the payment
              of Rs. 100 as fine but only once during two-year session.
            </li>
            <li>
              Father / guardian will also have to appear before the committee at
              the time of the student's re-admission.
            </li>
            <li>
              The student can get re-admission only within 15 days of his being
              struck off.
            </li>
            <li>
              3-month long absence due to prolonged illness again will result
              into rustication and Rs. 100 as re-admission fee.
            </li>
          </ul>
        </div>

        {/* //////////////////---Scholership---//////////////////////// */}
        <div className="w-[85%] my-9">
          <h1 className="heading text-left pb-2">{fees.Scholarships}</h1>
          <p>
            All the Govt. Universities, Boards, Local-Bodies, Kila Gift Funds,
            Fuji Foundation scholarships and the other scholarships specified
            for all Govt. Colleges are granted to the winning/ deserving
            students.
          </p>
        </div>

        <div className="w-[85%] my-9">
          <h1 className="heading text-left pb-2">{fees.scholarshipholders}</h1>
          <ul className="list-disc text-slate-700 text-lg">
            <li>The scholarship holders must observe that:</li>
            <li>
              The college fee is paid within the due date, non-payment of fee
              will cause withdrawal of his right to get scholarship. Once the
              privilege is withdrawn, it cannot be re-instated.
            </li>
            <li>
              Failure in the annual examination again eliminates student's right
              to avail scholarship.
            </li>
            <li>
              There will be a proportionate deduction on scholarship if the
              student absent himself from college.
            </li>
            <li>
              The scholarship holder is not entitled to any other fund (Fee
              concession, Welfare fund, Kila-Gift fund etc.).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Fees;
