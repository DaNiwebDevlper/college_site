import DeptCard from "./DeptCard";
import deptData from "./deptData.json";
const Department = () => {
  return (
    <>
    <div className="w-full h-[80px] shadow-lg bg-gradient-to-r  mb-2 from-rose-900 via-rose-600 to-rose-900 flex items-center justify-center">
          <h1 className="md:text-3xl text-2xl font-semibold text-center text-slate-200">
            Department
          </h1>
        </div>
      <div className="container h-[100%] flex-wrap p-5 justify-center items-center  flex gap-8">
      
        {deptData.map((deptdata, i) => (
          // 3. flex-[0_0_50%] set the width of each card to 50% of the viewport
          // for mobile devices we use 90% width
          <div key={i}>
            <DeptCard {...deptdata} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Department;
