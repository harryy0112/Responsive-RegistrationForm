export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Username required';
  }
  else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = 'Enter a valid name';
  }

  if (!values.studentNo) {
    errors.studentNo = 'Student No. required';
  } else if (!/\S+@\S+\.\S+/.test(values.studentNo)) {
    errors.studentNo = 'Email address is invalid';
  }

  if (!values.branch) {
    errors.branch = 'Branch is required';
  } else if (values.branch.length < 6) {
    errors.branch = 'Select the branch from dropdown menu';
  }

  if (!values.section) {
    errors.section = 'Section is required';
  } else if (values.section !== values.password) {
    errors.section = 'Select the Section from dropdown menu';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.gender) {
    errors.gender = 'Gender is required';
  } else if (values.gender !== values.password) {
    errors.gender = 'Select from Dropdown menu';
  }

  if (!values.hosteller) {
    errors.hosteller = 'Required';
  } else if (values.hosteller !== values.password) {
    errors.hosteller = 'Passwords do not match';
  }

  if (!values.hackerRankUserName) {
    errors.hackerRankUserName = 'Required';
  } else if (values.hackerRankUserName !== values.password) {
    errors.hackerRankUserName = 'Passwords do not match';
  }

  if (!values.unstopUsername) {
    errors.unstopUsername = 'Required';
  } else if (values.unstopUsername !== values.password) {
    errors.unstopUsername = 'Passwords do not match';
  }

  return errors;
}
