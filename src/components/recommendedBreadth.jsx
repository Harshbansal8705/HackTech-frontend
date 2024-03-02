const RecommendedBreadthCourses = () => {
  const listOfCourses = [
    {
      sNo: 1,
      name: "John Doe",
      courseName: "Introduction to Computer Science",
      courseCode: "CS101",
    },
    {
      sNo: 2,
      name: "Alice Smith",
      courseName: "Data Structures and Algorithms",
      courseCode: "CS202",
    },
    {
      sNo: 3,
      name: "Bob Johnson",
      courseName: "Web Development Basics",
      courseCode: "WEB101",
    },
    {
      sNo: 4,
      name: "Emma Wilson",
      courseName: "Database Management Systems",
      courseCode: "DBMS303",
    },
    {
      sNo: 5,
      name: "Charlie Brown",
      courseName: "Introduction to Artificial Intelligence",
      courseCode: "AI201",
    },
  ];

  let i = 1;

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
            <td className="py-2 px-4 border border-gray-300">{course.sNo}</td>
            <td className="py-2 px-4 border border-gray-300">{course.name}</td>
            <td className="py-2 px-4 border border-gray-300">{course.courseCode}</td>
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
