const RecommendedBreadthCourses = () => {
    const listOfCourses = [
        { serial: 1, code: "HS30084", name: "ECONOMIC PSYCHOLOGY" },
        { serial: 2, code: "HS30203", name: "FINANCIAL INSTITUTIONS AND MARKETS" },
        { serial: 3, code: "HS50025", name: "INTERNATIONAL FINANCE" },
        { serial: 4, code: "HS40078", name: "INTERNATIONAL TRADE" },
        { serial: 5, code: "BM40002", name: "INTRODUCTION TO FINANCIAL MANAGEMENT" },
        { serial: 6, code: "EM21205", name: "MACROECONOMICS I" },
        { serial: 7, code: "HS21205", name: "MACROECONOMICS I" },
        { serial: 8, code: "BM40009", name: "MARKETING MANAGEMENT" },
        { serial: 9, code: "EM21203", name: "MICROECONOMICS I" },
        { serial: 10, code: "HS21203", name: "MICROECONOMICS I" },
        { serial: 11, code: "HS31072", name: "ENVIRONMENTAL ECONOMICS" },
        { serial: 12, code: "AE39001", name: "AERODYNAMICS LAB-II" },
        { serial: 13, code: "CS21203", name: "ALGORITHMS - I" },
        { serial: 14, code: "AR10304", name: "BUILDING MATERIALS" },
        { serial: 15, code: "AR12002", name: "BUILDING MATERIALS" }
      ];
      

  

  return (
    <>
     <div className="RecommendedCourses">
  <h3 className="text-left m-2 text-2xl font-bold">Recommended Breadth Courses For You</h3>
  <div className="table">
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4 border border-gray-300">S.No.</th>
          <th className="py-2 px-4 border border-gray-300">Course Name</th>
          <th className="py-2 px-4 border border-gray-300">Course Code</th>
        </tr>
      </thead>
      <tbody>
        {listOfCourses.map((course, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="py-2 px-4 border border-gray-300">{course.serial}</td>
            <td className="py-2 px-4 border border-gray-300">{course.name}</td>
            <td className="py-2 px-4 border border-gray-300">{course.code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
};

export default RecommendedBreadthCourses;
