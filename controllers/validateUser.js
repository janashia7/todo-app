import User from '../db/models/UserModel.js';

const validateUser = (user) => {
  try {
    return User.findOne({ ...user });
  } catch (error) {
    throw new Error(`Error user not found: ${error}`);
  }
};

export default validateUser;
