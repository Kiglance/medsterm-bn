import express from 'express';
import WorkDayController from '../../controllers/work_day.controller';
const routes = express.Router();

routes.post('/:schedule_id', async (req, res) => {
  await new WorkDayController().createWorkDay(req, res);
});

routes.get('/:id', async (req, res) => {
  await new WorkDayController().getWorkDays(req, res);
});

routes.patch('/:id', async (req, res) => {
  await new WorkDayController().updateWorkDay(req, res);
});

routes.delete('/', async (req, res) => {
  await new WorkDayController().deleteDays(req, res);
});

export default routes;
