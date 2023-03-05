/* eslint-disable no-return-await */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import { Recommendation } from '../database/models';

export default class RecommendationService {
  async makeRecommendation(data) {
    const newRecommendation = await Recommendation.create(data);
    return newRecommendation;
  }

  async getRecommendations() {
    const Recommendations = await Recommendation.findAll({});
    return Recommendations;
  }

  async getSingleRecommendation(id) {
    return Recommendation.findByPk(id, {});
  }

  async updateRecommendation(data, where) {
    const newVac = await Recommendation.update(data, where);
    return newVac;
  }

  async deleteOneRecommendation(where) {
    const data = await Recommendation.destroy(where);
    return data;
  }

  async deleteRecommendations({ where }) {
    const data = await Recommendation.destroy({ where });
    return data;
  }
}
