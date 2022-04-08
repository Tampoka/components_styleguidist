import React, {useState} from 'react';
import Core from '../forms/api/core.json';
import Electives from '../forms/api/electives.json';
import PropTypes from 'prop-types';

const Courses = {
    core: Core,
    electives: Electives
};

function apiClient(department) {
    return {
        then: function (cb) {
            setTimeout(() => {
                cb(Courses[department]);
            }, 1000);
        }
    };
}

export const CourseSelectField = (props) => {
    const [department, setDepartment] = useState(null)
    const [course, setCourse] = useState(null)
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false)

    const onSelectDepartment = evt => {
        const updatedDepartment = evt.target.value;
        // const updatedCourse = null;

        setDepartment(updatedDepartment)
        setCourse(null)

        props.onChange({name: 'department', value: updatedDepartment});
       // props.onChange({name: 'course', value: updatedCourse});

        if (updatedDepartment) fetch(updatedDepartment)
    };

    const onSelectCourse = evt => {
        const course = evt.target.value;
        setCourse(course);
        props.onChange({name: 'course', value: course});
    };

    const fetch = department => {
        setLoading(true)
        setCourses([])
        apiClient(department).then(courses => {
            setLoading(false)
            setCourses(courses)
        });
    };

    const renderDepartmentSelect = () => {
        return (
            <select
                onChange={onSelectDepartment}
                value={props.department || ''}
            >
                <option value="">Which department?</option>
                <option value="core">NodeSchool: Core</option>
                <option value="electives">NodeSchool: Electives</option>
            </select>
        );
    };

    const renderCourseSelect = () => {
        if (loading) {
            return <img alt="loading" src="/img/loading.gif"/>;
        }
        // if (!props.department || !courses.length) return <span/>;

        return (
            <select
                onChange={onSelectCourse}
                value={props.course || ''}>
                {[
                    <option value="" key="course-none">
                        Which course?
                    </option>,
                    ...courses.map((course, i) => (
                        <option value={course} key={i}>
                            {course}
                        </option>
                    ))
                ]}
            </select>
        );
    };
    return (
        <div>
            {renderDepartmentSelect()}
            <br/>
            {renderCourseSelect()}
        </div>
    );
};

CourseSelectField.propTypes = {
    department: PropTypes.string,
    course: PropTypes.string,
    onChange: PropTypes.func.isRequired
}
