import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as courseActions from '../../redux/actions/courseActions';

class CoursesPage extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         course: {
    //             title: ""
    //         }
    //     };

    //     // this.handleChange = this.handleChange.bind(this);
    // }

    state = {
        course: {
            title: ""
        }
    };

    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course: course });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // alert(this.state.course.title);
        debugger;
        this.props.dispatch(courseActions.createCourse(this.state.course));

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input type="text" onChange={this.handleChange} value={this.state.course.title} />
                <input type="submit" value="Save" />
                {this.props.courses.map(course => (
                    <div key={course.title}>
                        {course.title}
                    </div>
                ))}
            </form>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    debugger;
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);