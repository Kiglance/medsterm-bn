import 'dotenv/config';
import { Medical_Info } from '../database/models';

export const checkIfInfoExist = async (req, res, next) => {
  try {
    const str = req.body.arr;

    if (!str) {
      return next();
    }

    const new_arr = str.split('#&#&');

    function getAnyt(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        const obj = {};
        obj['info_id'] = arr[i].split('#%#%')[0];
        obj['description'] = arr[i].split('#%#%')[1];
        newArr.push(obj);
      }
      return newArr;
    }

    const first_arr = getAnyt(new_arr);
    let determinearray = [];
    for (let i = 0; i < first_arr.length; i++) {
      const existingInfo = await Medical_Info.findOne({
        where: {
          info_id: first_arr[i].info_id
        }
      });
      if (existingInfo) {
        determinearray.push(first_arr[i]);
      }
    }

    if (determinearray == '') {
      return res.status(404).json({
        message: `Medical info not found!!`
      });
    }

    return next();
  } catch (error) {
    return res.status(500).json({
      message: 'An Unexpected error occurred RIGHT HERE',
      error: error.message
    });
  }
};
