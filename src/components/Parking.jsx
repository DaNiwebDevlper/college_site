import React from "react";

const Parking = () => {
  return (
    <>
      <div className="w-full bg-black/10 flex flex-col justify-center items-center">
        <div className="mt-4">
          <img
            src="/images/parking2.jpg"
            className="md:w-[1100px] w-[350px] h-[70vh] object-cover rounded-3xl shadow-lg shadow-black/20"
          />
        </div>

        {/* /////////////////////---Parking_Rules---///////////////////////// */}
        <div className="w-[85%] my-9">
          <h1 className="heading text-left pb-2">Parking Rules</h1>
          <ul className="list-disc text-slate-700 text-md">
            <li className="py-1">
              The cycle stand is working on no profit / no loss basis. The
              government has provided neither a shed for cycle stand nor a peon
              to keep watch. On 1st July, 1999 a shed was constructed on
              self-help basis. The college authorities try to manage the
              situation with the little amount collected from the students. The
              students must observe the following rules:
            </li>
            <li className="py-1">
              The students must get the motorcycle, cycle registered with the
              college management.
            </li>
            <li className="py-1">
              The value of the vehicle will be evaluated as per its condition.
            </li>
            <li className="py-1">
              Every student must get his roll number/name written on the
              cycle/motorcycle.
            </li>
            <li className="py-1">
              The cycle/motor cycle must be doble locked.
            </li>
            <li>
              If a cycle / motorcycle is found without lock, the student will be
              fined Rs.50/- for cycle and Rs.100/- for motorcycle. The
              cycle/motorcycle without locks
            </li>
            <li className="py-1">
              must be handed over to the man on duty. A metal token embossed
              with token number and college name etc. is given at the time of
              parking. The students must keep it secure. In case of the loss of
              token the cycle stand management probes into the matter. The
              student is fined Rs.50/-and Rs.100/- for loss of token. No
              outsider is allowed to enter the cycle Stand enclosure.
            </li>
            <li className="py-1">
              The college students accompanied by outsiders will be punished
              /fined.
            </li>
            <li className="py-1">
              The running of cycle-stand is valuntary not obligatory. It can be
              closed under unavoidable circumstances and the students may lose
              this facility
            </li>
            <li className="py-1">
              The students must Pay due respect to the man on-duty at the
              cycle-stand.
            </li>
            <li className="py-1">
              A student found guilty of misusing a lost / stolen token will be
              fined / handed over to the police and rusticated from the college.
            </li>
            <li className="py-1">
              The loss of token must be brought to the notice of the man in
              charge so that it maynot be misused.
            </li>
          </ul>

          <h1 className="heading my-5 text-lg md:text-2xl  py-4">IMPORTANT MESSAGE FOR PARENTS</h1>
          <p>The buses of urban transport, route number 11, pass by the college gate. The parents can get a concessional bus card from the company office for their sons so that no riot is created between students and the urban transport workers.</p>

          <h1 className="heading py-2 my-5 ">Warning</h1>
           <p className="text-slate-700 ">Smoking and possession of mobile phones within college premisess are strictly prohibited under the instructions of the Punjab Higher Education Department. The violation of this warning will be regarded as a serious offence.</p>
        </div>

        {/* /////////////////////---Warning---///////////////////////// */}
        <div className="w-[85%] my-9">
         
        </div>
      </div>
    </>
  );
};

export default Parking;
