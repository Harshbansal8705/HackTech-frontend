const RecommendedBreadthCourses = () => {
    const listOfCourses = [
        { sNo: 1, name: "John Doe", courseName: "Introduction to Computer Science", courseCode: "CS101" },
        { sNo: 2, name: "Alice Smith", courseName: "Data Structures and Algorithms", courseCode: "CS202" },
        { sNo: 3, name: "Bob Johnson", courseName: "Web Development Basics", courseCode: "WEB101" },
        { sNo: 4, name: "Emma Wilson", courseName: "Database Management Systems", courseCode: "DBMS303" },
        { sNo: 5, name: "Charlie Brown", courseName: "Introduction to Artificial Intelligence", courseCode: "AI201" }
    ];

    let i = 1;

    return (
        <>

            <div className="RecommendedCourses">
                <h3>Recommended Breadth Courses For You</h3>
                <div className="table">
                    <ul className="heading">
                        <li>S.No.</li>
                        <li>Course Name</li>
                        <li>Course Code</li>
                    </ul>

                    {listOfCourses.map((course) => (
                        <ul className="courses">

                            <ul>
                                <li>{course.sNo}</li>
                                <li>{course.name}</li>
                                <li>{course.courseCode}</li>
                            </ul>


                        </ul>
                    ))}







                </div>
            </div>


        </>

    );
}

export default RecommendedBreadthCourses;