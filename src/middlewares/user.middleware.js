import 'dotenv/config';
import { Op } from 'sequelize';
import { Doctor, Client } from '../database/models';
import { verifyToken, decodeToken } from '../helpers/user.helper';
import checkToken from '../helpers/checkToken';

export const checkDoctorEmailExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailExist = await Doctor.findOne({
      where: {
        email
      }
    });
    if (emailExist) {
      return res
        .status(409)
        .json({ message: `User with email ${email} already exist` });
    }

    return next();
  } catch (error) {
    console.log(req);
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkClientEmailExist = async (req, res, next) => {
  try {
    const { email } = req.body;
    const emailExist = await Client.findOne({
      where: {
        email
      }
    });
    if (emailExist) {
      return res
        .status(409)
        .json({ message: `User with email ${email} already exist` });
    }

    return next();
  } catch (error) {
    console.log(req);
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkLoggedIn = async (req, res, next) => {
  try {
    const token = checkToken(req);

    if (!token) {
      return res.status(401).json({ message: 'Not logged in' });
    }

    let decoded;
    try {
      decoded = verifyToken(token);
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid Token'
      });
    }

    req.decoded = decoded;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Access denied', error: error.message });
  }
};

export const checkVerifiedDoctor = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await Doctor.findOne({
      where: {
        email
      }
    });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (!user.isVerified) {
      return res.status(400).json({
        message: 'Please verify your email'
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred666',
      error
    });
  }
};

export const checkVerifiedClient = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await Client.findOne({
      where: {
        email
      }
    });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (!user.isVerified) {
      return res.status(400).json({
        message: 'Please verify your email'
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error
    });
  }
};

export const checkVerifiedUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const client = await Client.findOne({
      where: {
        email
      }
    });

    const doctor = await Doctor.findOne({
      where: {
        email
      }
    });

    if (!client && !doctor) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    if (client && !client.isVerified) {
      return res.status(400).json({
        message: 'Please verify your email'
      });
    }
    if (doctor && !doctor.isVerified) {
      return res.status(400).json({
        message: 'Please verify your email'
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error
    });
  }
};

export const isDoctor = async (req, res, next) => {
  try {
    const { role_id, user_id } = req.decoded;

    if (role_id !== 2) {
      return res.status(400).json({
        message: 'Only Doctors can perform this action'
      });
    }

    const user = await Doctor.findOne({
      where: { user_id }
    });

    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({ message: 'Access denied' });
  }
};

export const isClient = async (req, res, next) => {
  try {
    const { role_id, user_id } = req.decoded;

    if (role_id !== 2) {
      return res.status(400).json({
        message: 'Only Doctors can perform this action'
      });
    }

    const user = await Doctor.findOne({
      where: { user_id }
    });

    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({ message: 'Access denied' });
  }
};

export const isLoginDoctor = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Doctor.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(404).json({ message: `you cannot login as a doctor.` });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Access denied', error: error.message });
  }
};

export const isLoginClient = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Client.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(404).json({ message: `you cannot login as a client.` });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Access denied', error: error.message });
  }
};

export const isLoginUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const client = await Client.findOne({
      where: {
        email
      }
    });

    const doctor = await Doctor.findOne({
      where: {
        email
      }
    });

    if (!client && !doctor) {
      return res.status(404).json({ message: `Invalid credentials.` });
    }

    req.user = client || doctor;

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Access denied', error: error.message });
  }
};

export const checkDoctorExist = async (req, res, next) => {
  try {
    const { doctor_id } = req.body;
    const user = await Doctor.findByPk(doctor_id, {});
    if (!user) {
      return res.status(400).json({
        message: `Doctor with id "${doctor_id}" doesn't exist`
      });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred7777',
      error: error.message
    });
  }
};

export const checkClientExist = async (req, res, next) => {
  try {
    const token = checkToken(req);
    const client_data = decodeToken(token);
    const user = await Client.findByPk(client_data.id, {});
    if (!user) {
      return res.status(400).json({
        message: `Client with id "${client_data.id}" doesn't exist`
      });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred0000',
      error: error.message
    });
  }
};

export const checkIsAdmin = async (req, res, next) => {
  try {
    const token = checkToken(req);
    const admin_data = decodeToken(token);
    const user = await Doctor.findByPk(admin_data.id, {});
    if (!user) {
      return res.status(400).json({
        message: `Admin with id "${admin_data.id}" doesn't exist`
      });
    }
    if (user.role_id !== 1) {
      return res.status(400).json({
        message: `This action can only be performed by an admin.`
      });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkLoginDoctorExist = async (req, res, next) => {
  try {
    const token = checkToken(req);
    const doctor_data = decodeToken(token);
    const user = await Doctor.findByPk(doctor_data.id, {});
    if (!user) {
      return res.status(400).json({
        message: `Doctor with id "${doctor_data.id}" doesn't exist`
      });
    }
    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkIsDoneByAdmin = async (req, res, next) => {
  try {
    const token = checkToken(req);
    const { doctor_id } = req.body;
    const user_data = decodeToken(token);
    const user = await Doctor.findByPk(user_data.id, {});
    const assignedDoctor = await Doctor.findByPk(doctor_id, {});
    if (!user) {
      return res.status(400).json({
        message: `Doctor or Admin with id "${user_data.id}" doesn't exist`
      });
    }
    if (user_data.id !== doctor_id && user.role_id !== 1) {
      return res.status(400).json({
        message: `This action can only be performed by an admin or the corresponding doctor`
      });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error: error.message
    });
  }
};

export const checkUserExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await Doctor.findByPk(id, { include: [] });

    if (!user) {
      return res.status(400).json({
        message: `User with id "${id}" doesn't exist`
      });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred',
      error
    });
  }
};
