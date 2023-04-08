import RecommendationService from '../services/recommandation.service';
import UserService from '../services/user.service';
import { Recommendation } from '../database/models';

export default class RecommandationController {
  constructor() {
    this.recommendationService = new RecommendationService();
    this.userService = new UserService();
  }

  async makeRecommandation(req, res) {
    try {
      const { recommendation_name } = req.body;

      const existingRecommendation = await Recommendation.findOne({
        where: { recommendation_name }
      });

      console.log(existingRecommendation, '&&&&&&&&&&&&&++++++++++++++++++');

      if (recommendation_name === '') {
        return res.status(400).json({
          message: 'This field cannot be empty.'
        });
      }
      if (existingRecommendation) {
        return res.status(400).json({
          message: "You can't duplicate arecommendation."
        });
      }

      const newRecommandation =
        await this.recommendationService.makeRecommendation(
          {
            // appointment_id,
            recommendation_name
          },
          res
        );

      return res.status(201).json({
        status: 201,
        message: 'Recommandation creation was successfull.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while making a Recommandation.',
        error: error.message
      });
    }
  }

  async getRecommandations(req, res) {
    try {
      const Recommandations =
        await this.recommendationService.getRecommendations();
      return res.status(200).json({
        message: 'Retrieved all Recommandations successfully',
        data: Recommandations
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Recommandations',
        error: error.message
      });
    }
  }

  async getSingleRecommandation(req, res) {
    try {
      const Recommandation =
        await this.recommendationService.getSingleRecommendation();
      return res.status(200).json({
        message: 'Retrieved one Recommandation successfully',
        data: Recommandation
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while fetching Recommandation',
        error: error.message
      });
    }
  }

  async updateRecommandation(req, res) {
    try {
      const {
        Recommandation_name,
        dosage,
        frequency_per_week,
        frequency_per_day,
        duration,
        start_date,
        end_date,
        explanation
      } = req.body;
      const { id } = req.params;

      await this.recommendationService.updateRecommendation(req.body, {
        Recommandation_name,
        dosage,
        frequency_per_week,
        frequency_per_day,
        duration,
        start_date,
        end_date,
        explanation,
        where: {
          recommandation_id: id
        }
      });

      return res.status(201).json({
        status: 200,
        message: 'Recommandation update successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while updating Recommandation.',
        error: error.message
      });
    }
  }

  async deleteRecommandation(req, res) {
    try {
      const { id } = req.params;

      await this.recommendationService.deleteOneRecommendation({
        where: {
          Recommandation_id: id
        }
      });

      return res.status(200).json({
        status: 200,
        message: 'Recommandation deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Recommandation.',
        error: error.message
      });
    }
  }

  async deleteAllRecommandations(req, res) {
    try {
      await this.recommendationService.deleteRecommendations({
        where: {}
      });

      return res.status(200).json({
        status: 200,
        message: 'Recommandations deleted successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        message: 'Error occured while deleting Recommandations.',
        error: error.message
      });
    }
  }
}
