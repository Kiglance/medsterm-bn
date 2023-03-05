/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Drug } from '../database/models';

export default class DrugService {
  async makeDrug(data) {
    const newDrug = await Drug.create(data);
    return newDrug;
  }

  async getDrugs() {
    const Drugs = await Drug.findAll({});
    return Drugs;
  }

  async getSingleDrug(id) {
    return Drug.findByPk(id, {});
  }

  async updateDrug(data, where) {
    const newVac = await Drug.update(data, where);
    return newVac;
  }

  async deleteOneDrug(where) {
    const data = await Drug.destroy(where);
    return data;
  }

  async deleteDrugs({ where }) {
    const data = await Drug.destroy({ where });
    return data;
  }
}
