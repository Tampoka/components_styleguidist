import {Component} from 'react';
import PropTypes from 'prop-types';

const content = document.createElement('div');
document.body.appendChild(content);

const Courses = {
    core: Core,
    electives: Electives
}

export class CourseSelect extends Component {
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired
    }

    static getDerivedStateFromProps(update) {
        return {
            department: update.department,
            course: update.course
        }
    };

    state = {
        department: null,
        course: null,
        courses: [],
        _loading: false
    }

    onSelectDepartment = evt => {
        const department = evt.target.value
        const course = null
        this.setState({department, course})
        this.props.onChange({name: 'department', value: department})
        this.props.onChange({name: 'course', value: course})

        if (department) this.fetch(department)
    }

    fetch = department => {
        this.setState({_loading: true, courses: []})
        apiClient(department).then(courses => {
            this.setState({_loading: false, courses: courses})
        })
    }

    onSelectCourse = evt => {
        const course = evt.target.value
        this.setState({course})
        this.props.onChange({name: 'course', value: course})
    }

    renderDepartmentSelect = () => {
        return (
            <select
                onChange={this.onSelectDepartment}
                value={this.state.department || ''}
            >
                <option value="">Which department?</option>
                <option value="core">NodeSchool: Core</option>
                <option value="electives">NodeSchool: Electives</option>
            </select>
        )
    }

    renderCourseSelect = () => {
        if (this.state._loading) {
            return <img alt="loading" src="/img/loading.gif"/>;
        }
        if (!this.state.department || !this.state.courses.length) return <span/>
        return (
            <select
                onChange={this.onSelectCourse}
                value={this.state.course || ''}
            >
                {[<option value="" key="course-none">
                    Which course?>
                </option>,
                    ...this.state.courses.map((course, i) => (
                        <option value={course} key={i}>
                            {course}
                        </option>
                    ))
                ]}
            </select>
        )
    }

    render() {
        return (
            <div>
                {this.renderDepartmentSelect()}
                <br/>
                {this.renderCourseSelect()}
            </div>
        );
    }
}

function apiClient(department) {
    return {
        then: function(cb) {
            setTimeout(() => {
                cb(Courses[department]);
            }, 1000);
        }
    };
}
