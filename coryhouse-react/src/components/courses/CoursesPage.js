import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
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
        this.props.actions.createCourse(this.state.course);

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
    // createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        // createCourse: course => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);