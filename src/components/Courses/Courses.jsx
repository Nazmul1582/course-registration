import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {
                courses.map(course => <Course 
                    key={course.id} 
                    course={course}
                    handleSelectCourse={handleSelectCourse}></Course>)
            }
        </div>
    );
};

export default Courses;